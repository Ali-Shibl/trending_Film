import React from 'react'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Movies from "./Components/Movies/Movies"
import People from "./Components/People/People"
import Details from "./Components/Details/Details"
import Tv from "./Components/Tv/Tv"
import { Offline} from 'react-detect-offline'
import Notfound from './Components/Notfound/Notfound'
import AuthProvider from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import AuthProductedRout from './Components/ProtectedRoute/AuthProductedRout'

const App = () => {

let routers=createHashRouter([
  {path:'',element:<Layout/> , children:[
    {index:true,element:<AuthProductedRout><Register/></AuthProductedRout> },
    {path:"login",element:<AuthProductedRout><Login/></AuthProductedRout> },
    
    {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:'people',element:<ProtectedRoute><People/></ProtectedRoute>},
    {path:'tv',element:<ProtectedRoute><Tv/></ProtectedRoute> },
    {path:'movies',element:<ProtectedRoute><Movies/></ProtectedRoute> },
    {path:'details/:media_type/:id',element:<ProtectedRoute><Details/></ProtectedRoute> },
    
    {path:'*',element:<Notfound/>},
  ]}
])
  return <>
  <Offline><div className='offline'>you are offline</div></Offline>

  <AuthProvider>
      <RouterProvider router={routers}></RouterProvider>
  </AuthProvider>
  </>
}

export default App
