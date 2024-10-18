import React, {  useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  
  
  const [showNav, setshowNav] = useState(false)


  function show() {
    setshowNav(true)
    document.querySelector('body').style.overflow='hidden'
  }

  function hide() {
    setshowNav(false)
    document.querySelector('body').style.overflow='auto'

  }


  return (
    <>
      <div className='mt-6'></div>
      <nav className='d-flex align-items-center justify-content-between p-3 '>

        <Link className='head-mobile  text-white' to='home'><h1 className='m-0'>Noxe</h1> </Link>
        <i className="open fa-solid fa-bars-staggered cursor-pointer" onClick={show}></i>


        <div className={showNav ? 'show' : ''}>

          <div className='close bg-danger  rounded-circle cursor-pointer' onClick={hide}>
            <i className=" fa-solid fa-xmark text-white" ></i>
          </div>
          

          <div className=' d-flex align-items-center gap-2  gap-md-4 '>
            <Link className='head-lap ' to='home'><h1 className='m-0'>Noxe</h1> </Link>
          <ul className="list-unstyled d-flex align-items-center gap-3">
              <li className=' nav-item'><NavLink className='nav-link' to="home" onClick={hide}>Home</NavLink></li>
              <li className=' nav-item'><NavLink className='nav-link' to="movies" onClick={hide}>Movies</NavLink></li>
              <li className=' nav-item'><NavLink className='nav-link' to="tv" onClick={hide}>Tv</NavLink></li>
              <li className=' nav-item'><NavLink className='nav-link' to="people" onClick={hide}>People</NavLink></li>
            </ul>
          </div>

          <div className=' d-flex align-items-center gap-3 mt-3 m-md-0'>
           
            <div className='social-media d-flex align-items-center gap-2'>
              <div>
              <i className='fa-brands fa-facebook'></i>
              </div>
              <div>
              <i className='fa-brands fa-instagram '></i>
              </div>
              <div>
              <i className='fa-brands  fa-twitter '></i>
              </div>
              <div>
              <i className='fa-brands  fa-tiktok '></i>
              </div>
              <div>
              <i className='fa-brands  fa-spotify '></i>
              </div>
              
            </div>

          </div>

        </div>


      </nav>

    </>
  )
}

export default Navbar