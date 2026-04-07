import { Truck, ShieldCheck, HeadphonesIcon, Star } from "lucide-react"

interface TrustBadgesProps {
  variant?: "default" | "compact"
}

export function TrustBadges({ variant = "default" }: TrustBadgesProps) {
  const badges = [
    {
      icon: Truck,
      text: "Livraison gratuite",
      subtext: "En France métropolitaine"
    },
    {
      icon: ShieldCheck,
      text: "Satisfait ou remboursé",
      subtext: "30 jours pour changer d'avis"
    },
    {
      icon: HeadphonesIcon,
      text: "SAV 100% français",
      subtext: "À votre écoute"
    },
    {
      icon: Star,
      text: "4,8/5 étoiles",
      subtext: "Plus de 1 400 avis"
    }
  ]

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-foreground">
            <badge.icon className="h-5 w-5 text-success" />
            <span className="text-base font-medium">{badge.text}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-muted py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                <badge.icon className="h-7 w-7 text-success" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">{badge.text}</p>
                <p className="text-base text-muted-foreground">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
