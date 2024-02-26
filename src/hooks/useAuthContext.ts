import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

const useAuthContext = () => {
    const context = useContext(AuthContext)
  
    if(!context){
        throw Error("Auth context must be used inside an AuthContextProvider")
    }
    return context
}

export default useAuthContext