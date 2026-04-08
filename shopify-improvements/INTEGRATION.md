# Guide d'intégration - Douceur d'Assise Theme Improvements

## Fichiers à copier

### 1. CSS (OBLIGATOIRE)
Copie `assets/da-styles.css` dans ton dossier `assets/` Shopify.

### 2. Layout (OBLIGATOIRE)
Remplace `layout/theme.liquid` par la version améliorée. Les changements importants :
- Ligne 171: `{{ 'da-styles.css' | asset_url | stylesheet_tag }}` - charge le CSS personnalisé
- Ligne 204: `{%- render 'da-cart-drawer' -%}` - inclut le cart drawer

### 3. Snippets
Copie dans `snippets/` :
- `da-card-product.liquid` - carte produit améliorée
- `da-cart-drawer.liquid` - panier drawer moderne

### 4. Sections
Copie dans `sections/` :
- `da-header.liquid` - header amélioré
- `da-temoignages.liquid` - témoignages améliorés  
- `da-faq-rapide.liquid` - FAQ améliorée

## Configuration requise

### Pour activer le Cart Drawer
Dans l'admin Shopify : Theme Settings > Cart > Cart type = "Drawer"

### Pour utiliser les nouvelles cartes produit
Dans les sections qui utilisent des cartes produit, remplace :
```liquid
{% render 'card-product', product: product %}
```
par :
```liquid
{% render 'da-card-product', product: product %}
```

## Ordre d'intégration recommandé

1. **D'abord** : Copie `da-styles.css` dans `assets/`
2. **Ensuite** : Copie `da-cart-drawer.liquid` dans `snippets/`
3. **Puis** : Met à jour `theme.liquid` pour inclure le CSS et le cart drawer
4. **Enfin** : Copie les sections et snippets restants

## Vérification

Après intégration, vérifie que :
- [ ] Le CSS se charge (inspecte la page, cherche `da-styles.css`)
- [ ] Le cart drawer s'ouvre quand tu cliques sur "Panier"
- [ ] Les animations fonctionnent (hover sur les boutons, cards)
- [ ] Les badges de confiance apparaissent sur les cartes produit

## Problèmes courants

### Le CSS ne se charge pas
Vérifie que la ligne suivante est dans `theme.liquid` (après `base.css`) :
```liquid
{{ 'da-styles.css' | asset_url | stylesheet_tag }}
```

### Le cart drawer ne s'affiche pas
1. Vérifie que `da-cart-drawer.liquid` est dans `snippets/`
2. Vérifie que `theme.liquid` contient :
```liquid
{%- if settings.cart_type == 'drawer' -%}
  {%- render 'da-cart-drawer' -%}
{%- endif -%}
```
3. Vérifie que le type de panier est "Drawer" dans les settings du theme
