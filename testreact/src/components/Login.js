import React from 'react'
import { NavLink as Link } from 'react-router-dom';

const login = () => {
  return (
    <>
    <div>this is a login page</div>
    <Link to='/tub'>go to logout</Link>
    </>
  )
}

export default login