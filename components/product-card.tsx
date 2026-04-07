import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/produit/${product.slug}`}
      className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-square bg-secondary/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-base text-muted-foreground mt-1 line-clamp-2">
          {product.tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-border'}`}
              />
            ))}
          </div>
          <span className="text-base text-muted-foreground ml-1">
            ({product.reviewCount} avis)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-2xl font-bold text-primary">
            {product.price.toFixed(2).replace('.', ',')}€
          </span>
          {product.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {product.originalPrice.toFixed(2).replace('.', ',')}€
            </span>
          )}
        </div>

        <p className="text-success text-base font-medium mt-2">
          Livraison GRATUITE
        </p>
      </div>
    </Link>
  )
}
