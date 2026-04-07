import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes | Douceur d'Assise",
  description: "Trouvez les réponses à vos questions sur nos coussins ergonomiques, la livraison, les retours et remboursements."
}

const faqCategories = [
  {
    title: "Produits et qualité",
    questions: [
      {
        question: "Quelle est la différence entre vos coussins et ceux de supermarché ?",
        answer: "Nos coussins utilisent de la mousse à mémoire de forme haute densité, contrairement aux coussins bon marché qui s'affaissent rapidement. La mousse à mémoire de forme épouse parfaitement votre corps et conserve ses propriétés pendant des années. De plus, nos designs sont étudiés par des ergonomes pour un soutien optimal."
      },
      {
        question: "Combien de temps durent vos coussins ?",
        answer: "Avec un usage normal et un entretien régulier (aération et lavage de la housse), nos coussins conservent leurs propriétés pendant 3 à 5 ans minimum. La mousse à mémoire de forme haute densité que nous utilisons est conçue pour résister à une utilisation quotidienne prolongée."
      },
      {
        question: "Est-ce que le coussin garde une odeur ?",
        answer: "Il est possible qu'une légère odeur soit présente à l'ouverture du colis, c'est normal pour les produits en mousse à mémoire de forme. Cette odeur disparaît généralement en 24-48h. Nous recommandons d'aérer le coussin avant la première utilisation."
      },
      {
        question: "Les housses sont-elles lavables ?",
        answer: "Oui, toutes nos housses sont amovibles et lavables en machine à 30°C ou 40°C selon les modèles. Nous recommandons le séchage à l'air libre. Le coussin lui-même ne doit pas être lavé, mais peut être aéré régulièrement."
      }
    ]
  },
  {
    title: "Livraison",
    questions: [
      {
        question: "Quels sont les délais de livraison ?",
        answer: "La livraison prend généralement entre 10 et 15 jours ouvrés en France métropolitaine. Vous recevrez un email avec un numéro de suivi dès l'expédition de votre commande."
      },
      {
        question: "La livraison est-elle vraiment gratuite ?",
        answer: "Oui, la livraison est 100% gratuite en France métropolitaine pour toutes les commandes, sans minimum d'achat. Les frais de livraison sont inclus dans le prix affiché."
      },
      {
        question: "Livrez-vous en Corse et dans les DOM-TOM ?",
        answer: "Pour le moment, nous livrons uniquement en France métropolitaine. Nous travaillons à étendre nos zones de livraison. N'hésitez pas à nous contacter pour toute demande spécifique."
      },
      {
        question: "Comment suivre ma commande ?",
        answer: "Dès que votre commande est expédiée, vous recevez un email avec un numéro de suivi. Vous pouvez suivre votre colis à tout moment sur le site du transporteur. Si vous avez des questions, contactez notre service client."
      }
    ]
  },
  {
    title: "Retours et remboursements",
    id: "retours",
    questions: [
      {
        question: "Puis-je retourner un produit si je ne suis pas satisfait ?",
        answer: "Absolument ! Vous disposez de 30 jours après réception pour nous retourner votre produit s'il ne vous convient pas. Le produit doit être dans son état d'origine, avec sa housse propre. Contactez notre service client pour obtenir l'étiquette de retour."
      },
      {
        question: "Comment demander un remboursement ?",
        answer: "Contactez-nous par email à contact@douceur-assise.fr ou par téléphone au 01 23 45 67 89 en indiquant votre numéro de commande. Nous vous enverrons une étiquette de retour prépayée. Le remboursement est effectué sous 14 jours après réception du retour."
      },
      {
        question: "Les frais de retour sont-ils à ma charge ?",
        answer: "Pour les retours dans le cadre de notre garantie satisfait ou remboursé, nous prenons en charge les frais de retour. Vous recevrez une étiquette de retour prépayée à coller sur votre colis."
      },
      {
        question: "Mon produit est arrivé endommagé, que faire ?",
        answer: "Nous sommes vraiment désolés si cela arrive. Contactez-nous immédiatement avec des photos du produit et de l'emballage. Nous vous enverrons un nouveau produit sans frais ou vous rembourserons intégralement selon votre préférence."
      }
    ]
  },
  {
    title: "Commande et paiement",
    questions: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, CB), PayPal, et Apple Pay. Tous les paiements sont sécurisés par cryptage SSL."
      },
      {
        question: "Dois-je créer un compte pour commander ?",
        answer: "Non, vous pouvez commander en tant qu'invité sans créer de compte. Il vous suffit d'entrer vos informations de livraison et de paiement."
      },
      {
        question: "Puis-je modifier ou annuler ma commande ?",
        answer: "Oui, si votre commande n'a pas encore été expédiée. Contactez-nous le plus rapidement possible par téléphone au 01 23 45 67 89 ou par email. Une fois la commande expédiée, vous pourrez procéder à un retour."
      },
      {
        question: "Proposez-vous des codes promo ?",
        answer: "Nous proposons occasionnellement des offres spéciales. Inscrivez-vous à notre newsletter pour être informé de nos promotions. Nous ne pratiquons pas les fausses réductions permanentes."
      }
    ]
  },
  {
    title: "Suivi de commande",
    id: "suivi",
    questions: [
      {
        question: "Je n'ai pas reçu mon email de confirmation",
        answer: "Vérifiez d'abord votre dossier spam/courrier indésirable. Si vous ne trouvez toujours pas l'email, contactez-nous avec l'adresse email utilisée lors de la commande et nous vous renverrons la confirmation."
      },
      {
        question: "Mon colis indique 'livré' mais je ne l'ai pas reçu",
        answer: "Vérifiez auprès de vos voisins ou de votre gardien. Parfois, le livreur dépose le colis dans un endroit sûr. Si vous ne le trouvez pas, contactez-nous immédiatement et nous ferons une enquête auprès du transporteur."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Questions fréquentes
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions. Si vous ne trouvez pas ce que vous cherchez, contactez-nous.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.id}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-lg text-left font-medium py-5 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-muted-foreground pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Vous n&apos;avez pas trouvé votre réponse ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-2">
              <a href="tel:+33123456789">
                Appeler le 01 23 45 67 89
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
