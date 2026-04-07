"use client"

import Link from "next/link"
import { Phone, ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar with trust elements */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <span className="text-lg">🇫🇷</span>
            <span className="font-medium">Entreprise française</span>
          </span>
          <span className="hidden md:inline text-primary-foreground/60">•</span>
          <a 
            href="tel:+33123456789" 
            className="flex items-center gap-2 hover:underline"
          >
            <Phone className="h-4 w-4" />
            <span>01 23 45 67 89</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-semibold text-primary">
                Douceur d&apos;Assise
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/catalogue" 
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                Catalogue
              </Link>
              <Link 
                href="/a-propos" 
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link 
                href="/panier" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-2"
                aria-label="Panier"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="hidden md:inline text-lg">Panier</span>
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-lg py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/catalogue" 
                className="text-lg py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catalogue
              </Link>
              <Link 
                href="/a-propos" 
                className="text-lg py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className="text-lg py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
