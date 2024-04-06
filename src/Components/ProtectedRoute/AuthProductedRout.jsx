import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const AuthProductedRout = ({children }) => {
  const {userIsLogiedIn}=useContext(Auth)


  return ( <>  {userIsLogiedIn ? <Navigate to='/home'/>  : children }

    </> 
  )
}

export default AuthProductedRout