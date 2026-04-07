import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos de Douceur d'Assise | Notre histoire et nos valeurs",
  description: "Découvrez Douceur d'Assise, entreprise française spécialisée dans les coussins ergonomiques. Notre mission : vous offrir le confort que vous méritez."
}

const values = [
  {
    icon: Heart,
    title: "Le confort avant tout",
    description: "Chaque produit est sélectionné pour son efficacité réelle. Nous testons tout nous-mêmes avant de vous le proposer."
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Mousse à mémoire de forme haute densité, housses durables et lavables. Nos produits sont faits pour durer."
  },
  {
    icon: Users,
    title: "Service client humain",
    description: "Une équipe française à votre écoute par téléphone et email. Nous répondons à toutes vos questions."
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Notre histoire
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Douceur d&apos;Assise est née d&apos;un constat simple : trop de personnes souffrent de douleurs liées à une mauvaise position assise, sans trouver de solution adaptée.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Pourquoi Douceur d&apos;Assise ?
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Après des années à voir nos proches souffrir de douleurs au dos, au coccyx et aux cervicales, nous avons décidé d&apos;agir. Nous avons recherché les meilleures solutions ergonomiques disponibles, testé des dizaines de produits, et sélectionné uniquement ceux qui font vraiment la différence.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Notre mission est simple : vous proposer des coussins ergonomiques de qualité, à des prix accessibles, avec un service client irréprochable. Pas de promesses en l&apos;air, juste des produits qui fonctionnent.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Basés en France, nous sommes une petite équipe passionnée par le bien-être. Chaque commande est traitée avec soin, et nous restons disponibles pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nos engagements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Produits testés et approuvés",
                "Livraison gratuite en France",
                "Garantie satisfait ou remboursé 30 jours",
                "Service client 100% français",
                "Réponse sous 24h à vos questions",
                "Prix transparents, sans surprise"
              ].map((commitment, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-success/5 rounded-lg border border-success/20"
                >
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-lg text-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à découvrir nos produits ?
          </h2>
          <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto">
            Rejoignez les milliers de clients qui ont retrouvé le confort avec Douceur d&apos;Assise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
            >
              <Link href="/catalogue">
                Voir nos coussins
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
