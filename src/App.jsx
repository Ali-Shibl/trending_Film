import React from 'react'
import {Navigate, RouterProvider, createHashRouter} from 'react-router-dom'
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Movies from "./Pages/Movies/Movies"
import People from "./Pages/People/People"
import Details from "./Components/Details/Details"
import Tv from "./Pages/Tv/Tv"
import { Offline} from 'react-detect-offline'
import Notfound from './Components/Notfound/Notfound'
import MovieCredits from './Components/MovieCredits/MovieCredits'

const App = () => {



let routers=createHashRouter([
  {path:'',element:<Layout/> , children:[
    {index:true, element:<Navigate to={'home'}/>},
    {path:'home', element:<Home/>},
    {path:'people',element:<People/>},
    {path:'tv',element:<Tv/> },
    {path:'movies',element:<Movies/> },
    {path:'details/:media_type/:id',element:<Details/> },
    {path:'moviecredits/:id',element:<MovieCredits/> },
  
    
    {path:'*',element:<Notfound/>},
  ]}
])
  return <>
  <Offline><div className='offline'>you are offline</div></Offline>

  
      <RouterProvider router={routers}></RouterProvider>


  </>
}

export default App
