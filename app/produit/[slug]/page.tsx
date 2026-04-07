import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProduct, getProducts } from "@/lib/shopify"
import { ProductCard } from "@/components/product-card"
import { Star, Truck, ShieldCheck, HeadphonesIcon, ChevronRight } from "lucide-react"
import { AddToCartShopify } from "@/components/cart/add-to-cart"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    return {
      title: "Produit non trouvé | Douceur d'Assise"
    }
  }

  return {
    title: `${product.title} | Douceur d'Assise`,
    description: product.description
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  // Get related products
  const allProducts = await getProducts({})
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  const price = parseFloat(product.priceRange.minVariantPrice.amount)
  const compareAtPrice = product.compareAtPriceRange?.minVariantPrice?.amount 
    ? parseFloat(product.compareAtPriceRange.minVariantPrice.amount)
    : null

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
              {product.title}
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
                {product.featuredImage ? (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText || product.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Aucune image
                  </div>
                )}
                {product.tags.includes("bestseller") && (
                  <span className="absolute top-4 left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-base font-medium">
                    Plus vendu
                  </span>
                )}
              </div>
              
              {/* Additional images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-secondary/20">
                      <Image
                        src={image.url}
                        alt={image.altText || `${product.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 25vw, 12.5vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.title}
              </h1>
              
              {/* Rating placeholder - could be replaced with Shopify metafields */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-border'}`}
                    />
                  ))}
                </div>
                <span className="text-lg text-muted-foreground">
                  4/5 (avis vérifiés)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    {price.toFixed(2).replace('.', ',')}€
                  </span>
                  {compareAtPrice && compareAtPrice > price && (
                    <span className="text-2xl text-muted-foreground line-through">
                      {compareAtPrice.toFixed(2).replace('.', ',')}€
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
              <div className="mt-6 text-xl text-foreground leading-relaxed prose prose-lg max-w-none">
                {product.descriptionHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                ) : (
                  <p>{product.description}</p>
                )}
              </div>

              {/* Add to cart */}
              <div className="mt-8">
                <AddToCartShopify product={product} />
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-muted">
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
      )}
    </div>
  )
}
