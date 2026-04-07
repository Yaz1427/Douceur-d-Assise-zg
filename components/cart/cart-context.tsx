'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
} from 'react'
import {
  createCart,
  addCartLines,
  updateCartLines,
  removeCartLines,
  getCart,
} from '@/lib/shopify'
import { ShopifyCart, ProductVariant, Product } from '@/lib/shopify/types'

const CART_ID_KEY = 'shopify_cart_id'

type CartContextType = {
  cart: ShopifyCart | null
  isLoading: boolean
  addItem: (variant: ProductVariant, product: Product) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize cart on mount
  useEffect(() => {
    const initCart = async () => {
      try {
        const storedCartId = localStorage.getItem(CART_ID_KEY)

        if (storedCartId) {
          const existingCart = await getCart(storedCartId)
          if (existingCart) {
            setCart(existingCart)
            setIsLoading(false)
            return
          }
        }

        // Create new cart if none exists
        const newCart = await createCart()
        localStorage.setItem(CART_ID_KEY, newCart.id)
        setCart(newCart)
      } catch (error) {
        console.error('Failed to initialize cart:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initCart()
  }, [])

  const addItem = useCallback(
    async (variant: ProductVariant, _product: Product) => {
      if (!cart) return

      try {
        const updatedCart = await addCartLines(cart.id, [
          { merchandiseId: variant.id, quantity: 1 },
        ])
        setCart(updatedCart)
      } catch (error) {
        console.error('Failed to add item:', error)
        throw error
      }
    },
    [cart],
  )

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return

      try {
        if (quantity === 0) {
          const updatedCart = await removeCartLines(cart.id, [lineId])
          setCart(updatedCart)
        } else {
          const updatedCart = await updateCartLines(cart.id, [
            { id: lineId, quantity },
          ])
          setCart(updatedCart)
        }
      } catch (error) {
        console.error('Failed to update item:', error)
        throw error
      }
    },
    [cart],
  )

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return

      try {
        const updatedCart = await removeCartLines(cart.id, [lineId])
        setCart(updatedCart)
      } catch (error) {
        console.error('Failed to remove item:', error)
        throw error
      }
    },
    [cart],
  )

  const itemCount = useMemo(() => {
    if (!cart) return 0
    return cart.lines.edges.reduce((total, { node }) => total + node.quantity, 0)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addItem,
        updateItem,
        removeItem,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
