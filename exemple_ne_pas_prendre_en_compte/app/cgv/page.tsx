import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Douceur d'Assise",
  description: "Consultez nos conditions générales de vente pour les coussins ergonomiques Douceur d'Assise."
}

export default function CGVPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Conditions Générales de Vente
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Dernière mise à jour : Avril 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 1 - Objet</h2>
                <p className="text-lg leading-relaxed">
                  Les présentes conditions générales de vente (CGV) régissent les ventes de produits 
                  effectuées sur le site internet douceur-assise.fr, ci-après dénommé &quot;le Site&quot;, 
                  exploité par la société Douceur d&apos;Assise.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 2 - Identité du vendeur</h2>
                <p className="text-lg leading-relaxed">
                  Le Site est édité par Douceur d&apos;Assise<br />
                  Adresse : 75001 Paris, France<br />
                  Email : contact@douceur-assise.fr<br />
                  Téléphone : 01 23 45 67 89
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 3 - Prix</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC). 
                  La livraison est gratuite en France métropolitaine.
                </p>
                <p className="text-lg leading-relaxed">
                  Douceur d&apos;Assise se réserve le droit de modifier ses prix à tout moment, 
                  étant entendu que le prix figurant sur le Site le jour de la commande sera 
                  le seul applicable à l&apos;acheteur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 4 - Commande</h2>
                <p className="text-lg leading-relaxed mb-4">
                  L&apos;acheteur peut passer commande sur le Site sans créer de compte. 
                  La validation de la commande implique l&apos;acceptation des présentes CGV.
                </p>
                <p className="text-lg leading-relaxed">
                  Un email de confirmation de commande est envoyé à l&apos;acheteur récapitulant 
                  les produits commandés, le prix total et l&apos;adresse de livraison.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 5 - Paiement</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Le paiement s&apos;effectue en ligne par carte bancaire (Visa, Mastercard, CB) ou PayPal. 
                  Les transactions sont sécurisées par cryptage SSL.
                </p>
                <p className="text-lg leading-relaxed">
                  La commande est validée après confirmation du paiement par l&apos;organisme bancaire.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 6 - Livraison</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Les produits sont livrés à l&apos;adresse indiquée par l&apos;acheteur lors de la commande. 
                  Le délai de livraison est de 10 à 15 jours ouvrés en France métropolitaine.
                </p>
                <p className="text-lg leading-relaxed">
                  Un numéro de suivi est communiqué par email dès l&apos;expédition du colis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 7 - Droit de rétractation</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Conformément à l&apos;article L.221-18 du Code de la consommation, l&apos;acheteur dispose 
                  d&apos;un délai de 14 jours à compter de la réception du produit pour exercer son droit 
                  de rétractation, sans avoir à justifier de motif ni à payer de pénalités.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Douceur d&apos;Assise étend ce délai à <strong>30 jours</strong> dans le cadre de sa 
                  garantie &quot;Satisfait ou remboursé&quot;.
                </p>
                <p className="text-lg leading-relaxed">
                  Pour exercer ce droit, l&apos;acheteur doit notifier sa décision par email à 
                  contact@douceur-assise.fr ou par téléphone au 01 23 45 67 89. Le produit doit 
                  être retourné dans son état d&apos;origine.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 8 - Remboursement</h2>
                <p className="text-lg leading-relaxed">
                  En cas de retour, le remboursement est effectué dans un délai de 14 jours 
                  suivant la réception du produit retourné, par le même moyen de paiement 
                  que celui utilisé lors de la commande.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 9 - Garantie</h2>
                <p className="text-lg leading-relaxed">
                  Tous nos produits bénéficient de la garantie légale de conformité (articles L.217-4 
                  et suivants du Code de la consommation) et de la garantie des vices cachés 
                  (articles 1641 et suivants du Code civil).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 10 - Protection des données</h2>
                <p className="text-lg leading-relaxed">
                  Les données personnelles collectées lors de la commande sont traitées conformément 
                  au Règlement Général sur la Protection des Données (RGPD). Pour plus d&apos;informations, 
                  consultez notre politique de confidentialité.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Article 11 - Litiges</h2>
                <p className="text-lg leading-relaxed mb-4">
                  En cas de litige, l&apos;acheteur peut recourir gratuitement au service de médiation 
                  de la consommation. Les présentes CGV sont soumises au droit français.
                </p>
                <p className="text-lg leading-relaxed">
                  Pour toute réclamation, veuillez contacter notre service client : 
                  contact@douceur-assise.fr ou 01 23 45 67 89.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
