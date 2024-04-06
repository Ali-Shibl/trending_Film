import React from 'react'
import {Link} from 'react-router-dom'


const AllMedia = ({movie}) => {
  const path='https://image.tmdb.org/t/p/w500'



  return (
    <div className='col-sm-3 col-md-2 '>
      <Link to={`/details/${movie.media_type}/${movie.id}`}>
      <div className='movie position-relative overflow-hidden'>
          {movie.poster_path?<img src={path+movie.poster_path} alt="" className=' img-fluid'/>:<img src={path+movie.profile_path} alt="" className=' img-fluid'/>}
          <h3 className=' position-absolute  start-0 bg-black bg-opacity-50 text-white text-center w-100 h-100 d-flex justify-content-center align-items-center m-0   '>{movie.title} {movie.name}</h3> 
          {movie.vote_average? <div className='position-absolute top-0 end-0 bg-info p-2'>{movie.vote_average.toFixed(1)}</div>:''}
      </div></Link>
    
    
    
    </div>
  )
}

export default AllMedia;