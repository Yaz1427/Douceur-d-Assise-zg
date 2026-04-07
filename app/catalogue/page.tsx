import type { Metadata } from "next"
import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/shopify"
import { TrustBadges } from "@/components/trust-badges"

export const metadata: Metadata = {
  title: "Catalogue - Coussins Ergonomiques | Douceur d'Assise",
  description: "Découvrez notre gamme complète de coussins ergonomiques : coccyx, lombaire, cervical, auto. Livraison gratuite en France. Satisfait ou remboursé 30 jours."
}

export default async function CataloguePage() {
  // Fetch all products from Shopify
  const products = await getProducts({})

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Notre catalogue
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Tous nos coussins ergonomiques pour votre confort quotidien. Qualité garantie, livraison gratuite.
          </p>
        </div>
      </section>

      {/* Trust badges compact */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <TrustBadges variant="compact" />
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Aucun produit disponible pour le moment.
              </p>
              <p className="text-base text-muted-foreground">
                Connectez votre boutique Shopify en ajoutant la variable d&apos;environnement{" "}
                <code className="bg-muted px-2 py-1 rounded">NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN</code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom reassurance */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Notre équipe est disponible par téléphone au{" "}
              <a href="tel:+33123456789" className="text-primary font-semibold hover:underline">
                01 23 45 67 89
              </a>{" "}
              pour vous conseiller dans votre choix.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
