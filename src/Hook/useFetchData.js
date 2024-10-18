import axios from 'axios';
import {  useEffect, useState } from 'react';


export default function useFetchData(api) {

const [data, setdata] = useState([])

const [isLoading, setisLoading] = useState(true)

  async  function allTranding(api) {
       try {
        let {data} = await axios.get(api)
        setdata(data)
        
        
       } catch (error) {
        console.log(error);
        
       }
       setisLoading(false)

       }


       useEffect(() => {
        allTranding(api) 
       }, [api])
       


  
  
  
  
  
    return  {data ,isLoading ,allTranding}
}
