import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h2>Welcome home</h2>
      <Link to='/secured'>
        <button>Idź do tajnej strony aplikacji</button>
      </Link>
    </>
  )
}

export default Home
