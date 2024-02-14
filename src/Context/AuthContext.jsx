import {createContext,  useState} from 'react'

export const Auth=createContext()

export default function AuthProvider(props) {

    const [userIsLogiedIn , setuserIsLogiedIn] = useState(!!localStorage.getItem('Token'))


    return <Auth.Provider value={{userIsLogiedIn,setuserIsLogiedIn}}>
        {props.children}
    </Auth.Provider>
}