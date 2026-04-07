import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Douceur d'Assise",
  description: "Contactez notre équipe française. Nous répondons à toutes vos questions sur nos coussins ergonomiques sous 24h."
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Contactez-nous
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe française est à votre écoute. Nous répondons à toutes vos questions sous 24h.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Téléphone</h3>
                    <a 
                      href="tel:+33123456789" 
                      className="text-xl text-primary hover:underline"
                    >
                      01 23 45 67 89
                    </a>
                    <p className="text-base text-muted-foreground mt-1">
                      Du lundi au vendredi, 9h-18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:contact@douceur-assise.fr" 
                      className="text-xl text-primary hover:underline"
                    >
                      contact@douceur-assise.fr
                    </a>
                    <p className="text-base text-muted-foreground mt-1">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Adresse</h3>
                    <p className="text-lg text-foreground">
                      Douceur d&apos;Assise<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Horaires</h3>
                    <p className="text-lg text-foreground">
                      Lundi - Vendredi : 9h - 18h<br />
                      Samedi - Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ link */}
              <div className="mt-10 p-6 bg-muted rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Une question fréquente ?
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  Consultez notre FAQ pour trouver rapidement une réponse à votre question.
                </p>
                <a 
                  href="/faq" 
                  className="text-primary text-lg font-medium hover:underline"
                >
                  Voir la FAQ →
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
