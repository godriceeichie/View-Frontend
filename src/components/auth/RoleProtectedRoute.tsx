import useAuthContext from "../../hooks/useAuthContext"

const RoleProtectedRoute = ({role, children}: {role: string, children: React.ReactNode}) => {
    const {user} = useAuthContext()
    if(role == user?.role.toString()){
        return children
    }
    return "Unauthorized"
}

export default RoleProtectedRoute