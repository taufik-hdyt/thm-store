import { IProducts } from "@/interface/product.interface";
import { createSlice } from "@reduxjs/toolkit";


export interface ICartItem extends IProducts{
    qty: number
}

interface IState {
    totalCart: number
    cartItem: ICartItem[]
}

const initialState:IState = {
    totalCart: 0,
    cartItem: []
}

export const cartSlice = createSlice({
    name: "carts",
    initialState: initialState,

    reducers: {
        incrementQty: (state,action)=> {
            const add = state.cartItem.map((e)=> {
                if(e.product_id === action.payload.id){
                    return {
                        ...e,
                        qty: e.qty + 1
                    }
                }

                return e
            })
            state.cartItem = add
        },

        decrementQty: (state,action)=> {
            const kurang = state.cartItem.map((e)=> {
               if(e.product_id === action.payload.id){
                return {
                    ...e,
                    qty: e.qty -1
                }
               }
               return e
            })
            state.cartItem = kurang
        }
    }
})