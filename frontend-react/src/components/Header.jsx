import React from 'react'

const Header = () => {
  return (
    <>

      <nav className='navbar container  text-light pt-3 pb-5 p-3 align-items-start'>
      
      <a href="#" className='navbar-brand text-black'>Portal Application </a>

      <div>
        <a href="#" className='btn btn-outline-info'> Login</a>
        &nbsp;&nbsp;
        <a href="#" className='btn btn-info '> Register</a>
      </div>

      </nav>
      
      </>
 
  )
}

export default Header