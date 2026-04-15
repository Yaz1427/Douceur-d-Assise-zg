# 🔧 CORRECTIONS À FAIRE — Douceur d'Assise

> Ce fichier liste toutes les corrections urgentes à apporter au site.
> Claude Code : exécute ces corrections dans l'ordre et push après chaque bloc.

---

## 📋 RÉSUMÉ DES CORRECTIONS

| # | Problème | Priorité |
|---|----------|----------|
| 1 | Page "Notre Histoire" = mensonge | 🔴 URGENT |
| 2 | Pages 404 (blogs, packs, engagements) | 🔴 URGENT |
| 3 | Formulaire contact non fonctionnel | 🟡 MOYEN |
| 4 | Footer : "Politique de retour" → "Politique de livraison" | 🟢 FACILE |
| 5 | Emoji drapeau FR cassé | 🟢 FACILE |
| 6 | Ordre produits page d'accueil | 🟢 FACILE |
| 7 | Accents manquants (fautes) | 🔴 URGENT |
| 8 | Emplacements images page produit | 🟡 MOYEN |
| 9 | Accordéons page produit | 🔴 IMPORTANT |

---

## 1. ❌ PAGE "NOTRE HISTOIRE" — RÉÉCRIRE

L'histoire actuelle est FAKE. La remplacer par :

```html
<div class="page-notre-histoire">
  <h1>Notre Histoire</h1>
  
  <p>Bonjour,</p>
  
  <p>Je suis étudiant en informatique et j'ai lancé Douceur d'Assise pour une raison simple : proposer des coussins ergonomiques de qualité à un prix juste.</p>
  
  <p>En cherchant un coussin pour mes proches, j'ai constaté deux problèmes :</p>
  <ul>
    <li>Les coussins de supermarché s'affaissent après quelques semaines</li>
    <li>Les marques "premium" facturent 80-100€ pour des produits similaires</li>
  </ul>
  
  <p>J'ai décidé de créer une alternative : des coussins en mousse à mémoire de forme, livrés directement chez vous, sans intermédiaire ni marge excessive.</p>
  
  <h2>Ce que je vous promets :</h2>
  <ul>
    <li>Des produits testés et sélectionnés avec soin</li>
    <li>Des prix honnêtes</li>
    <li>Un service client réactif (oui, je réponds vraiment)</li>
    <li>Satisfait ou remboursé 30 jours, sans discussion</li>
  </ul>
  
  <p>Une question ? Contactez-moi directement.</p>
  
  <p>À bientôt,<br>
  L'équipe Douceur d'Assise</p>
</div>
```

---

## 2. ❌ PAGES 404 À CORRIGER

| Page | Problème | Solution |
|------|----------|----------|
| `/blogs/conseil` | 404 | Créer blog "conseils" (pluriel) OU corriger lien vers bon slug |
| `/collections/packs` | 404 | Vérifier collection existe, corriger lien |
| `/pages/engagements` | 404 | Créer la page |

**Page Engagements à créer :**

```html
<div class="page-engagements">
  <h1>Nos Engagements</h1>
  
  <p>Chez Douceur d'Assise, nous croyons qu'on peut vendre sans mentir.</p>
  
  <h2>✓ Honnêteté</h2>
  <ul>
    <li>Nos délais sont réels : 10-15 jours ouvrés</li>
    <li>Nos descriptions sont précises : on dit ce que le produit fait ET ne fait pas</li>
    <li>Pas de fausses promotions ni de prix gonflés artificiellement</li>
  </ul>
  
  <h2>✓ Pas de manipulation</h2>
  <ul>
    <li>Pas de "Plus que 2 en stock !" si c'est faux</li>
    <li>Pas de compte à rebours qui recommence à chaque visite</li>
    <li>Pas de faux avis ou statistiques inventées</li>
  </ul>
  
  <h2>✓ Satisfaction réelle</h2>
  <ul>
    <li>30 jours pour changer d'avis</li>
    <li>Remboursement sans discussion</li>
    <li>Service client humain</li>
  </ul>
  
  <h2>✓ Respect de vos données</h2>
  <ul>
    <li>On ne vend pas vos informations</li>
    <li>On ne vous spamme pas</li>
    <li>Vous pouvez vous désinscrire en 1 clic</li>
  </ul>
  
  <p>Une question ? Contactez-nous : <strong>contact@douceurdassise.fr</strong></p>
</div>
```

