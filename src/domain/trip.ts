export type Trip = {
  id: string
  title: string
  images: string[]
  days: number
  destination: string
  highlights: string[]
  includes: string[]
  tags: Tag[]
  priceDetails: PriceDetails
}

export function getTripTitle(title: string, days: number): string {
  return `${title} from ${days} days`
}
