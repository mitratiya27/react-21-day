import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/home'element={<Home />} />
        <Route path='/contact'element={<Contact />} />
        <Route path='/about'element={<About />} />
        <Route path='/*'element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
