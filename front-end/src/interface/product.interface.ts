import { IBrand } from "./brand.interfaces"

export interface IProducts {
  product_id: number
  product_name: string
  description: string
  price: number
  stock: number
  image: string
  createdAt: Date
  brand: IBrand
}
