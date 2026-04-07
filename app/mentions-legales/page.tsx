import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | Douceur d'Assise",
  description: "Mentions légales du site Douceur d'Assise - Coussins ergonomiques."
}

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Mentions légales
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Informations légales concernant le site douceur-assise.fr
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Éditeur du site</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed">
                  <strong>Douceur d&apos;Assise</strong><br />
                  Adresse : 75001 Paris, France<br />
                  Téléphone : 01 23 45 67 89<br />
                  Email : contact@douceur-assise.fr<br />
                  Directeur de la publication : [Nom du directeur]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed">
                  Le site est hébergé par :<br />
                  <strong>Vercel Inc.</strong><br />
                  440 N Barranca Avenue #4133<br />
                  Covina, CA 91723<br />
                  États-Unis
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) 
                  est la propriété exclusive de Douceur d&apos;Assise ou de ses partenaires.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Toute reproduction, représentation, modification, publication ou adaptation de 
                  tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                  est interdite sans autorisation écrite préalable.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Protection des données personnelles</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et 
                  d&apos;opposition aux données vous concernant.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Les données personnelles collectées lors de votre commande sont utilisées 
                  uniquement pour le traitement de votre commande et l&apos;envoi d&apos;informations 
                  relatives à celle-ci.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Pour exercer vos droits ou pour toute question relative à la protection de vos 
                  données, contactez-nous à : contact@douceur-assise.fr
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation 
                  et réaliser des statistiques de visites.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être 
                  averti lorsqu&apos;un cookie est envoyé. Toutefois, certaines fonctionnalités 
                  du site peuvent ne pas fonctionner correctement sans cookies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation de responsabilité</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Douceur d&apos;Assise s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour 
                  des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir 
                  l&apos;exactitude, la précision ou l&apos;exhaustivité des informations.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  En conséquence, Douceur d&apos;Assise décline toute responsabilité pour toute 
                  imprécision, inexactitude ou omission portant sur des informations disponibles 
                  sur ce site.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-lg text-foreground leading-relaxed">
                  Pour toute question ou réclamation concernant le site, vous pouvez nous contacter :<br /><br />
                  <strong>Par email :</strong> contact@douceur-assise.fr<br />
                  <strong>Par téléphone :</strong> 01 23 45 67 89<br />
                  <strong>Par courrier :</strong> Douceur d&apos;Assise, 75001 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
