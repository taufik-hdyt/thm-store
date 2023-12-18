import { useAuth } from "@/hooks/useAuth"
import { API } from "@/libs/API"
import { useQuery } from "@tanstack/react-query"
import { useRef } from "react"


export const useProductAction = ()=> {
    const {token} = useAuth()

    const {data: dataProducts, isLoading: loadingProducts} = useQuery({
        queryKey: ["products"],
        queryFn: async()=> {
            const response = await API.get("/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })

            return response.data
        }
    })
    return {
        dataProducts,
        loadingProducts
        
    }
}