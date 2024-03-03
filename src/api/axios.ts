import axios from "axios";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

export const api = axios.create({
    baseURL: "http://localhost:8089/api/v1"
})

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token")
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        if(error.response.status == 403 && !originalRequest._retry){
            originalRequest._retry = true

            try{
                const refreshToken = localStorage.getItem("refreshToken")
                const response = await axios.post("/auth/refreshToken", {refreshToken})
                const { accessToken } = response.data

                localStorage.setItem("accessToken", accessToken)
                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                return axios(originalRequest)
            }catch(error){
                console.log(error)
                
            }
        }
        return Promise.reject(error)
    }
)