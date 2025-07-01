import React, { createContext, useState } from 'react'
import LearnContextApiChild from './LearnContextApiChild'
// contextapi steps =
//  1-create contexts sepreatly out of main funcation 
// and export them at the end (parrent.jsx)  =>      line 9 ,10,32
//  2-create provider (parrent.jsx)  =>              line 19 to 25
//  3-create consumer in (child.jsx) by usecontext =>  line 7 , 8

const stockContext=createContext( )  //s1
const userContext=createContext()   //s1

const LearnContextApiParrent = () => {
    const stock ="Tesla"
    const [user,setUser]= useState({username:'Ali' , logged_in:true})
  return (
    <>
    <div style={{color:"white"}}><h3>LearnContextApiParrent </h3>  </div>
    {/* s2 */}
    <stockContext.Provider value={{stock}}>
    <userContext.Provider value={{user , setUser}}>

    <LearnContextApiChild/>
    
    </userContext.Provider>
    </stockContext.Provider>
    {/* end s2 */}
    </>
  )
}
export default LearnContextApiParrent
export {stockContext,userContext}  //s1