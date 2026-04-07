'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from './cart-context'
import { formatPrice } from '@/lib/shopify/utils'

export function CartDrawer() {
  const { cart, itemCount, updateItem, removeItem, isLoading } = useCart()
  const [open, setOpen] = useState(false)

  const lines = cart?.lines.edges.map(({ node }) => node) ?? []

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative"
          aria-label="Panier"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="hidden md:inline text-lg">Panier</span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 md:relative md:top-0 md:right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl">Votre panier</SheetTitle>
        </SheetHeader>

        {isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
            <p className="text-lg text-muted-foreground">
              Votre panier est vide
            </p>
            <Button onClick={() => setOpen(false)} asChild>
              <Link href="/catalogue">Voir nos produits</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-4">
                {lines.map((line) => {
                  const image = line.merchandise.product.images.edges[0]?.node
                  return (
                    <li
                      key={line.id}
                      className="flex gap-4 p-4 bg-muted/50 rounded-lg"
                    >
                      {image && (
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-secondary/20">
                          <Image
                            src={image.url}
                            alt={image.altText || line.merchandise.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">
                          {line.merchandise.product.title}
                        </h3>
                        {line.merchandise.title !== 'Default Title' && (
                          <p className="text-sm text-muted-foreground">
                            {line.merchandise.title}
                          </p>
                        )}
                        <p className="text-primary font-semibold mt-1">
                          {formatPrice(line.merchandise.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateItem(line.id, line.quantity - 1)
                            }
                            className="p-1 rounded hover:bg-secondary"
                            aria-label="Diminuer la quantite"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{line.quantity}</span>
                          <button
                            onClick={() =>
                              updateItem(line.id, line.quantity + 1)
                            }
                            className="p-1 rounded hover:bg-secondary"
                            aria-label="Augmenter la quantite"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeItem(line.id)}
                            className="p-1 rounded hover:bg-destructive/10 text-destructive ml-auto"
                            aria-label="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Total</span>
                <span className="font-bold text-primary">
                  {cart?.cost.totalAmount
                    ? formatPrice(cart.cost.totalAmount)
                    : '0,00 EUR'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Livraison gratuite en France metropolitaine
              </p>
              <Button
                size="lg"
                className="w-full text-lg py-6"
                asChild
              >
                <a href={cart?.checkoutUrl} target="_blank" rel="noopener noreferrer">
                  Passer commande
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Continuer mes achats
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
