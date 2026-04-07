import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@douceur-assise.fr" 
                  className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>contact@douceur-assise.fr</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>01 23 45 67 89</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-lg text-muted-foreground">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Paris, France</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/a-propos" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/livraison" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Livraison
                </Link>
              </li>
              <li>
                <Link 
                  href="/cgv" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link 
                  href="/mentions-legales" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Service client</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/contact" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq#retours" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Retours et remboursements
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq#suivi" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Suivi de commande
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Paiement sécurisé</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="bg-card border border-border rounded px-3 py-2">
                <span className="text-base font-medium text-foreground">Visa</span>
              </div>
              <div className="bg-card border border-border rounded px-3 py-2">
                <span className="text-base font-medium text-foreground">Mastercard</span>
              </div>
              <div className="bg-card border border-border rounded px-3 py-2">
                <span className="text-base font-medium text-foreground">CB</span>
              </div>
              <div className="bg-card border border-border rounded px-3 py-2">
                <span className="text-base font-medium text-foreground">PayPal</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-success">
              <svg 
                className="h-5 w-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
              <span className="text-lg font-medium">Paiement 100% sécurisé</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-base text-muted-foreground">
            © {new Date().getFullYear()} Douceur d&apos;Assise • Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
