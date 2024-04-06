import axios from 'axios'
import { useEffect,  useState } from 'react'

const useAllData = () => {
    
    const [IsLoading, setIsLoading] = useState(false)
    const [movies, setmovies] = useState([])
    const [persons, setpersons] = useState([])
    const [tvs, settvs] = useState([])
    
    async function getAllTranding(callback,type) {

      setIsLoading(true)
      const {data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)
      
      callback(data.results)
      setIsLoading(false)

  }
 
  useEffect( () => {
    
  getAllTranding(settvs,'tv')
  getAllTranding(setmovies,'movie')
  getAllTranding(setpersons,'person')
 
},[])




  return {movies,persons,tvs,IsLoading}
}

export default useAllData