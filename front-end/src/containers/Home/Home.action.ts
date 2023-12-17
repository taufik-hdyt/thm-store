import { useAuth } from "@/hooks/useAuth";
import { ICreateBrand } from "@/interface/brand.interfaces";
import { API } from "@/libs/API";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useHomeAction = ()=> {
    const {token} = useAuth()
    const toast = useToast()
    const {isOpen,onClose,onOpen} = useDisclosure()

    // DATA  BRANDS
    const {data: dataBrands,isLoading: loadingBrands,refetch: refetchBrands} = useQuery({
        queryKey: ['brands'],
        queryFn: async ()=> {
            const response = await API.get("/brands", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response
        }
    })

    // DATA PRODUCTS
    const {data: dataProducts,isLoading: loadingProducts,refetch: refetchProducts} = useQuery({
        queryKey: ['brands'],
        queryFn: async ()=> {
            const response = await API.get("/products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        }
    })

     const {mutate: addBrand, isPending: loadingCreateBrand,isSuccess} = useMutation({
        mutationFn: async (body: ICreateBrand)=>  {
            const response = await API.post("/brand", body , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data
        },
        onSuccess: (res)=> {
            toast({
                title: res.message,
                position: "top",
                status: "success",
              });
              refetchBrands()
        },
        onError: (err)=> {
            console.log(err);
        },
    })


    return {
        dataBrands,
        dataProducts,
        loadingBrands,
        loadingProducts,
        refetchBrands,
        refetchProducts,
        addBrand,
        loadingCreateBrand,
        isOpen,
        onClose,
        onOpen,
        isSuccess
    }
}