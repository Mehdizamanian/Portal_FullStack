import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to,text,className}) => {
  return (
  <>
  
     <Link to={`${to}`} className={`${className}`}>{text}</Link> &nbsp;
  
     </>
)
}

export default Button