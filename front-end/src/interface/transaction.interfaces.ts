export interface ICreateTransaction {
  status_payment: "SUCCESS" | "PENDING" | "CANCELED";
  status_pengiriman: "ON PROCCESS" | "ON DELIVERED" | "DELIVERED";
  quantity: number;
  subtotal: number;
  customer: number
  product: number 
  product_name: string
  price: number
  product_id: number
}


