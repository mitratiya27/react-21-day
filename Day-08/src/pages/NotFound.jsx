import React from 'react'
import { Link } from 'react-router-dom'

import Home from './Home'
const NotFound = () => {
  return (
    <div>
      <h3>Error Page is not found</h3>
      <Link to={'/'}>Go to Home page</Link>
    </div>
  )
}

export default NotFound
