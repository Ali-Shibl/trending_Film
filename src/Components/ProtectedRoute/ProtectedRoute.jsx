import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

const {userIsLogiedIn}=useContext(Auth)
  return (
    <>
    {userIsLogiedIn? children : <Navigate to='/login'/> }
    </>
  )
}

export default ProtectedRoute