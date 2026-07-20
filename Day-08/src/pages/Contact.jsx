import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'

const Contact = () => {
  return (
    <div>
      <h1>Conctact Page</h1>
      <Link to="/home">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Contact