---

## 3. ❌ FORMULAIRE CONTACT

Vérifier dans l'admin Shopify :
- Settings > Notifications > Customer notifications
- L'email de destination est-il correct ?

---

## 4. ❌ FOOTER — RENOMMER LIEN

Dans `sections/footer.liquid` ou le fichier footer :
- Chercher "Politique de retour"
- Remplacer par "Politique de livraison"

---

## 5. ❌ EMOJI DRAPEAU FR

L'emoji 🇫🇷 ne s'affiche pas correctement. Remplacer par SVG :

**Créer `snippets/flag-fr.liquid` :**

```liquid
<svg class="flag-fr" width="20" height="14" viewBox="0 0 3 2" aria-label="Drapeau français">
  <rect width="1" height="2" x="0" fill="#002395"/>
  <rect width="1" height="2" x="1" fill="#FFFFFF"/>
  <rect width="1" height="2" x="2" fill="#ED2939"/>
</svg>

<style>
.flag-fr {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0,0,0,0.2);
}
</style>
```

**Dans le header**, remplacer l'emoji par :
```liquid
{% render 'flag-fr' %} Entreprise française
```

---

## 6. ❌ ORDRE PRODUITS PAGE D'ACCUEIL

Ordre souhaité :
1. **Coussin Coccyx Classique** (produit #1)
2. **Coussin Lombaire**
3. **Pack Duo Classique**

Dans la section produits vedettes, réordonner ou utiliser une collection ordonnée.

---

## 7. ⚠️ ACCENTS MANQUANTS

Chercher et corriger TOUS les textes sans accents :

| Faux | Correct |
|------|---------|
| Decouvrir | Découvrir |
| Economisez | Économisez |
| Securise | Sécurisé |
| A propos | À propos |
| Livree | Livrée |
| Satisfait | Satisfait (vérifier) |
| Memoire | Mémoire |
| Problemes | Problèmes |
| Resume | Résumé |
| Reponses | Réponses |

**Vérifier l'encodage UTF-8 :**
```html
<meta charset="UTF-8">
```

---

## 8. ❌ EMPLACEMENTS IMAGES PAGE PRODUIT

Ajouter des blocs configurables dans le template produit pour permettre l'upload d'images supplémentaires depuis l'admin.

**Dans `sections/main-product.liquid` ou le schema :**

```json
{
  "type": "image",
  "name": "Image personnalisée",
  "settings": [
    {
      "type": "image_picker",
      "id": "custom_image",
      "label": "Image"
    },
    {
      "type": "text",
      "id": "image_alt",
      "label": "Texte alternatif"
    },
    {
      "type": "select",
      "id": "image_position",
      "label": "Position",
      "options": [
        { "value": "above_description", "label": "Au-dessus de la description" },
        { "value": "below_description", "label": "Sous la description" },
        { "value": "in_gallery", "label": "Dans la galerie" }
      ],
      "default": "below_description"
    }
  ]
}
```

---

## 9. ⭐ ACCORDÉONS PAGE PRODUIT (PRIORITÉ HAUTE)

Créer des sections ouvrables comme les concurrents.

**Créer `snippets/product-accordions.liquid` :**

```liquid
<div class="product-accordions">
  
  {%- comment -%} Accordéon 1 : Pour qui ? {%- endcomment -%}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">✓ Ce coussin est fait pour vous si...</span>
      <span class="accordion-toggle">+</span>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>Vous avez mal au coccyx après 30 minutes assis</li>
        <li>Vous passez plusieurs heures par jour assis (TV, repas, voiture)</li>
        <li>Les coussins de supermarché ne vous ont pas convaincu</li>
        <li>Vous cherchez une solution simple, sans médicaments</li>
      </ul>
    </div>
  </details>
  
  {%- comment -%} Accordéon 2 : Problèmes soulagés {%- endcomment -%}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">🩺 Problèmes soulagés</span>
      <span class="accordion-toggle">+</span>
    </summary>
    <div class="accordion-content">
      <p>Ce coussin peut soulager :</p>
      <ul>
        <li>Douleurs au coccyx (coccygodynie)</li>
        <li>Inconfort en position assise prolongée</li>
        <li>Pression sur le bas du dos</li>
        <li>Gêne après une opération</li>
      </ul>
      <p class="disclaimer">⚠️ Ce coussin n'est pas un dispositif médical. Il ne remplace pas un avis médical.</p>
    </div>
  </details>
  
  {%- comment -%} Accordéon 3 : Caractéristiques {%- endcomment -%}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">📐 Caractéristiques techniques</span>
      <span class="accordion-toggle">+</span>
    </summary>
    <div class="accordion-content">
      <ul>
        <li><strong>Matière :</strong> Mousse à mémoire de forme</li>
        <li><strong>Housse :</strong> Tissu respirant, lavable en machine (30°C)</li>
        <li><strong>Forme :</strong> Découpe en U pour libérer le coccyx</li>
        <li><strong>Base :</strong> Revêtement antidérapant</li>
        <li><strong>Dimensions :</strong> 45 x 35 x 7 cm</li>
        <li><strong>Poids :</strong> environ 500g</li>
      </ul>
    </div>
  </details>
  
  {%- comment -%} Accordéon 4 : Livraison {%- endcomment -%}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">🚚 Livraison et retours</span>
      <span class="accordion-toggle">+</span>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>🚚 <strong>Livraison gratuite</strong> en France métropolitaine</li>
        <li>📦 <strong>Délai :</strong> 10-15 jours ouvrés après expédition</li>
        <li>📧 <strong>Suivi :</strong> Numéro de suivi envoyé par email</li>
        <li>↩️ <strong>Retours :</strong> Satisfait ou remboursé 30 jours</li>
      </ul>
    </div>
  </details>
  
  {%- comment -%} Accordéon 5 : Entretien {%- endcomment -%}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">🧼 Instructions d'entretien</span>
      <span class="accordion-toggle">+</span>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>🧼 Housse lavable en machine à 30°C</li>
        <li>⚠️ Ne pas laver la mousse directement</li>
        <li>☀️ Sécher la housse à l'air libre</li>
        <li>🔄 Laver toutes les 2-3 semaines pour une hygiène optimale</li>
      </ul>
    </div>
  </details>
  
</div>

<style>
.product-accordions {
  margin: 2rem 0;
  border-top: 1px solid #D4C4A8;
}

.accordion-item {
  border-bottom: 1px solid #D4C4A8;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  list-style: none;
  -webkit-user-select: none;
  user-select: none;
}

.accordion-header::-webkit-details-marker {
  display: none;
}

.accordion-title {
  flex: 1;
}

.accordion-toggle {
  font-size: 24px;
  font-weight: 300;
  color: #4A7C9B;
  transition: transform 0.3s ease;
  margin-left: 1rem;
}

details[open] .accordion-toggle {
  transform: rotate(45deg);
}

.accordion-content {
  padding: 0 0 1.5rem 0;
  font-size: 16px;
  line-height: 1.7;
  color: #555;
}

.accordion-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.accordion-content li {
  margin-bottom: 0.5rem;
}

.accordion-content .disclaimer {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #FFF8E7;
  border-radius: 6px;
  font-size: 14px;
  border-left: 3px solid #C17A5A;
}

/* Mobile */
@media (max-width: 749px) {
  .accordion-header {
    font-size: 16px;
    padding: 1rem 0;
  }
  
  .accordion-content {
    font-size: 15px;
  }
}
</style>
```

**Ajouter dans `sections/main-product.liquid` après le bouton d'achat :**

```liquid
{%- render 'product-accordions' -%}
```

---

## ✅ CHECKLIST FINALE

- [ ] Page "Notre Histoire" mise à jour
- [ ] Page "Engagements" créée
- [ ] Liens 404 corrigés (blogs, packs)
- [ ] Formulaire contact vérifié
- [ ] Footer : "Politique de livraison"
- [ ] Drapeau FR en SVG
- [ ] Ordre produits page d'accueil
- [ ] Accents UTF-8 corrigés partout
- [ ] Blocs images ajoutés au template produit
- [ ] Accordéons créés et fonctionnels
- [ ] Push GitHub avec commit message clair

---

## 📦 COMMIT MESSAGE

```
fix: corrections majeures site v2

- Page Notre Histoire réécrite (version honnête)
- Page Engagements créée
- Pages 404 corrigées
- Footer: Politique de retour → Politique de livraison  
- Drapeau FR en SVG (remplace emoji cassé)
- Ordre produits page d'accueil corrigé
- Accents UTF-8 corrigés
- Accordéons page produit (5 sections)
- Blocs images configurables ajoutés
```
