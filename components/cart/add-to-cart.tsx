'use client'

import { ShoppingCart, Loader2 } from 'lucide-react'
import { Product, ProductVariant } from '@/lib/shopify/types'
import { useMemo, useTransition } from 'react'
import { useCart } from './cart-context'
import { Button, ButtonProps } from '../ui/button'

interface AddToCartButtonProps extends ButtonProps {
  product: Product
  selectedVariant?: ProductVariant | null
  className?: string
}

const getBaseProductVariant = (product: Product): ProductVariant => {
  return {
    id: product.id,
    title: product.title,
    availableForSale: product.availableForSale,
    selectedOptions: [],
    price: product.priceRange.minVariantPrice,
  }
}

export function AddToCartButton({
  product,
  selectedVariant,
  className,
  ...buttonProps
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isLoading, startTransition] = useTransition()

  // Resolve variant locally only for variantless products
  const resolvedVariant = useMemo(() => {
    if (selectedVariant) return selectedVariant
    if (product.variants.length === 0) return getBaseProductVariant(product)
    if (product.variants.length === 1) return product.variants[0]
    return undefined
  }, [selectedVariant, product])

  const getButtonText = () => {
    if (!product.availableForSale) return 'Rupture de stock'
    if (!resolvedVariant) return 'Choisir une option'
    return 'Ajouter au panier'
  }

  const isDisabled = !product.availableForSale || !resolvedVariant || isLoading

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (resolvedVariant) {
          startTransition(async () => {
            await addItem(resolvedVariant, product)
          })
        }
      }}
      className={className}
    >
      <Button
        type="submit"
        size="lg"
        aria-label={!resolvedVariant ? 'Choisir une option' : 'Ajouter au panier'}
        disabled={isDisabled}
        className="w-full text-lg py-6 gap-3"
        {...buttonProps}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Ajout en cours...
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            {getButtonText()}
          </>
        )}
      </Button>
    </form>
  )
}
