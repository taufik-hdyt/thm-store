import { useAuth } from "@/hooks/useAuth";
import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";


export const useHomeAction = ()=> {
    const {token} = useAuth()
    
    const {data: dataBrands,isLoading,refetch} = useQuery({
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


    return {
        dataBrands,
        isLoading,
        refetch
    }
}