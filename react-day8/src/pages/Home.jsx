import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/home">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Home
