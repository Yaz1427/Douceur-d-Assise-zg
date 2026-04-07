import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Votre Panier | Douceur d'Assise",
  description: "Consultez votre panier et finalisez votre commande."
}

export default function PanierPage() {
  // In a real app, this would fetch cart data from state/context
  const cartEmpty = true

  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Votre panier
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 md:py-20 flex-1">
        <div className="container mx-auto px-4">
          {cartEmpty ? (
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Votre panier est vide
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez nos coussins ergonomiques et retrouvez le confort que vous méritez.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/catalogue">
                  Voir nos produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Cart items would go here */}
              <p className="text-lg text-foreground">
                Contenu du panier...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-muted-foreground">
            <span className="flex items-center gap-2 text-base">
              <span className="text-success">✓</span> Livraison gratuite
            </span>
            <span className="flex items-center gap-2 text-base">
              <span className="text-success">✓</span> Paiement sécurisé
            </span>
            <span className="flex items-center gap-2 text-base">
              <span className="text-success">✓</span> Satisfait ou remboursé 30j
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
