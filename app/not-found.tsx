import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page non trouvée
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-6 py-5 h-auto">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-6 py-5 h-auto border-2">
            <Link href="/catalogue">
              Voir nos produits
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
