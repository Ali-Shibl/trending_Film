import React, {  useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
const Details = () => {
  
  let path = 'https://image.tmdb.org/t/p/w500'

  const [isloading, setisloading] = useState(false)

  const [datafilm, setdatafilm] = useState({})
const {media_type,id}=useParams()

async function getdatafilm( type,id) {
  setisloading(true)
  let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=4d1da0dc46ba1f7010a3b83634c07d77&language=en-US`)
  setdatafilm(data)
  setisloading(false)
}
useEffect(() => {
 
  getdatafilm(media_type,id)

}, [media_type,id])


  return (
    
    <>
    <Helmet>
       <meta charSet="utf-8" />
       <title>{datafilm.name?datafilm.name:datafilm.title}</title>
       
    </Helmet>

    {isloading?<>
    
       
   <div className='loading d-flex justify-content-center align-items-center py-5'>
<i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>

</div>
   
    
    
    </>
    : <div className='row g-4 py-5 '>
            <div className='col-md-5 col-lg-3'>
              <div className='movie position-relative '>
                {datafilm.vote_average ? <div className='position-absolute top-0 end-0 bg-info p-2'>{datafilm.vote_average.toFixed(1)}</div> : ''}
                {datafilm.poster_path ? <img src={path + datafilm.poster_path} alt="" className=' img-thumbnail' /> : <img src={path + datafilm.profile_path} alt="" className='img-thumbnail' />}
              </div>
    
            </div>
    
    
            <div className='col-md-7 col-lg-9 '>
              {media_type === 'person' ? <div><p>name: {datafilm.name}</p>
                <p>{datafilm.known_for_department}</p>
                <p>popularity: {datafilm.popularity}</p>
                <p>birthday: {datafilm.birthday}</p>
               {datafilm.deathday?<p>deathday: {datafilm.deathday}</p>:''} 
                <p>place_of_birth: {datafilm.place_of_birth}</p>
              </div>
              
              : <div><h1 className='h3 fw-bolder my-2 text-center text-md-start '>{datafilm.title} {datafilm.name}</h1>
                <p className='py-2 text-opacity-75 text-light'>{datafilm.tagline}</p>
                <p >vote : {datafilm.vote_average}<i className='fas fa-star rating-color text-warning ms-1'></i></p>
                <p className='py-1 '>vote-count : {datafilm.vote_count}</p>
                <p>popularity : {datafilm.popularity}</p>
                <p className='py-1 '>release_date : {datafilm.release_date}</p>
                <p className='py-2 text-opacity-75 text-light'>{datafilm.overview}</p>
                <Link to={datafilm.homepage} target='_blank' className=' d-block d-lg-inline-block btn btn-outline-info btn-lg'>view</Link>
                
                
                
                </div>}
    
    
            </div>
          </div>
    
    }
         
    
    
        </>
  )
}

export default Details