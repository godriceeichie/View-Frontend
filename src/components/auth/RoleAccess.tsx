import useAuthContext from "../../hooks/useAuthContext"

const RoleAccess = ({role, children}: {role: string, children: React.ReactNode}) => {
    const {user} = useAuthContext()
    return(
        // <div>
        //     <h1>{user && user.role }</h1>
        // </div>
        <>
            <h1>{user && user.workEmail }</h1>
            {children}
        </>
    )
}

export default RoleAccess