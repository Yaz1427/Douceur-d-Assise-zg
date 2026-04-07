"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingCart, Check } from "lucide-react"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Quantity selector */}
      <div className="flex items-center gap-4">
        <span className="text-lg text-foreground">Quantité :</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Diminuer la quantité"
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="w-12 text-center text-xl font-semibold">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Augmenter la quantité"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <Button
        onClick={handleAddToCart}
        size="lg"
        className={`w-full text-lg py-6 h-auto transition-all ${
          added ? 'bg-success hover:bg-success' : ''
        }`}
      >
        {added ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Ajouté au panier !
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Ajouter au panier
          </>
        )}
      </Button>

      {/* Total */}
      <p className="text-center text-lg text-muted-foreground">
        Total : <span className="font-semibold text-foreground">
          {(product.price * quantity).toFixed(2).replace('.', ',')}€
        </span>
      </p>
    </div>
  )
}
