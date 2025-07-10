import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import OtherApps from './components/OtherApps'


function App() {

  return (
    <>
    
{/* 
    <LearnMemo/>
    <LearnContextApiParrent/>
    <LearnForm/>
 */}
 


  <BrowserRouter>

    <Header/>
        
      <Routes>
      
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/otherapps' element={<OtherApps/>}/>
 
      </Routes>

    <Footer/>

  </BrowserRouter>



    </>
  )
}

export default App
