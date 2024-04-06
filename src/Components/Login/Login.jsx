import React, { useContext, useState} from 'react'
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { Auth } from '../../Context/AuthContext';
const Login = () => {
const {setuserIsLogiedIn}=useContext(Auth)
  
  let navigate=useNavigate()
  const [errorMsg, seterrorMsg] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const validationSchema = Yup.object({
    email:Yup.string().required('Email is required').matches(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i,'Enter valid Email'),
    password:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
   })

  const {isValid, handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      seterrorMsg('')
      try {
        setisLoading(true)
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
        if (data.message === 'success') {
           navigate('/home')
         setuserIsLogiedIn(true)
         localStorage.setItem('Token',data.token)
          
        }
        
      } catch (error) {
        seterrorMsg(error.response.data.message)
      }
      setisLoading(false)
    },
    validationSchema
  })






  return (<>
   <Helmet>
        <meta charSet="utf-8" />
        <title>Login page</title>
      </Helmet>
  <h1 className='head-form pt-5'>Login</h1>

     <form onSubmit={handleSubmit} className='m-auto py-5'>

      <div className='item-form mt-5 mb-3'>
      <input id='email' onChange={handleChange} value={values.email} onBlur={handleBlur} type="email" className='form-control ' placeholder=' Enter your Email ' />
        <label htmlFor='email' className='form-label'>Email :</label>
        {errors.email && touched.email && <div className='error alert alert-danger'>{errors.email}</div>}
      </div>

      <div className='item-form '>
      <input id='password' onChange={handleChange} value={values.password} onBlur={handleBlur}  type="password" className='form-control ' placeholder=' Enter your Password ' />
        <label htmlFor='password' className='form-label'>Password :</label>
        {errors.password && touched.password && <div className='error alert alert-danger'>{errors.password}</div>}
      </div>


{/* error message */}
{errorMsg && <div className=' alert alert-danger'>{errorMsg}</div>}

{/* submit */}
      <button disabled={!isValid || isLoading} className='btn btn-outline-info d-block ms-auto ' type="submit" >{isLoading ?<i className="fa-solid fa-spinner fa-spin"></i>:'Login'}</button>


     </form>
    

  
  </>
  )
}

export default Login