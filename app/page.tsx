import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrustBadges } from "@/components/trust-badges"
import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/shopify"
import { Star, CheckCircle, ArrowRight } from "lucide-react"

const testimonials = [
  {
    name: "Marie-Claire D.",
    age: 67,
    location: "Lyon",
    rating: 5,
    text: "Après des mois de douleurs au coccyx, ce coussin a changé ma vie. Je peux enfin regarder la télévision sans souffrir. Merci !",
    product: "Coussin Confort Coccyx"
  },
  {
    name: "Jean-Pierre M.",
    age: 72,
    location: "Bordeaux",
    rating: 5,
    text: "Très sceptique au début, j'ai été convaincu dès la première utilisation. La qualité est au rendez-vous et le service client est très réactif.",
    product: "Pack Confort Intégral"
  },
  {
    name: "Françoise L.",
    age: 63,
    location: "Nantes",
    rating: 5,
    text: "Je l'utilise tous les jours dans ma voiture pour mes trajets. Fini les douleurs lombaires après 1h de route. Je recommande vivement.",
    product: "Coussin Auto Confort"
  }
]

const problems = [
  "Douleurs au coccyx après être resté assis longtemps",
  "Mal de dos en fin de journée",
  "Difficultés à trouver une position confortable",
  "Raideurs cervicales au réveil",
  "Inconfort pendant les longs trajets en voiture"
]

export default async function HomePage() {
  // Fetch products from Shopify
  const products = await getProducts({ first: 4 })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary/30">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Enfin assis sans douleur
              </h1>
              <p className="mt-4 md:mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Coussins ergonomiques conçus pour votre confort quotidien. Soulagez vos douleurs dès la première utilisation.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link href="/catalogue">
                    Découvrir nos coussins
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2">
                  <Link href="/a-propos">
                    En savoir plus
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-sm font-medium"
                    >
                      {["MC", "JP", "FL", "RD"][i-1]}
                    </div>
                  ))}
                </div>
                <p className="text-lg">
                  <span className="font-semibold text-foreground">+1 400 clients</span> nous font confiance
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-comfort.jpg"
                  alt="Couple senior confortablement installe grace aux coussins Douceur d'Assise"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nos coussins les plus appréciés
            </h2>
            <p className="mt-3 text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisis par des milliers de clients satisfaits pour leur qualité et leur efficacité.
            </p>
          </div>
          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Connectez votre boutique Shopify pour afficher vos produits.
              </p>
            </div>
          )}
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2">
              <Link href="/catalogue">
                Voir tous nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Vous reconnaissez-vous ?
            </h2>
            <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <h3 className="text-2xl font-semibold text-destructive mb-4">
                  Vos problèmes
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                      <span className="text-destructive mt-0.5">✗</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-success/5 rounded-xl p-6 md:p-8 border border-success/20">
                <h3 className="text-2xl font-semibold text-success mb-4">
                  Nos solutions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span>Soulagement immédiat des douleurs</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span>Mousse à mémoire de forme de qualité</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span>Design ergonomique étudié</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span>Housses lavables et hygiéniques</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span>Garantie satisfait ou remboursé 30 jours</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/catalogue">
                  Découvrir la solution adaptée
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ce que nos clients disent
            </h2>
            <p className="mt-3 text-xl text-muted-foreground">
              Des témoignages authentiques de personnes comme vous.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-base text-muted-foreground">
                    {testimonial.age} ans, {testimonial.location}
                  </p>
                  <p className="text-base text-accent mt-1">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à retrouver le confort ?
          </h2>
          <p className="mt-4 text-xl opacity-90 max-w-2xl mx-auto">
            Rejoignez plus de 1 400 clients satisfaits. Livraison gratuite et garantie satisfait ou remboursé 30 jours.
          </p>
          <div className="mt-8">
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
          </div>
        </div>
      </section>
    </div>
  )
}
