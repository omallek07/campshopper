import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>This will be the landing page</h1>
        <Link to={'/products'}>
          <div>
          Click here to see all products!
          </div>
        </Link>
      </div>
  )
}

export default LandingPage
