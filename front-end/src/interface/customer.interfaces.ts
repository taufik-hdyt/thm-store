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
    isAdmin: boolean
    createdAt: string
  }
  