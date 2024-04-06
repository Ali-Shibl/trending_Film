import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { Auth } from '../../Context/AuthContext';
const Navbar = () => {
  
  const navigate=useNavigate()
//  login
  const {userIsLogiedIn,setuserIsLogiedIn}=useContext(Auth)

//click logout
function logout() {
  setuserIsLogiedIn(false)
  localStorage.removeItem('Token')
  navigate('/login')
}


  
  const [showNav, setshowNav] = useState(false)


  function show() {
    setshowNav(true)
    document.querySelector('body').style.overflow='hidden'
  }

  function hide() {
    setshowNav(false)
    document.querySelector('body').style.overflow='auto'

  }
  // click links
  function clickLink(e){
  const links=Array.from(document.querySelectorAll('.nav-link')) 
  links.forEach(link => {
  link.classList.remove('active')
  e.target.classList.add('active')
});
    
    hide()
  }

  return (
    <>
    <div className='h-nav'></div>
      <nav className='d-flex align-items-center justify-content-between py-3  px-4 '>

        <Link className='head-mobile  text-white' to='home'><h1 className='m-0'>Noxe</h1> </Link>
        <i className="open fa-solid fa-bars-staggered cursor-pointer  fs-2" onClick={show}></i>


        <div className={showNav ? 'show' : ''}>

          <div className='close bg-danger  rounded-circle cursor-pointer' onClick={hide}>
            <i className=" fa-solid fa-xmark text-white" ></i>
          </div>
          

          <div className=' d-flex align-items-center gap-3  gap-md-4 '>
            <Link className='head-lap ' to='home'><h1 className='m-0'>Noxe</h1> </Link>
           {userIsLogiedIn ? <ul className="list-unstyled d-flex align-items-center gap-3">
              <li className=' nav-item'><Link onClick={clickLink} className='nav-link active' to="home">Home</Link></li>
              <li className=' nav-item'><Link onClick={clickLink} className='nav-link' to="movies">Movies</Link></li>
              <li className=' nav-item'><Link onClick={clickLink} className='nav-link' to="tv">Tv</Link></li>
              <li className=' nav-item'><Link onClick={clickLink} className='nav-link' to="people">People</Link></li>
            </ul>:''}
          </div>

          <div className=' d-flex align-items-center gap-4'>
           
           {userIsLogiedIn? <div className='social-media d-flex align-items-center gap-2'>
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
              
            </div>:''}

            <ul className=' d-flex align-items-center gap-4 gap-lg-3'>
           {userIsLogiedIn?  
               <li className='nav-item'>
               <span onClick={logout} className='cursor-pointer nav-link'>Logout</span>
             </li>
              :
              <>
              <li className='nav-item'>
                <Link onClick={clickLink} className=' nav-link' to='/login'>Login</Link>
              </li>
              <li className='nav-item'>
                <Link onClick={clickLink} className='active nav-link' to=''>register</Link>
              </li>
              
              </>
             
              }
              
            </ul>
          </div>

        </div>


      </nav>

    </>
  )
}

export default Navbar