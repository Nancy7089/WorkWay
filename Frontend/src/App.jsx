import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Resume from './pages/Resume'


function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />

    </Routes>
    </>

  )
}

export default App
