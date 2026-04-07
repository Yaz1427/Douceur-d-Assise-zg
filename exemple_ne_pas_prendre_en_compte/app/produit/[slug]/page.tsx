import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products, getProductBySlug } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Star, Truck, ShieldCheck, HeadphonesIcon, ChevronRight, Minus, Plus } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: "Produit non trouvé | Douceur d'Assise"
    }
  }

  return {
    title: `${product.name} - ${product.tagline} | Douceur d'Assise`,
    description: product.description
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border" aria-label="Fil d'Ariane">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-base text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link href="/catalogue" className="hover:text-primary transition-colors">
                Catalogue
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground font-medium">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-base font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-border'}`}
                    />
                  ))}
                </div>
                <span className="text-lg text-muted-foreground">
                  {product.rating}/5 ({product.reviewCount} avis)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    {product.price.toFixed(2).replace('.', ',')}€
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      {product.originalPrice.toFixed(2).replace('.', ',')}€
                    </span>
                  )}
                </div>
                <p className="text-success text-lg font-semibold mt-1">
                  Livraison GRATUITE en France
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Truck className="h-5 w-5 text-success" />
                  <span className="text-base">Livraison gratuite</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-5 w-5 text-success" />
                  <span className="text-base">Satisfait ou remboursé 30j</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <HeadphonesIcon className="h-5 w-5 text-success" />
                  <span className="text-base">SAV français</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-xl text-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Add to cart */}
              <div className="mt-8">
                <AddToCartButton product={product} />
              </div>

              {/* Delivery info */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-lg text-foreground">
                  <strong>Livraison estimée :</strong> 10-15 jours ouvrés
                </p>
                <p className="text-base text-muted-foreground mt-1">
                  Numéro de suivi envoyé par email dès expédition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Description détaillée
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {product.longDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Caractéristiques
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg text-foreground">
                      <span className="text-success mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Spécifications
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-base text-muted-foreground">Dimensions</dt>
                    <dd className="text-lg text-foreground">{product.dimensions}</dd>
                  </div>
                  <div>
                    <dt className="text-base text-muted-foreground">Poids</dt>
                    <dd className="text-lg text-foreground">{product.weight}</dd>
                  </div>
                  <div>
                    <dt className="text-base text-muted-foreground">Matériaux</dt>
                    <dd className="text-lg text-foreground">{product.material}</dd>
                  </div>
                </dl>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Entretien
                </h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="text-lg text-foreground">
                      • {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Vous aimerez aussi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
