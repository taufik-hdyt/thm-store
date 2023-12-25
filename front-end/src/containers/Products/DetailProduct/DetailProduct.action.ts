import { useAuth } from "@/hooks/useAuth";
import { IProducts } from "@/interface/product.interface";
import { API } from "@/libs/API";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useDetailProductAction = (id: number) => {
  const { token } = useAuth();

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
        `/product/${dataProduct?.product_id}/cart`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });


  return {
    dataProduct,
    isLoading,
    cartMutation,
    loadingCart
  };
};
