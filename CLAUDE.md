# 🪑 Douceur d'Assise — Brief Technique & Créatif

> **"Enfin assis sans douleur"**

Ce document est le brief complet pour développer la boutique Shopify. Il contient TOUT ce que tu dois savoir pour coder un site qui convertit.

---

## 📋 RÉSUMÉ EXÉCUTIF

| Élément | Valeur |
|---------|--------|
| **Niche** | Coussins ergonomiques (coccyx, lombaire, cervical) |
| **Marché** | France uniquement |
| **Cible principale** | Seniors 55-75 ans |
| **Positionnement** | Confort accessible, simplicité, confiance |
| **Canal d'acquisition** | Google Ads (Search) |
| **Stack** | Shopify + Thème Horizon + AliExpress (dropshipping) |

---

## 🎯 PERSONA CLIENT — "GÉRARD MORIN"

### Profil démographique

| Attribut | Valeur |
|----------|--------|
| **Prénom** | Gérard |
| **Âge** | 63 ans |
| **Situation** | Retraité depuis 2 ans, marié à Monique |
| **Localisation** | Ville moyenne en province (Limoges, Angers, Dijon...) |
| **Revenus** | 1 800 - 2 500€/mois (pension + complémentaire) |
| **Digital** | Utilise smartphone basique, tablette, email. Pas de réseaux sociaux. |

### Problème qu'il cherche à résoudre

- **Douleur au coccyx** après position assise prolongée
- Passe 3-4h/jour assis (TV, lecture, repas, voiture)
- A essayé les coussins de supermarché → pas satisfait
- Ne veut PAS aller chez le médecin pour "si peu"
- Cherche une **solution simple et rapide**

### Psychologie d'achat

| Trait | Implication pour le site |
|-------|-------------------------|
| **Méfiant par défaut** | Doit voir des preuves de confiance (avis, garantie, téléphone) |
| **Lit TOUT** | CGV, mentions légales, descriptions complètes |
| **Prend son temps** | 2-7 jours entre découverte et achat |
| **En parle à sa femme** | Arguments simples qu'il peut répéter |
| **Peur de se faire arnaquer** | "Entreprise française", adresse physique, SAV |
| **Sensible au prix** | Mais accepte de payer pour la qualité |
| **N'aime pas les gadgets** | Veut du concret, pas du marketing |

### Ce qui le RASSURE ✅

- Numéro de téléphone visible
- Mention "Entreprise française"
- Avis clients avec photos (de gens de son âge)
- Garantie "Satisfait ou remboursé 30 jours"
- Délai de livraison clair
- Paiement sécurisé (logos CB, Visa, Mastercard)
- Prix affiché clairement, pas de surprise

### Ce qui le fait FUIR ❌

- Pop-ups agressifs
- Compte obligatoire pour acheter
- Texte trop petit
- Couleurs criardes
- Promos "DERNIÈRE CHANCE -70%"
- Pas de coordonnées de contact
- Site en anglais ou mal traduit
- Process de paiement compliqué

### Parcours d'achat type

```
1. Ressent une douleur → en parle à Monique
2. Tape "coussin coccyx douleur" sur Google
3. Clique sur une annonce ou un résultat
4. Parcourt la page produit (lit TOUT)
5. Vérifie les avis
6. Regarde le prix + livraison
7. Hésite, ferme l'onglet
8. En reparle à Monique le soir
9. Revient 2-3 jours après (recherche directe ou remarketing)
10. Ajoute au panier
11. Vérifie la garantie et les CGV
12. Passe commande (préfère CB classique)
```

---

## 🎨 IDENTITÉ VISUELLE

### Palette de couleurs

| Élément | Couleur | Code Hex | Usage |
|---------|---------|----------|-------|
| **Fond principal** | Blanc cassé / Crème | `#FAF9F6` | Background pages |
| **Bleu confiance** | Bleu doux | `#4A7C9B` | Liens, accents |
| **Beige chaleureux** | Beige | `#D4C4A8` | Sections secondaires |
| **Boutons CTA** | Bleu foncé | `#2E5E7E` | Boutons d'action |
| **Texte principal** | Gris anthracite | `#333333` | Corps de texte |
| **Succès / Promo** | Vert doux | `#6B9E78` | Badges positifs |
| **Urgence** | Terracotta | `#C17A5A` | Alertes, promos |

### Pourquoi ces couleurs ?

- **Blanc cassé** : Moins agressif que le blanc pur, repose les yeux fatigués
- **Bleu doux** : Évoque le médical/sérieux sans être froid (confiance)
- **Beige** : Tons naturels = chaleur, authenticité
- **Pas de couleurs vives** : Les seniors préfèrent les tons apaisants

