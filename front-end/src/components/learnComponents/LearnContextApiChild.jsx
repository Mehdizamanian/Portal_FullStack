

import React, { useContext } from 'react'
import { stockContext , userContext } from './LearnContextApiParrent'

const LearnContextApiChild = () => {
    const stockData = useContext(stockContext)  //s3
    const userData = useContext(userContext)//s3
  return (
    <div style={{color:"white"}}>
        LearnContextApiChild= 
        {userData.user.username} 
          , is the owner of  {stockData.stock}  cars 
        
        </div>
  )
}

export default LearnContextApiChild