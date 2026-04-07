export function getShopifyProductId(globalId: string) {
  const segments = globalId.split('/')
  return segments.pop() ?? globalId
}

export function parseShopifyDomain(domain: string) {
  const normalized = domain
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
  if (!normalized.endsWith('.myshopify.com')) {
    return `${normalized}.myshopify.com`
  }
  return normalized
}

export function formatPrice(money: { amount: string; currencyCode: string }) {
  const amount = parseFloat(money.amount)
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: money.currencyCode,
  }).format(amount)
}
