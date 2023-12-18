import { useAuth } from "@/hooks/useAuth"
import { IProducts } from "@/interface/product.interface"
import { API } from "@/libs/API"
import { useQuery } from "@tanstack/react-query"


export const useDetailProductAction = (id:number)=> {
    const {token}= useAuth()

    const {data: dataProduct,isLoading} = useQuery<IProducts>({
        queryKey: ['detail-product'],
        queryFn: async()=>{
            const response = await API.get(`product/${id}` ,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })    
            return response.data.data
        }

    })

    return {
        dataProduct,
        isLoading
    }
}