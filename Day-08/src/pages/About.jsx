import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/home">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default About
