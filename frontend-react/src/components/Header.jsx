import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
const Header = () => {
  return (
    <>

      <nav className='navbar container  text-light pt-3 pb-5 p-3 align-items-start'>

      <Button to='/' className='navbar-brand text-black' text='Portal Application '/>



      <div>
       
        <Button  to='/login' text='Login'  className='btn btn-outline-info'/>
        
        <Button to='/register'  className='btn btn-info ' text='Register'/>
      </div>

      </nav>
      
      </>
 
  )
}

export default Header