import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Product } from "@/lib/shopify/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Safe access to price with fallback
  const price = product.priceRange?.minVariantPrice?.amount 
    ? parseFloat(product.priceRange.minVariantPrice.amount)
    : 0
  const compareAtPrice = product.compareAtPriceRange?.minVariantPrice?.amount 
    ? parseFloat(product.compareAtPriceRange.minVariantPrice.amount)
    : null
  
  const isBestseller = product.tags?.includes("bestseller") ?? false
  const isOnSale = compareAtPrice && compareAtPrice > price && price > 0
  
  // Get the first image from either featuredImage or images array
  const firstImage = product.featuredImage || product.images?.edges?.[0]?.node

  return (
    <Link 
      href={`/produit/${product.handle}`}
      className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-square bg-secondary/20">
        {firstImage?.url ? (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Aucune image
          </div>
        )}
        {isBestseller && (
          <span className="absolute top-3 left-3 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
            Plus vendu
          </span>
        )}
        {isOnSale && !isBestseller && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
            Promo
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        
        {product.description && (
          <p className="text-base text-muted-foreground mt-1 line-clamp-2">
            {product.description.slice(0, 100)}
          </p>
        )}

        {/* Rating placeholder */}
        <div className="flex items-center gap-1 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-border'}`}
              />
            ))}
          </div>
          <span className="text-base text-muted-foreground ml-1">
            (avis)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-3">
          {price > 0 ? (
            <>
              <span className="text-2xl font-bold text-primary">
                {price.toFixed(2).replace('.', ',')}€
              </span>
              {isOnSale && compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {compareAtPrice.toFixed(2).replace('.', ',')}€
                </span>
              )}
            </>
          ) : (
            <span className="text-xl text-muted-foreground">Prix sur demande</span>
          )}
        </div>

        <p className="text-success text-base font-medium mt-2">
          Livraison GRATUITE
        </p>
      </div>
    </Link>
  )
}
