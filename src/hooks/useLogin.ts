import { useState } from "react"
import { api } from "../api/axios"
import { LoginPayload } from "../types"
import { useNavigate } from "react-router-dom"
import useAuthContext from "./useAuthContext"


const useLogin = () => {
    const navigate = useNavigate()
    const { dispatch } = useAuthContext()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
  const login = (data: LoginPayload) => {
    setIsLoading(true)
    api.post("/auth/admin/login", data)
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data))
            localStorage.setItem("accessToken", response.data.accessToken)
            localStorage.setItem("refreshToken", response.data.refreshToken)
            dispatch({type: 'LOGIN', payload: response.data})
            console.log(response.data)
            setIsLoading(false)
            navigate("/dashboard/admin/")
        }).catch((error) => {
            console.log(error)
            setError(error.response.data.description);
            setIsLoading(false)
        })
  }
  return { login, isLoading, setIsLoading, error}
}

export default useLogin