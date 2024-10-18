import React  from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination ,Autoplay,Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import useFetchData from '../../Hook/useFetchData';

const Home = () => {

  const path='https://image.tmdb.org/t/p/w500'




 let alltrending=useFetchData(`https://api.themoviedb.org/3/trending/all/day?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)
 let peopleTranding=useFetchData(`https://api.themoviedb.org/3/trending/person/week?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)
 let popularTv=useFetchData(`https://api.themoviedb.org/3/tv/popular?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)

//{data ,isLoading} =peopleTranding || alltrending || popularTv



  return (<>
  <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |Home page</title>
</Helmet>
{alltrending.isLoading ||peopleTranding.isLoading ||popularTv.isLoading?
 <div className='loading d-flex justify-content-center align-items-center py-5'>
 <i className="fa-solid fa-clapperboard fa-beat-fade fa-5x"></i>
 
 </div>
:
<> 


 <div className='row py-5 g-4 align-items-center '>

<div className='col-md-4'>

<div className='bordr w-25 mb-4'></div>
 <h1 className='h2'> Tranding movie To Watch Now</h1>
 <p className=' lead text-white-50'>most watched Tranding by days</p>
 <div className='bordr w-100 mt-4'></div>

</div>


  <div className="col-md-8 ">
  <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}

        breakpoints={{
          640: {
            slidesPerView: 4,
           
          },
          1024: {
            slidesPerView: 5,
           
          }
        }}
     
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {alltrending.data?.results?.map((trand,index)=>  <SwiperSlide key={index}>
    <Link to={`/details/${trand.media_type}/${trand.id}`}>
    <img src={path +trand.poster_path} alt={trand.title} className='w-100' />
       </Link> 
       </SwiperSlide>
    
    )}
       
      </Swiper>
  </div>


</div>


<div className="row align-items-center g-3 py-4 py-md-5">
<div className='col-md-4 mb-2 mb-md-0'>

<div className='bordr w-25 mb-4'></div>
 <h1 className='h2'> popular Tv views</h1>
 <p className=' lead text-white-50'>most watched popular Tv</p>

 <div className='bordr w-100 mt-4'></div>

</div>
{popularTv.data?.results?.filter((tv)=>tv.poster_path).map((tv,index)=><div key={index} className='col-sm-6 col-md-4 col-lg-2  ' >
        
          <Link to={`/details/tv/${tv.id}`}>
         
          <img src={path+tv.poster_path} alt={tv.name} className='img-thumbnail'/>
         </Link>
    
</div>


)}


</div>


<div className="py-5">
<h1 className='position-relative m-auto mb-5 Actor py-2 px-3'>Actor's Movies</h1>

<Swiper    
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          769: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        
        navigation={true}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        {peopleTranding.data?.results?.filter((person)=>person.profile_path).map((person,index)=><SwiperSlide key={index} >
          
        
          <Link to={`/moviecredits/${person.id}`}>
         
          <img src={path+person.profile_path} alt={person.name} className='w-100'/>
         </Link>
    
   
</SwiperSlide>


)}
         
        
       
        
      </Swiper>

</div> 




</>
} 
</> 
   
  )
}

export default Home



