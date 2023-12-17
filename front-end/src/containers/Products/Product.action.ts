import { useAuth } from "@/hooks/useAuth"
import { API } from "@/libs/API"
import { useQuery } from "@tanstack/react-query"
import { useRef } from "react"


export const useProductAction = ()=> {
    const inputImageRef = useRef<HTMLInputElement>(null)
    const handleChooseImage = ()=> {
        if(inputImageRef.current){
            inputImageRef.current.click()
        }
    }
    return {
        inputImageRef,
        handleChooseImage,
        
    }
}