### Typographie

| Élément | Police | Taille | Poids |
|---------|--------|--------|-------|
| Titres H1 | System UI / Inter | 32-40px | 600 |
| Titres H2 | System UI / Inter | 24-28px | 600 |
| Corps texte | System UI / Inter | **18px minimum** | 400 |
| Boutons | System UI / Inter | 18px | 600 |
| Labels/Small | System UI / Inter | 14-16px | 400 |

> ⚠️ **RÈGLE ABSOLUE** : Jamais de texte en dessous de 14px. Gérard a besoin de ses lunettes.

### Boutons

```css
/* Bouton principal (CTA) */
.btn-primary {
  background: #2E5E7E;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

/* Bouton secondaire */
.btn-secondary {
  background: white;
  color: #2E5E7E;
  padding: 14px 28px;
  border: 2px solid #2E5E7E;
  border-radius: 8px;
  font-size: 16px;
}

/* Zone de clic large pour les seniors */
.btn-primary, .btn-secondary {
  min-height: 48px;
  min-width: 120px;
}
```

---

## 📦 CATALOGUE PRODUITS

### Produits à créer

| # | Nom produit | Prix | Coût | Marge | URL AliExpress |
|---|-------------|------|------|-------|----------------|
| 1 | Coussin Confort Coccyx | 44,90€ | 8,09€ | 82% | LANSSAL Sunny Home |
| 2 | Coussin Soutien Lombaire | 44,90€ | 8,39€ | 81% | LANSSAL Sunny Home |
| 3 | Coussin Nuit Paisible (entre-jambes) | 29,90€ | 11,23€ | 62% | Night Light Store |
| 4 | Coussin Auto Confort | 39,90€ | 7,08€ | 82% | Merry Car Interior |
| 5 | Oreiller Cervical Ergonomique | 49,90€ | 9,29€ | 81% | Shop110345 |
| 6 | Pack Confort Intégral (Premium) | 89,90€ | 19,59€ | 78% | Shop110345 |

### Noms de produits — Guidelines

- **Français correct**, pas d'anglicismes
- **Bénéfice dans le nom** : "Confort", "Soutien", "Paisible"
- **Pas de jargon technique** : pas "ergonomique mémoire de forme haute densité"
- **Court et mémorable** : 3-4 mots max

### Structure fiche produit

```
1. TITRE PRODUIT
   → Nom clair + bénéfice principal

2. PRIX
   → Gros, visible, pas de centimes (.00€ pas .99€)
   → "Livraison GRATUITE" juste en dessous

3. BADGES DE CONFIANCE (ligne)
   → ✓ Livraison gratuite
   → ✓ Satisfait ou remboursé 30 jours
   → ✓ SAV français

4. IMAGES
   → Photo principale sur fond neutre
   → Photo en situation (personne assise)
   → Photo des détails (housse, fermeture)
   → Dimensions annotées

5. DESCRIPTION COURTE (above the fold)
   → 2-3 phrases max
   → Problème → Solution → Bénéfice
   → "Vous souffrez de... ? Notre coussin..."

6. BOUTON CTA
   → "Ajouter au panier" (pas "Acheter maintenant")
   → Gros, bien visible

7. DESCRIPTION LONGUE (below the fold)
   → Caractéristiques techniques (liste)
   → Instructions d'entretien
   → Dimensions et poids
   → Questions fréquentes

8. AVIS CLIENTS
   → En bas de page
   → Avec photos si possible
```

---

## 🏠 STRUCTURE DU SITE

### Pages obligatoires

| Page | URL | Contenu clé |
|------|-----|-------------|
| Accueil | `/` | Hero + Produits vedettes + Réassurance |
| Catalogue | `/collections/all` | Tous les produits |
| Produit | `/products/[slug]` | Fiche produit complète |
| À propos | `/pages/a-propos` | Histoire, valeurs, équipe |
| Contact | `/pages/contact` | Formulaire + téléphone + email |
| FAQ | `/pages/faq` | Questions fréquentes |
| Livraison | `/pages/livraison` | Délais, suivi, retours |
| CGV | `/pages/cgv` | Conditions générales |
| Mentions légales | `/pages/mentions-legales` | Infos légales |

### Header (toutes les pages)

```
┌─────────────────────────────────────────────────────────────┐
│  🇫🇷 Entreprise française • ☎️ 01 XX XX XX XX              │
├─────────────────────────────────────────────────────────────┤
│  [LOGO] Douceur d'Assise    Accueil | Catalogue | Contact   │
│                                              🔍  🛒 Panier   │
└─────────────────────────────────────────────────────────────┘
```

