export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  price: number
  originalPrice?: number
  description: string
  longDescription: string
  features: string[]
  dimensions: string
  weight: string
  material: string
  care: string[]
  image: string
  images: string[]
  category: string
  badge?: string
  rating: number
  reviewCount: number
}

export const products: Product[] = [
  {
    id: "1",
    slug: "coussin-confort-coccyx",
    name: "Coussin Confort Coccyx",
    tagline: "Soulagez votre coccyx dès la première utilisation",
    price: 44.90,
    description: "Vous souffrez de douleurs au coccyx après 2 heures assis ? Notre coussin s'adapte parfaitement à votre corps et soulage la pression sur votre coccyx immédiatement.",
    longDescription: "Ce coussin ergonomique en mousse à mémoire de forme a été spécialement conçu pour soulager les douleurs du coccyx. Sa forme en U permet de supprimer totalement la pression sur cette zone sensible, tout en offrant un soutien optimal pour vos hanches et vos cuisses.",
    features: [
      "Mousse à mémoire de forme haute densité",
      "Forme ergonomique en U pour le coccyx",
      "Housse amovible et lavable",
      "Base antidérapante",
      "Convient à toutes les chaises"
    ],
    dimensions: "45 x 40 x 8 cm",
    weight: "650 g",
    material: "Mousse à mémoire de forme, housse en velours doux",
    care: [
      "Housse lavable en machine à 30°C",
      "Ne pas passer au sèche-linge",
      "Aérer régulièrement le coussin"
    ],
    image: "/images/coussin-coccyx.jpg",
    images: ["/images/coussin-coccyx.jpg", "/images/coussin-coccyx-2.jpg", "/images/coussin-coccyx-3.jpg"],
    category: "Coccyx",
    badge: "Plus vendu",
    rating: 4.8,
    reviewCount: 347
  },
  {
    id: "2",
    slug: "coussin-soutien-lombaire",
    name: "Coussin Soutien Lombaire",
    tagline: "Votre dos vous dira merci",
    price: 44.90,
    description: "Marre des douleurs lombaires ? Ce coussin épouse parfaitement la courbe de votre dos pour un soutien optimal, que vous soyez au bureau ou dans votre fauteuil.",
    longDescription: "Notre coussin lombaire ergonomique offre un soutien ciblé pour le bas de votre dos. Il aide à maintenir la courbure naturelle de votre colonne vertébrale, réduisant ainsi la tension musculaire et les douleurs associées à une mauvaise posture.",
    features: [
      "Mousse à mémoire de forme adaptative",
      "Forme ergonomique pour le bas du dos",
      "Sangle élastique ajustable",
      "Housse respirante et lavable",
      "Convient au bureau et à la maison"
    ],
    dimensions: "42 x 32 x 12 cm",
    weight: "580 g",
    material: "Mousse à mémoire de forme, housse en mesh respirant",
    care: [
      "Housse lavable en machine à 30°C",
      "Séchage à l'air libre",
      "Ne pas repasser"
    ],
    image: "/images/coussin-lombaire.jpg",
    images: ["/images/coussin-lombaire.jpg", "/images/coussin-lombaire-2.jpg"],
    category: "Lombaire",
    rating: 4.7,
    reviewCount: 256
  },
  {
    id: "3",
    slug: "coussin-nuit-paisible",
    name: "Coussin Nuit Paisible",
    tagline: "Des nuits enfin reposantes",
    price: 29.90,
    description: "Dormez sur le côté sans douleur aux hanches et aux genoux. Ce coussin entre-jambes aligne parfaitement votre bassin pour des nuits paisibles.",
    longDescription: "Ce coussin ergonomique pour les jambes est conçu pour les dormeurs sur le côté. Il maintient vos hanches, genoux et chevilles parfaitement alignés, réduisant la pression et les douleurs articulaires pendant la nuit.",
    features: [
      "Mousse à mémoire de forme confortable",
      "Design ergonomique pour les jambes",
      "Housse en coton doux et respirant",
      "Forme adaptée pour rester en place",
      "Idéal pour dormeurs sur le côté"
    ],
    dimensions: "26 x 20 x 15 cm",
    weight: "420 g",
    material: "Mousse à mémoire de forme, housse 100% coton",
    care: [
      "Housse lavable en machine à 40°C",
      "Sèche-linge à basse température",
      "Coussin non lavable"
    ],
    image: "/images/coussin-nuit.jpg",
    images: ["/images/coussin-nuit.jpg", "/images/coussin-nuit-2.jpg"],
    category: "Sommeil",
    rating: 4.6,
    reviewCount: 189
  },
  {
    id: "4",
    slug: "coussin-auto-confort",
    name: "Coussin Auto Confort",
    tagline: "Longs trajets sans douleur",
    price: 39.90,
    description: "Fini les douleurs après 1 heure de route. Ce coussin pour voiture vous accompagne dans tous vos trajets pour un confort optimal.",
    longDescription: "Spécialement conçu pour les sièges de voiture, ce coussin ergonomique offre un soutien parfait pour le coccyx et les lombaires pendant vos trajets. Sa base antidérapante le maintient en place même sur les routes sinueuses.",
    features: [
      "Mousse à mémoire de forme ferme",
      "Base antidérapante renforcée",
      "Forme compacte pour véhicules",
      "Housse facile à nettoyer",
      "Convient à tous les sièges auto"
    ],
    dimensions: "42 x 38 x 7 cm",
    weight: "520 g",
    material: "Mousse à mémoire de forme, housse en tissu résistant",
    care: [
      "Housse lavable en machine à 30°C",
      "Nettoyage facile des taches",
      "Séchage rapide"
    ],
    image: "/images/coussin-auto.jpg",
    images: ["/images/coussin-auto.jpg", "/images/coussin-auto-2.jpg"],
    category: "Voiture",
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: "5",
    slug: "oreiller-cervical-ergonomique",
    name: "Oreiller Cervical Ergonomique",
    tagline: "Réveillez-vous sans raideur",
    price: 49.90,
    description: "Marre des torticolis au réveil ? Cet oreiller épouse la forme de votre nuque pour un alignement parfait de vos cervicales toute la nuit.",
    longDescription: "Notre oreiller cervical ergonomique est conçu pour maintenir votre tête et votre cou dans l'alignement naturel de votre colonne vertébrale. Sa forme contourée offre un soutien optimal que vous dormiez sur le dos ou sur le côté.",
    features: [
      "Mousse à mémoire de forme premium",
      "Design contouré pour les cervicales",
      "2 hauteurs pour dos ou côté",
      "Housse hypoallergénique",
      "Respirant et thermorégulant"
    ],
    dimensions: "60 x 35 x 11/9 cm",
    weight: "980 g",
    material: "Mousse à mémoire de forme, housse en bambou",
    care: [
      "Housse lavable en machine à 40°C",
      "Oreiller non lavable",
      "Aérer régulièrement"
    ],
    image: "/images/oreiller-cervical.jpg",
    images: ["/images/oreiller-cervical.jpg", "/images/oreiller-cervical-2.jpg"],
    category: "Cervicales",
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: "6",
    slug: "pack-confort-integral",
    name: "Pack Confort Intégral",
    tagline: "La solution complète pour votre confort",
    price: 89.90,
    originalPrice: 139.70,
    description: "Notre pack best-seller : le coussin coccyx + le coussin lombaire. Tout ce qu'il faut pour être enfin bien assis, à un prix avantageux.",
    longDescription: "Ce pack complet réunit nos deux produits les plus populaires pour une solution de confort globale. Le coussin coccyx soulage la pression sur votre coccyx tandis que le coussin lombaire soutient le bas de votre dos. Ensemble, ils vous offrent une assise parfaite.",
    features: [
      "Coussin Confort Coccyx inclus",
      "Coussin Soutien Lombaire inclus",
      "Économisez 50€ sur l'achat séparé",
      "Solution complète pour le dos",
      "Parfait pour bureau et maison"
    ],
    dimensions: "Pack de 2 coussins",
    weight: "1230 g (total)",
    material: "Mousse à mémoire de forme, housses assorties",
    care: [
      "Housses lavables en machine à 30°C",
      "Séchage à l'air libre",
      "Coussins non lavables"
    ],
    image: "/images/pack-confort.jpg",
    images: ["/images/pack-confort.jpg", "/images/pack-confort-2.jpg"],
    category: "Pack",
    badge: "Économisez 50€",
    rating: 4.9,
    reviewCount: 178
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}
