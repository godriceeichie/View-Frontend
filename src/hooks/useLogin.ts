import { useState } from "react"
import { api } from "../api/axios"
import { LoginPayload } from "../types"
import useAuthContext from "./useAuthContext"
import { useNavigate } from "react-router-dom"


const useLogin = () => {
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
  const login = (data: LoginPayload) => {
    setIsLoading(true)
    api.post("/auth/admin/login", data)
        .then((response) => {
            dispatch({type: 'LOGIN', payload: response.data})
            localStorage.setItem("accessToken", response.data.accessToken)
            localStorage.setItem("refreshToken", response.data.refreshToken)
            console.log(response.data)
            setIsLoading(false)
            navigate("/dashboard/admin")
        }).catch((error) => {
            console.log(error)
            setError(error.response.data.description);
            setIsLoading(false)
        })
  }
  return { login, isLoading, setIsLoading, error}
}

export default useLogin