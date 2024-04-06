import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import useAllData from '../../Hooks/useAllData'


const People = () => {

  const {persons,IsLoading}=useAllData()


  const path='https://image.tmdb.org/t/p/w500'


    
  

  return (<>
   <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |people page</title>
   </Helmet>
   {IsLoading?
   
   <div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>
   
   :
 

   <div className='row g-4 m-0 py-3'>
      {persons.map((person,index)=>
        <div key={index} className='col-sm-3 col-md-2 '>
          <Link to={`/details/${person.media_type}/${person.id}`}>
         <div className='movie position-relative overflow-hidden'>
          <img src={path+person?.profile_path} alt="" className=' img-fluid'/>
          <h3 className=' position-absolute  start-0 bg-black bg-opacity-50 text-white text-center w-100 h-100 d-flex justify-content-center align-items-center m-0   '>{person.title} {person.name}</h3> 
          {person.vote_average? <div className='position-absolute top-0 end-0 bg-info p-2'>{person.vote_average.toFixed(1)}</div>:''}
         </div>
         </Link>
    
    </div>



)}
</div>
   }
  
  
  </>
    
  )
}

export default People