**Éléments obligatoires :**
- Drapeau français + "Entreprise française"
- Numéro de téléphone cliquable
- Logo à gauche
- Navigation simple (3-4 liens max)
- Icône panier avec compteur

### Footer (toutes les pages)

```
┌─────────────────────────────────────────────────────────────┐
│  CONTACT           INFORMATIONS        PAIEMENT SÉCURISÉ    │
│  ────────          ────────────        ─────────────────    │
│  📧 contact@...    À propos            [Visa] [MC] [CB]     │
│  ☎️ 01 XX XX XX    FAQ                 [PayPal] [Apple]     │
│  📍 Paris, France  Livraison                                │
│                    CGV                 🔒 Paiement 100%      │
│                    Mentions légales        sécurisé          │
├─────────────────────────────────────────────────────────────┤
│  © 2026 Douceur d'Assise • Tous droits réservés             │
└─────────────────────────────────────────────────────────────┘
```

### Page d'accueil — Structure

```
1. HERO SECTION
   ├── Titre : "Enfin assis sans douleur"
   ├── Sous-titre : "Coussins ergonomiques conçus pour votre confort quotidien"
   ├── CTA : "Découvrir nos coussins"
   └── Image : Personne souriante assise confortablement

2. BANDE DE RÉASSURANCE
   ├── 🚚 Livraison gratuite
   ├── ✅ Satisfait ou remboursé 30j
   ├── 🇫🇷 SAV français
   └── ⭐ 4.8/5 (500+ avis)

3. PRODUITS VEDETTES
   ├── Titre : "Nos coussins les plus appréciés"
   └── 3-4 produits en grille

4. SECTION PROBLÈME/SOLUTION
   ├── "Vous reconnaissez-vous ?"
   ├── Liste de problèmes (douleurs, inconfort...)
   └── "Nos coussins sont faits pour vous"

5. TÉMOIGNAGES
   ├── 2-3 avis clients avec photo
   └── Prénom, âge, ville

6. SECTION FAQ RAPIDE
   ├── 3-4 questions fréquentes
   └── Lien vers FAQ complète

7. CTA FINAL
   ├── "Prêt à retrouver le confort ?"
   └── Bouton vers catalogue
```

---

## ✍️ TON & COPYWRITING

### Principes de rédaction

| Faire ✅ | Ne pas faire ❌ |
|---------|----------------|
| Phrases courtes (15 mots max) | Phrases à rallonge |
| Vocabulaire simple | Jargon technique |
| Tutoiement chaleureux OU vouvoiement respectueux | Mélanger les deux |
| Bénéfices concrets | Caractéristiques abstraites |
| "Vous" centré sur le client | "Nous" centré sur l'entreprise |

### Exemples de formulations

**❌ Mauvais :**
> "Notre coussin ergonomique en mousse à mémoire de forme haute densité offre un support optimal grâce à sa conception biomécanique avancée."

**✅ Bon :**
> "Fini les douleurs après 2 heures assis. Ce coussin s'adapte à votre corps et soulage votre coccyx immédiatement."

### Accroches par produit

| Produit | Accroche |
|---------|----------|
| Coussin Coccyx | "Soulagez votre coccyx dès la première utilisation" |
| Coussin Lombaire | "Votre dos vous dira merci" |
| Coussin Entre-jambes | "Des nuits enfin reposantes" |
| Coussin Auto | "Longs trajets sans douleur" |
| Oreiller Cervical | "Réveillez-vous sans raideur" |
| Pack Premium | "La solution complète pour votre confort" |

---

## 🔒 ÉLÉMENTS DE CONFIANCE

### Badges à afficher

```html
<!-- Badges de réassurance -->
<div class="trust-badges">
  <span>🚚 Livraison gratuite</span>
  <span>✅ Satisfait ou remboursé 30 jours</span>
  <span>🇫🇷 SAV 100% français</span>
  <span>🔒 Paiement sécurisé</span>
</div>
```

### Mentions obligatoires

- **Header** : "Entreprise française" + numéro de téléphone
- **Fiche produit** : Garantie 30 jours, délai de livraison
- **Footer** : Adresse, SIRET, contact complet
- **Checkout** : Logos CB/Visa/Mastercard/PayPal

### Faux pas à éviter

