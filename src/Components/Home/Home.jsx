import React from 'react'
import {Helmet} from "react-helmet";
import AllMedia from '../AllMedia/AllMedia';
import useAllData from '../../Hooks/useAllData'

const Home = () => {

const {movies,persons,tvs,IsLoading}=useAllData()
 

  return (<>
  <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |Home page</title>
</Helmet>


{ IsLoading ?
<div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>  :
<>
  <div className='row py-4 g-4 m-0 align-items-center'>
    
    <div className='col-sm-6 col-md-4 text-home'>

     <div className='bordr w-25 mb-3'></div>
      <h1 className='h2'>Tranding Movie    To<br/> Watch Now</h1>
      <p className=' lead text-white-50'>most watched movies by days</p>
      <div className='bordr w-100 mt-3'></div>

    </div>
     {movies.splice(0,10).map((movie , index)=> <AllMedia  movie={movie} key={index}/>)}

 </div>



<div className='row pt-3 pb-4 g-4 m-0 align-items-center'>
    
    <div className='col-sm-6 col-md-4 text-home'>
  
  <div className='bordr w-25 mb-3'></div>
  <h1 className='h2'>Tranding Tv  To  <br/>Watch Now</h1>
  <p className=' lead text-white-50'>most watched TV by days</p>
  <div className='bordr w-100 mt-3'></div>
  </div>
  
  {tvs.splice(0,10).map((tv , index)=> <AllMedia  movie={tv} key={index}/>)}
  
  
  
    </div>
 
<div className='row py-4  g-4 m-0 align-items-center'>
    
    <div className='col-sm-6 col-md-4 text-home'>
  <div className='bordr w-25 mb-3'></div>
  <h1 className='h2'>Tranding People To <br/>  Watch Now</h1>
  <p className=' lead text-white-50'>most watched People by days</p>
  <div className='bordr w-100 mt-3'></div>
  
  </div>
  {persons.splice(0,10).map((person , index)=> <AllMedia  movie={person} key={index}/>)}
  
    </div>


  </>


  
  
  
  }
  </>
   
  )
}

export default Home