import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import axios from 'axios'
import Poster from './components/Poster/Poster'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
  <Poster></Poster>
  
     
    </>
  )
}

export default App