- ❌ "OFFRE LIMITÉE" (Gérard n'y croit pas)
- ❌ Compte à rebours fake
- ❌ "Plus que 3 en stock" (mensonge visible)
- ❌ Pop-up de sortie agressif
- ❌ Chat automatique qui s'ouvre seul

---

## 📱 RESPONSIVE & ACCESSIBILITÉ

### Mobile-first

- 60%+ du trafic sera mobile
- Boutons : minimum 48x48px
- Texte : minimum 16px sur mobile
- Espacement généreux entre les éléments cliquables

### Accessibilité seniors

| Élément | Règle |
|---------|-------|
| Contraste | Ratio minimum 4.5:1 |
| Liens | Soulignés OU couleur distincte |
| Focus | Outline visible sur tous les éléments |
| Images | Alt text descriptif |
| Formulaires | Labels explicites, erreurs claires |

---

## 🚚 INFORMATIONS LIVRAISON

### À afficher partout

| Info | Valeur |
|------|--------|
| **Délai** | 10-15 jours ouvrés |
| **Prix** | GRATUIT (inclus dans le prix) |
| **Transporteur** | Colissimo / Colis Privé |
| **Suivi** | Numéro de suivi par email |

### Formulation site

> "**Livraison offerte** en France métropolitaine.  
> Votre commande arrive sous **10-15 jours ouvrés**.  
> Un numéro de suivi vous est envoyé par email dès l'expédition."

---

## 💳 CHECKOUT & PAIEMENT

### Moyens de paiement

- Carte bancaire (CB, Visa, Mastercard)
- PayPal
- Apple Pay / Google Pay (bonus)

### Règles checkout

- ✅ Achat sans création de compte (guest checkout)
- ✅ Récapitulatif clair avant paiement
- ✅ Prix TTC affiché (pas de surprise)
- ✅ Logos de sécurité visibles
- ❌ Pas d'upsell agressif
- ❌ Pas de cases pré-cochées

---

## 📊 TRACKING & ANALYTICS

### À installer

- Google Analytics 4
- Google Ads Conversion Tracking
- Facebook Pixel (pour remarketing futur)

### Events à tracker

- `page_view` : toutes les pages
- `view_item` : vue fiche produit
- `add_to_cart` : ajout panier
- `begin_checkout` : début checkout
- `purchase` : achat confirmé

---

## 🔧 FICHIERS CLÉS À MODIFIER

### Couleurs : `config/settings_data.json`

```json
{
  "current": {
    "colors": {
      "background": "#FAF9F6",
      "text": "#333333",
      "primary_button": "#2E5E7E",
      "primary_button_label": "#FFFFFF",
      "secondary_button": "#4A7C9B"
    }
  }
}
```

### Header : `sections/header.liquid`

- Ajouter bandeau "Entreprise française"
- Ajouter numéro de téléphone
- Simplifier la navigation

### Footer : `sections/footer.liquid`

- Ajouter colonnes Contact / Infos / Paiement
- Logos moyens de paiement
- Mentions légales

### CSS global : `assets/base.css`

- Appliquer la palette de couleurs
- Augmenter les tailles de police
- Améliorer les contrastes

---

## ✅ CHECKLIST AVANT LANCEMENT

### Design
- [ ] Couleurs de la palette appliquées
- [ ] Police 16px minimum partout
- [ ] Contrastes vérifiés
- [ ] Mobile responsive testé

### Confiance
- [ ] Numéro de téléphone dans le header
- [ ] "Entreprise française" visible
- [ ] Garantie 30 jours affichée
- [ ] Logos paiement dans le footer

### Contenu
- [ ] 6 fiches produits complètes
- [ ] Page À propos rédigée
- [ ] Page Contact avec formulaire
- [ ] Page FAQ (10+ questions)
- [ ] Page Livraison
- [ ] CGV et mentions légales

### Technique
- [ ] Checkout sans compte obligatoire
- [ ] Paiements CB + PayPal activés
- [ ] Google Analytics installé
- [ ] Google Ads tracking configuré

### Test final
- [ ] Commander un produit en mode test
- [ ] Vérifier les emails de confirmation
- [ ] Tester sur mobile (iPhone + Android)
- [ ] Faire tester par quelqu'un de 55+ ans

---

## 🎯 OBJECTIFS DE CONVERSION

| Métrique | Objectif |
|----------|----------|
| Taux de conversion | 2-3% |
| Panier moyen | 45-55€ |
| Taux de rebond | < 60% |
| Temps sur site | > 2 min |

---

## 📞 CONTACT PROJET

- **Projet** : Douceur d'Assise
- **Stack** : Shopify + Horizon theme
- **Budget Ads** : 300-500€/mois
- **Cible** : France métropolitaine

---

*Document généré pour Claude Code — Avril 2026*