import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>

      <div>Home</div>
      <Link to="/clientes">
      <img src="./src/assets/images/img2.png" alt="" />
      </Link>
      <Link to="/productos">
      <img src="./src/assets/images/img2.png" alt="" />
      </Link>
    

    </>
  )
}

export default Home