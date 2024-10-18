import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import useFetchData from '../../Hook/useFetchData';


const People = () => {
  const path='https://image.tmdb.org/t/p/w500'


   let {data ,isLoading}=useFetchData(`https://api.themoviedb.org/3/trending/person/day?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)

 

    
  

  return (<>
   <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |people page</title>
   </Helmet>
   {isLoading?
   
   <div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>
   
   :
 

   <div className='row g-4 m-0 py-2 py-md-5'>
      {data?.results?.filter((person)=>person.profile_path).map((person,index)=>
        <div key={index} className='col-sm-6 col-md-4 col-lg-3 col-xl-2  '>
          <Link to={`/details/${person.media_type}/${person.id}`}>
         <div className='movie position-relative overflow-hidden'>
          <img src={path+person.profile_path} alt={person.title?person.title :person.name} className=' img-fluid'/>
          <div className='text position-absolute  start-0 bg-black bg-opacity-50 text-white text-center w-100 h-100 d-flex justify-content-center align-items-center m-0   '><p>{person.title} {person.name}</p></div> 
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