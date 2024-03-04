import React from 'react'
import useAuthContext from '../../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'

const AuthProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const { user } = useAuthContext()
    
    
  if(!user){
    return <Navigate to={"/auth/login"}/>
  }
  return children
}

export default AuthProtectedRoute