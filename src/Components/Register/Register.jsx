import React, { useState} from 'react'
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  let navigate=useNavigate()
  const [errorMsg, seterrorMsg] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const validationSchema = Yup.object({
    name:Yup.string().required('Name is required').min(3,'min length must be more than 3 chracters').max(20,'max length must be less than 20 chracters'),
    email:Yup.string().required('Email is required').matches(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i,'Enter valid Email'),
    password:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
    rePassword:Yup.string().required('Repassword is required').oneOf([Yup.ref('password')],'password and repassword doesnt match'),
    phone:Yup.string().required('Phone is required').matches(/^1[0125][0-9]{8}$/,'enter valid egyption phone number'),
  })
  


  const {isValid, handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    onSubmit: async () => {
      seterrorMsg('')
      try {
        setisLoading(true)
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
        if (data.message === 'success') {
          navigate('/login')
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
      <title>Register page</title>
    </Helmet>

    <h1 className='head-form pt-5'>Register</h1>

    <form onSubmit={handleSubmit} className=' m-auto py-5'>

      <div className='item-form mb-3 mt-4'>
        <input id='name' onChange={handleChange} value={values.name} onBlur={handleBlur} type="text" className='form-control' placeholder='Enter your name' />
        <label htmlFor='name' className='form-label'>Name :</label>
        {errors.name && touched.name && <div className='error alert alert-danger'>{errors.name}</div>}
      </div>

      <div className='item-form my-3'>
        <input id='email' onChange={handleChange} value={values.email} onBlur={handleBlur} type="email" className='form-control ' placeholder=' Enter your Email ' />
        <label htmlFor='email' className='form-label'>Email :</label>
        {errors.email && touched.email && <div className='error alert alert-danger'>{errors.email}</div>}
      </div>

      <div className='item-form my-3'>
        <input id='phone' onChange={handleChange} value={values.phone} onBlur={handleBlur} type="number" className='form-control ' placeholder=' Enter your Phone ' />
        <label htmlFor='phone' className='form-label'>Phone :</label>
        {errors.phone && touched.phone && <div className='error alert alert-danger'>{errors.phone}</div>}
      </div>

      <div className='item-form my-3'>
        <input id='password' onChange={handleChange} value={values.password} onBlur={handleBlur}  type="password" className='form-control ' placeholder=' Enter your Password ' />
        <label htmlFor='password' className='form-label'>Password :</label>
        {errors.password && touched.password && <div className='error alert alert-danger'>{errors.password}</div>}
      </div>

      <div className='item-form my-309'>
        <input id='rePassword' onChange={handleChange} value={values.rePassword} onBlur={handleBlur} type="password" className='form-control ' placeholder=' Enter your Repassword ' />
        <label htmlFor='rePassword' className='form-label'>Repassword :</label>
        {errors.rePassword && touched.rePassword && <div className='error alert alert-danger'>{errors.rePassword}</div>}
      </div>

{/* error message */}
{errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}

{/* submit */}
      <button disabled={!isValid || isLoading} className=' btn btn-light d-block ms-auto ' type="submit" >{isLoading ?<i className="fa-solid fa-spinner fa-spin"></i>:'Register'}</button>


    </form>
  </>

  )
}

export default Register