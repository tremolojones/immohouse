export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  type: 'house' | 'apartment' | 'villa' | 'land'
  bedrooms: number
  bathrooms: number
  surface: number
  images: string[]
  features: string[]
}