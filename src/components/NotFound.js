import React from 'react'
import {Link} from 'react-router-dom'


const NotFoundPage = () => (
  <div>
    <p>This page was not found (404).</p>
    <Link to="/">Go Home</Link>
  </div>
)

export default NotFoundPage