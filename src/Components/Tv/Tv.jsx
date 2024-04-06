import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import useAllData from '../../Hooks/useAllData'



const Tv = () => {
  const {tvs,IsLoading}=useAllData()

  const path='https://image.tmdb.org/t/p/w500'
   


  return (<>
    <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |Tv page</title>
   </Helmet>

   {IsLoading?
   
   <div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>
   
   :
 

   <div className='row g-4 m-0 py-3'>
      {tvs.map((tv,index)=>
        <div key={index} className='col-sm-3 col-md-2 '>
          <Link to={`/details/${tv.media_type}/${tv.id}`}>
         <div className='movie position-relative overflow-hidden'>
        <img src={path+tv.poster_path} alt="" className=' img-fluid'/>
          <h3 className=' position-absolute  start-0 bg-black bg-opacity-50 text-white text-center w-100 h-100 d-flex justify-content-center align-items-center m-0   '>{tv.title} {tv.name}</h3> 
          {tv.vote_average? <div className='position-absolute top-0 end-0 bg-info p-2'>{tv.vote_average.toFixed(1)}</div>:''}
         </div></Link>
    
    </div>



)}
</div>
   }

  </>
  )
}

export default Tv