import { IProducts } from "./product.interface";

export interface ICreateCustomer {
  fullname: string;
  email: string;
  password: string;
}

export interface Ilogin {
  email: string;
  password: string;
}


export interface ICustomer {
    customer_id: number
    fullname: string;
    email: string;
    password: string;
    profile_picture: string;
    address: string;
    phone: number
    cart: ICart[]
    wishlist: []
    createdAt: string
  }
  
  export interface ICart{
    cart_id: number
    product: IProducts
    quantity: number
  }

  export interface IWishlist{
    wishlist_id: number
    product: IProducts
  }

  export interface IUpdateCustomer {
    fullname: string;
    email: string;
    // profile_picture: string;
    address: string;
    phone: string | number
    profile_picture?: string
    password?:string
  }