import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LearnMemo from './components/learnComponents/LearnMemo'
import LearnContextApiParrent from './components/learnComponents/LearnContextApiParrent'

function App() {

  return (
    <>
    <Navbar/>
    <LearnMemo/>
    <LearnContextApiParrent/>
    </>
  )
}

export default App
