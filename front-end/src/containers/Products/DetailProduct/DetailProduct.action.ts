import { useAuth } from "@/hooks/useAuth";
import { IProducts } from "@/interface/product.interface";
import { ICreateTransaction } from "@/interface/transaction.interfaces";
import { API } from "@/libs/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export const useDetailProductAction = (id: number) => {
  const { token,getProfile } = useAuth();
  const router = useRouter()

  const { data: dataProduct, isLoading } = useQuery<IProducts>({
    queryKey: ["detail-product"],
    queryFn: async () => {
      const response = await API.get(`product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    },

  });


  
  const { mutate: cartMutation, isPending: loadingCart } = useMutation({
    mutationFn: async (body: { quantity: number }) => {
      const response = await API.post(
        `/product/${id}/cart`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: ()=> {
      getProfile()
    },
  });

  const snap = (window as any).snap;
  const {mutate: createTransaction, isPending: loadingTransaction} = useMutation({
    mutationFn: async(body: ICreateTransaction)=> {
      const response = await API.post("/payment" , body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    },
    onSuccess: (res)=> {
      snap.pay(res.token)
    }
  })

  
  return {
    dataProduct,
    isLoading,
    cartMutation,
    loadingCart,

    createTransaction,
    loadingTransaction,
  };
};
