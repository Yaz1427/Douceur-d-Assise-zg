import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Clock, Package, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Livraison - Délais et Informations | Douceur d'Assise",
  description: "Livraison gratuite en France métropolitaine. Délais de 10-15 jours ouvrés. Suivi de commande par email."
}

export default function LivraisonPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Livraison
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Toutes les informations sur la livraison de vos coussins ergonomiques.
          </p>
        </div>
      </section>

      {/* Key info cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Livraison gratuite</h3>
              <p className="text-lg text-muted-foreground mt-2">
                En France métropolitaine, sans minimum
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">10-15 jours</h3>
              <p className="text-lg text-muted-foreground mt-2">
                Délai de livraison estimé
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Package className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Suivi inclus</h3>
              <p className="text-lg text-muted-foreground mt-2">
                Numéro de suivi par email
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Retours faciles</h3>
              <p className="text-lg text-muted-foreground mt-2">
                30 jours pour changer d&apos;avis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed info */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Zones de livraison
              </h2>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <p className="text-lg text-foreground leading-relaxed">
                  Nous livrons actuellement en <strong>France métropolitaine uniquement</strong>. 
                  La livraison est gratuite pour toutes les commandes, sans minimum d&apos;achat.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Pour les livraisons en Corse, DOM-TOM ou à l&apos;international, veuillez nous contacter 
                  pour obtenir un devis personnalisé.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Délais de livraison
              </h2>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Le délai de livraison est de <strong>10 à 15 jours ouvrés</strong> après validation 
                  de votre commande.
                </p>
                <ul className="space-y-3 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-success">✓</span>
                    <span>Commande validée : vous recevez un email de confirmation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success">✓</span>
                    <span>Expédition : email avec numéro de suivi sous 2-3 jours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success">✓</span>
                    <span>Livraison : entre 10 et 15 jours ouvrés au total</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Suivi de commande
              </h2>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Dès l&apos;expédition de votre commande, vous recevez un email contenant :
                </p>
                <ul className="space-y-2 text-lg text-foreground">
                  <li>• Votre numéro de suivi</li>
                  <li>• Le lien vers le site du transporteur</li>
                  <li>• Les instructions pour suivre votre colis</li>
                </ul>
                <p className="text-lg text-muted-foreground mt-4">
                  Si vous n&apos;avez pas reçu cet email, vérifiez votre dossier spam ou 
                  contactez-nous avec votre numéro de commande.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Retours et remboursements
              </h2>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Vous disposez de <strong>30 jours après réception</strong> pour nous retourner 
                  votre produit si vous n&apos;êtes pas satisfait.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Pour effectuer un retour :
                </p>
                <ol className="space-y-2 text-lg text-foreground list-decimal list-inside">
                  <li>Contactez notre service client par email ou téléphone</li>
                  <li>Nous vous envoyons une étiquette de retour prépayée</li>
                  <li>Renvoyez le produit dans son emballage d&apos;origine</li>
                  <li>Remboursement sous 14 jours après réception du retour</li>
                </ol>
                <p className="text-lg text-success font-medium mt-4">
                  Les frais de retour sont pris en charge par Douceur d&apos;Assise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Une question sur votre livraison ?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-12 px-8 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </Link>
            <a 
              href="tel:+33123456789" 
              className="inline-flex items-center justify-center h-12 px-8 text-lg font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
