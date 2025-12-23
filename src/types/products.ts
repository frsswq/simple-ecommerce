// 24 categories
// 194 products

export interface Products {
  products: Array<Product>
  total?: number
  skip?: number
  limit?: number
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  stock: number
  tags: Array<string>
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: WarrantyInformation
  shippingInformation: ShippingInformation
  availabilityStatus: AvailabilityStatus
  reviews: Array<Review>
  returnPolicy: ReturnPolicy
  minimumOrderQuantity: number
  meta: Meta
  images: Array<string>
  thumbnail: string
}

export type AvailabilityStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Meta {
  createdAt: Date
  updatedAt: Date
  barcode: string
  qrCode: string
}

export type ReturnPolicy =
  | 'No return policy'
  | '7 days return policy'
  | '90 days return policy'
  | '60 days return policy'
  | '30 days return policy'

export interface Review {
  rating: number
  comment: Comment
  date: Date
  reviewerName: string
  reviewerEmail: string
}

export type Comment =
  | 'Would not recommend!'
  | 'Very satisfied!'
  | 'Highly impressed!'
  | 'Great product!'
  | 'Awesome product!'
  | 'Poor quality!'
  | 'Would buy again!'
  | 'Very dissatisfied!'
  | 'Very unhappy with my purchase!'
  | 'Very disappointed!'
  | 'Fast shipping!'
  | 'Not as described!'
  | 'Very happy with my purchase!'
  | 'Great value for money!'
  | 'Highly recommended!'
  | 'Excellent quality!'
  | 'Waste of money!'
  | 'Very pleased!'
  | 'Not worth the price!'
  | 'Disappointing product!'
  | 'Would not buy again!'

export type ShippingInformation =
  | 'Ships in 3-5 business days'
  | 'Ships in 2 weeks'
  | 'Ships in 1-2 business days'
  | 'Ships in 1 week'
  | 'Ships overnight'
  | 'Ships in 1 month'

export type WarrantyInformation =
  | '1 week warranty'
  | '1 year warranty'
  | '3 months warranty'
  | '3 year warranty'
  | '1 month warranty'
  | '6 months warranty'
  | 'Lifetime warranty'
  | '5 year warranty'
  | '2 year warranty'
  | 'No warranty'
