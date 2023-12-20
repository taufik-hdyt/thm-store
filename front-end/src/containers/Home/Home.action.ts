import { useAuth } from "@/hooks/useAuth";
import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";

export const useHomeAction = () => {
  const { token } = useAuth();

  // DATA  BRANDS
  const {
    data: dataBrands,
    isLoading: loadingBrands,
    refetch: refetchBrands,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await API.get("/brands", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });
  return {
    dataBrands,
    loadingBrands,
    refetchBrands
  };
};
