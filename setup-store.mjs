/**
 * DOUCEUR D'ASSISE — Script de création des produits et pages
 *
 * PRÉREQUIS :
 * 1. Va dans ton admin Shopify : https://769eba-tp.myshopify.com/admin/settings/apps/development
 * 2. Crée une "Custom app" → "Create an app"
 * 3. Dans "Configuration" → Active les scopes :
 *    - write_products, read_products
 *    - write_content, read_content  (pour les pages)
 * 4. Installe l'app → copie le "Admin API access token"
 * 5. Lance ce script : node setup-store.mjs VOTRE_TOKEN
 */

const TOKEN = process.argv[2];
const STORE = '769eba-tp.myshopify.com';

if (!TOKEN) {
  console.error('❌ Usage: node setup-store.mjs VOTRE_TOKEN_API');
  console.error('   Voir les instructions en haut du fichier.');
  process.exit(1);
}

const api = async (endpoint, method = 'GET', body = null) => {
  const res = await fetch(`https://${STORE}/admin/api/2024-04/${endpoint}`, {
    method,
    headers: {
      'X-Shopify-Access-Token': TOKEN,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API ${res.status}: ${err}`);
  }
  return res.json();
};

// ─── PRODUITS ────────────────────────────────────────────────────────────────

const products = [
  {
    title: 'Coussin Confort Coccyx',
    body_html: `<p>Vous en avez assez de souffrir après quelques heures assis ? Notre Coussin Confort Coccyx est conçu spécialement pour les personnes qui passent du temps en position assise : devant la télévision, à table, ou dans un fauteuil.</p>
<ul>
<li>✓ Mousse à mémoire de forme haute densité</li>
<li>✓ Découpe ergonomique qui libère le coccyx</li>
<li>✓ Housse amovible et lavable en machine</li>
<li>✓ Antidérapant : reste en place sur votre siège</li>
<li>✓ Dimensions : 45 x 35 x 7 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Télétravail, repas, lecture, télévision<br><strong>Entretien :</strong> Housse lavable à 30°C</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Coussin',
    tags: 'coccyx, ergonomique, mémoire de forme, confort',
    variants: [{ price: '44.90', compare_at_price: null, sku: 'DA-COCCYX-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Coussin Coccyx Confort | Soulagement Immédiat | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: 'Soulagez vos douleurs au coccyx avec notre coussin ergonomique en mousse mémoire. Livraison gratuite, satisfait ou remboursé 30 jours.', type: 'single_line_text_field' },
    ],
  },
  {
    title: 'Coussin Soutien Lombaire',
    body_html: `<p>Maux de dos après une journée assise ? C'est souvent le manque de soutien lombaire qui en est la cause. Notre Coussin Soutien Lombaire se place dans le creux de votre dos et vous aide à vous tenir droit naturellement.</p>
<ul>
<li>✓ Mousse à mémoire de forme qui s'adapte à votre dos</li>
<li>✓ Sangle élastique pour le fixer à votre chaise</li>
<li>✓ Housse respirante et lavable</li>
<li>✓ Convient à toutes les chaises et fauteuils</li>
<li>✓ Dimensions : 40 x 30 x 10 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Bureau, voiture, canapé, fauteuil<br><strong>Entretien :</strong> Housse lavable à 30°C</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Coussin',
    tags: 'lombaire, dos, ergonomique, soutien',
    variants: [{ price: '44.90', compare_at_price: null, sku: 'DA-LOMBAIRE-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Coussin Lombaire Ergonomique | Soutien du Dos | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: 'Soutenez votre dos naturellement avec notre coussin lombaire en mousse mémoire. Livraison gratuite en France.', type: 'single_line_text_field' },
    ],
  },
  {
    title: 'Coussin Nuit Paisible',
    body_html: `<p>Vous vous réveillez avec des douleurs dans le bas du dos ou les hanches ? La position sur le côté peut créer des tensions si vos jambes ne sont pas correctement alignées.</p>
<p>Notre Coussin Nuit Paisible se place entre vos genoux et maintient vos hanches dans une position naturelle toute la nuit.</p>
<ul>
<li>✓ Forme ergonomique qui reste en place</li>
<li>✓ Mousse à mémoire de forme confortable</li>
<li>✓ Housse douce et respirante</li>
<li>✓ Lavable en machine</li>
<li>✓ Dimensions : 25 x 20 x 15 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Dormeurs sur le côté, douleurs de hanches, sciatique<br><strong>Entretien :</strong> Housse lavable à 30°C</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Coussin',
    tags: 'sommeil, nuit, entre-jambes, hanches, sciatique',
    variants: [{ price: '29.90', compare_at_price: null, sku: 'DA-NUIT-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Coussin Entre-Jambes Sommeil | Nuits Sans Douleur | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: 'Dormez sans douleur avec notre coussin entre-jambes. Aligne la colonne vertébrale et soulage les hanches. Livraison gratuite.', type: 'single_line_text_field' },
    ],
  },
  {
    title: 'Coussin Auto Confort',
    body_html: `<p>Les trajets en voiture deviennent pénibles à cause de votre dos ou de votre coccyx ? Notre Coussin Auto Confort est spécialement conçu pour les sièges de voiture.</p>
<p>Plus épais et plus ferme qu'un coussin classique, il vous surélève légèrement pour une meilleure visibilité et un meilleur confort.</p>
<ul>
<li>✓ Mousse haute densité qui ne s'affaisse pas</li>
<li>✓ Base antidérapante pour rester en place</li>
<li>✓ Housse respirante idéale pour la voiture</li>
<li>✓ Poignée de transport intégrée</li>
<li>✓ Dimensions : 40 x 35 x 8 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Voiture, camping-car, train, avion<br><strong>Entretien :</strong> Housse lavable à 30°C</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Coussin',
    tags: 'voiture, auto, trajet, antidérapant',
    variants: [{ price: '39.90', compare_at_price: null, sku: 'DA-AUTO-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Coussin Voiture Confort | Trajets Sans Douleur | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: 'Transformez vos trajets en voiture avec notre coussin auto ergonomique. Rehausseur confortable, antidérapant. Livraison gratuite.', type: 'single_line_text_field' },
    ],
  },
  {
    title: 'Oreiller Cervical Ergonomique',
    body_html: `<p>Vous vous réveillez avec la nuque raide ou des maux de tête ? Un mauvais oreiller peut être la cause de ces désagréments quotidiens.</p>
<p>Notre Oreiller Cervical Ergonomique est conçu avec deux hauteurs différentes pour s'adapter à votre position de sommeil préférée.</p>
<ul>
<li>✓ Mousse à mémoire de forme thermorégulatrice</li>
<li>✓ Deux hauteurs : 10 cm et 12 cm selon le côté</li>
<li>✓ Housse hypoallergénique et lavable</li>
<li>✓ Convient aux dormeurs sur le dos et sur le côté</li>
<li>✓ Dimensions : 60 x 35 x 10/12 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Douleurs cervicales, torticolis, maux de tête au réveil<br><strong>Entretien :</strong> Housse lavable à 30°C</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Oreiller',
    tags: 'cervical, nuque, oreiller, mémoire de forme, torticolis',
    variants: [{ price: '49.90', compare_at_price: null, sku: 'DA-CERVICAL-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Oreiller Cervical Mémoire de Forme | Nuque Sans Douleur | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: 'Dormez mieux avec notre oreiller cervical ergonomique. Soulage la nuque et prévient les torticolis. Livraison gratuite.', type: 'single_line_text_field' },
    ],
  },
  {
    title: 'Pack Confort Intégral',
    body_html: `<p>Pourquoi choisir entre le confort du coccyx et le soutien du dos ? Notre Pack Confort Intégral réunit les deux en un seul coussin ingénieux.</p>
<p>C'est notre produit le plus complet, plébiscité par nos clients qui ne veulent aucun compromis sur leur bien-être.</p>
<ul>
<li>✓ Design 2-en-1 : assise coccyx + dossier lombaire intégrés</li>
<li>✓ Mousse à mémoire de forme premium haute densité</li>
<li>✓ S'adapte à toutes les chaises et fauteuils</li>
<li>✓ Housse premium respirante et lavable</li>
<li>✓ Dimensions : 45 x 40 x 35 cm</li>
</ul>
<p><strong>Idéal pour :</strong> Personnes souffrant du dos ET du coccyx, usage quotidien intensif<br><strong>Entretien :</strong> Housse lavable à 30°C</p>
<p>⭐ Notre meilleure vente — Plus de 500 clients satisfaits</p>`,
    vendor: "Douceur d'Assise",
    product_type: 'Pack',
    tags: 'pack, premium, coccyx, lombaire, 2-en-1, bestseller',
    variants: [{ price: '89.90', compare_at_price: null, sku: 'DA-PACK-01' }],
    metafields: [
      { namespace: 'global', key: 'title_tag', value: "Pack Confort Intégral 2-en-1 | Coccyx + Lombaire | Douceur d'Assise", type: 'single_line_text_field' },
      { namespace: 'global', key: 'description_tag', value: "Notre solution premium : coussin coccyx et lombaire intégré. Le choix de ceux qui ne veulent aucun compromis. Livraison gratuite.", type: 'single_line_text_field' },
    ],
  },
];

// ─── PAGES ───────────────────────────────────────────────────────────────────

const pages = [
  {
    title: 'Notre histoire',
    handle: 'a-propos',
    body_html: `<p>Douceur d'Assise est née d'un constat simple : trop de personnes souffrent en silence de douleurs liées à la position assise.</p>
<p>Après avoir vu nos propres parents se plaindre de leur dos et de leur coccyx, nous avons décidé de trouver des solutions efficaces et accessibles.</p>
<p>Aujourd'hui, nous sélectionnons les meilleurs coussins ergonomiques pour vous offrir un confort immédiat, sans vous ruiner et sans gadgets inutiles.</p>
<h2>Notre promesse</h2>
<ul>
<li>Des produits testés et approuvés</li>
<li>Un service client à votre écoute</li>
<li>La livraison gratuite en France</li>
<li>Satisfait ou remboursé 30 jours</li>
</ul>
<p>Une question ? Appelez-nous au <a href="tel:+33186261020">01 86 26 10 20</a> ou écrivez-nous à <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a></p>
<p><em>L'équipe Douceur d'Assise</em></p>`,
  },
  {
    title: 'Livraison & Retours',
    handle: 'livraison',
    body_html: `<h2>Livraison gratuite en France métropolitaine</h2>
<p>Toutes nos commandes sont livrées gratuitement chez vous par Colissimo ou Colis Privé.</p>
<h2>Délais de livraison</h2>
<p>Comptez <strong>10 à 15 jours ouvrés</strong> pour recevoir votre commande. Un numéro de suivi vous est envoyé par email dès l'expédition.</p>
<h2>Suivi de votre colis</h2>
<p>Vous recevez un email avec votre numéro de suivi dès que votre commande est expédiée. Vous pouvez suivre votre colis en temps réel.</p>
<h2>Retours et remboursements</h2>
<p>Vous avez <strong>30 jours</strong> pour changer d'avis. Si le produit ne vous convient pas, contactez-nous et nous organisons le retour. Le remboursement est effectué sous 5 jours ouvrés après réception du retour.</p>
<h2>Contact</h2>
<p>Une question sur votre livraison ?<br>
📞 <a href="tel:+33186261020">01 86 26 10 20</a><br>
📧 <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a></p>`,
  },
  {
    title: 'Questions fréquentes',
    handle: 'faq',
    body_html: `<h2>Combien de temps faut-il pour ressentir les effets ?</h2>
<p>La plupart de nos clients ressentent un soulagement dès la première utilisation. Le coussin agit immédiatement en répartissant votre poids et en libérant les points de pression.</p>

<h2>Le coussin va-t-il s'affaisser avec le temps ?</h2>
<p>Non. Nos coussins sont en mousse à mémoire de forme haute densité. Ils reprennent leur forme après chaque utilisation et gardent leur efficacité pendant des années.</p>

<h2>Puis-je laver le coussin ?</h2>
<p>La housse est amovible et lavable en machine à 30°C. Le coussin lui-même ne doit pas être lavé, mais il peut être aéré régulièrement.</p>

<h2>Le coussin convient-il à toutes les morphologies ?</h2>
<p>Oui. La mousse à mémoire de forme s'adapte à toutes les morphologies. Que vous pesiez 50 kg ou 100 kg, le coussin épouse votre forme.</p>

<h2>Puis-je utiliser le coussin en voiture ?</h2>
<p>Absolument. Nos coussins sont équipés d'une base antidérapante qui les maintient en place sur tous les types de sièges, y compris les sièges de voiture.</p>

<h2>Que faire si le coussin ne me convient pas ?</h2>
<p>Vous avez 30 jours pour nous le retourner et être remboursé intégralement. Contactez-nous par email ou téléphone et nous organisons le retour.</p>

<h2>Livrez-vous en dehors de la France ?</h2>
<p>Pour le moment, nous livrons uniquement en France métropolitaine. La livraison est gratuite.</p>

<h2>Comment vous contacter ?</h2>
<p>Par téléphone au <a href="tel:+33186261020">01 86 26 10 20</a> (du lundi au vendredi, 9h-18h) ou par email à <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a></p>`,
  },
  {
    title: 'Contactez-nous',
    handle: 'contact',
    body_html: `<p>Une question ? Une demande ? Nous sommes là pour vous aider.</p>

<h2>Par téléphone</h2>
<p>📞 <a href="tel:+33186261020">01 86 26 10 20</a><br>
Du lundi au vendredi, 9h-18h</p>

<h2>Par email</h2>
<p>📧 <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a><br>
Réponse sous 24h ouvrées</p>

<h2>Par courrier</h2>
<p>Douceur d'Assise<br>
Paris, France</p>`,
  },
  {
    title: 'Conditions Générales de Vente',
    handle: 'cgv',
    body_html: `<h2>Article 1 — Objet</h2>
<p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société Douceur d'Assise et tout client effectuant un achat sur le site douceurdassise.fr.</p>

<h2>Article 2 — Prix</h2>
<p>Les prix sont indiqués en euros TTC. Douceur d'Assise se réserve le droit de modifier ses prix à tout moment. Les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>

<h2>Article 3 — Commandes</h2>
<p>La validation de votre commande vaut acceptation des présentes CGV. Les informations contractuelles sont présentées en langue française et feront l'objet d'une confirmation reprenant ces informations à l'adresse email fournie.</p>

<h2>Article 4 — Livraison</h2>
<p>Les livraisons sont effectuées en France métropolitaine uniquement. Le délai de livraison est de 10 à 15 jours ouvrés. La livraison est gratuite.</p>

<h2>Article 5 — Droit de rétractation</h2>
<p>Conformément aux dispositions légales en vigueur, le client dispose d'un délai de 30 jours à compter de la réception de sa commande pour exercer son droit de rétractation. Le remboursement sera effectué sous 5 jours ouvrés après réception du retour.</p>

<h2>Article 6 — Garantie</h2>
<p>Tous nos produits bénéficient de la garantie légale de conformité (2 ans) et de la garantie contre les vices cachés.</p>

<h2>Article 7 — Contact</h2>
<p>Pour toute question relative à vos commandes :<br>
📞 <a href="tel:+33186261020">01 86 26 10 20</a><br>
📧 <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a></p>`,
  },
  {
    title: 'Mentions Légales',
    handle: 'mentions-legales',
    body_html: `<h2>Éditeur du site</h2>
<p>Douceur d'Assise<br>
Siège social : Paris, France<br>
Email : <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a><br>
Téléphone : <a href="tel:+33186261020">01 86 26 10 20</a></p>

<h2>Hébergement</h2>
<p>Ce site est hébergé par Shopify Inc., 151 O'Connor Street, Ground floor, Ottawa, Ontario, K2P 2L8, Canada.</p>

<h2>Propriété intellectuelle</h2>
<p>L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>

<h2>Données personnelles</h2>
<p>Les données personnelles collectées sur ce site sont utilisées uniquement dans le cadre du traitement de vos commandes. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à <a href="mailto:contact@douceurdassise.fr">contact@douceurdassise.fr</a>.</p>

<h2>Cookies</h2>
<p>Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.</p>`,
  },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

(async () => {
  console.log('🚀 Douceur d\'Assise — Setup du store\n');

  // Créer les produits
  console.log('📦 Création des 6 produits...\n');
  for (const product of products) {
    try {
      const result = await api('products.json', 'POST', { product });
      console.log(`  ✅ ${product.title} — ${product.variants[0].price}€`);
    } catch (e) {
      console.error(`  ❌ ${product.title}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 500)); // éviter rate limit
  }

  // Créer les pages
  console.log('\n📄 Création des 6 pages...\n');
  for (const page of pages) {
    try {
      const result = await api('pages.json', 'POST', { page });
      console.log(`  ✅ /pages/${page.handle} — "${page.title}"`);
    } catch (e) {
      console.error(`  ❌ /pages/${page.handle}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n🎉 Setup terminé ! Vérifie ton admin Shopify.');
  console.log(`   Produits : https://${STORE}/admin/products`);
  console.log(`   Pages    : https://${STORE}/admin/pages\n`);
})();
