import { useState } from "react"
import { AdminSignUpInputs, Company } from "../types"
import { api } from "../api/axios"
import useAuthContext from "./useAuthContext"

const useSignUp = () => {
    const { dispatch } = useAuthContext()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signup = (data: AdminSignUpInputs, nextStep: () => void, company: Company) => {
        // const [error, setError] = useState<string>()
        

        setIsLoading(true)
        api.post(`/auth/company/${company?.companyId}/admin/signup`, {
            ...data, role: "Admin"
        })
            .then((response) => {
                console.log(response)
                dispatch({type: 'LOGIN', payload: response.data})
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("refreshToken", response.data.refreshToken)
                setIsLoading(false)
                nextStep()
            }).catch((error) => {
                console.log(error)
            })
    }
    return { signup, isLoading}
}

export default useSignUp