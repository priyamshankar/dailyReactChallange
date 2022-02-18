import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>this is a home page.</div>
    {/* <a href="/login">Login</a> */}
    <Link to="/login">go to login page</Link>
    </>
  )
}

export default Home