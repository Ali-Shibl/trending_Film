import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Helmet}  from 'react-helmet'

export default function MovieCredits() {
    let path = 'https://image.tmdb.org/t/p/w500'

    const [isloading, setisloading] = useState(false)
    const [datafilm, setdatafilm] = useState([])
    const {id}=useParams()
    
    async function getdatafilm( id) {
        setisloading(true)

      let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)
      setdatafilm(data?.cast)
      setisloading(false)

     
    }
    useEffect(() => {
     
      getdatafilm(id)
      
    
    }, [id])


  return (
   <>

<Helmet>
   <meta charSet="utf-8" />
   <title>noxe |MovieCredits page</title>
   </Helmet>

     {isloading?
   
   <div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>
   
   :
  <div className='row g-4 m-0 py-2 py-md-5'>
      {datafilm.filter((movie)=>movie.poster_path ).map((movie,index)=><div key={index} className='col-sm-6 col-md-4 col-lg-3 col-xl-2 '>
          
       <Link to={`/details/movie/${movie.id}`}>
      <div className='movie position-relative overflow-hidden'>
     <img src={path+movie.poster_path} alt={movie.title} className=' img-fluid'/>
       <div className='text position-absolute  start-0 bg-black bg-opacity-50 text-white text-center w-100 h-100 d-flex justify-content-center align-items-center m-0   '><p>{movie.title}</p> </div> 
        <div className='position-absolute top-0 end-0 bg-info p-2'>{movie.vote_average.toFixed(1)}</div>
      </div></Link>
 
 </div>



)}
</div>}
   
   </>
  )
}
