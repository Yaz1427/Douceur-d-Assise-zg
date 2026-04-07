"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Message envoyé !
        </h3>
        <p className="text-lg text-muted-foreground">
          Merci pour votre message. Nous vous répondrons sous 24h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-base">
            Prénom *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            className="h-12 text-lg"
            placeholder="Votre prénom"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-base">
            Nom *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            className="h-12 text-lg"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">
          Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="h-12 text-lg"
          placeholder="votre@email.fr"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">
          Téléphone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          className="h-12 text-lg"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-base">
          Sujet *
        </Label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full h-12 text-lg rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Choisissez un sujet</option>
          <option value="question">Question sur un produit</option>
          <option value="order">Question sur ma commande</option>
          <option value="return">Retour ou remboursement</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="text-lg resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg py-6 h-auto"
        disabled={loading}
      >
        {loading ? "Envoi en cours..." : "Envoyer le message"}
      </Button>

      <p className="text-base text-muted-foreground text-center">
        * Champs obligatoires
      </p>
    </form>
  )
}
