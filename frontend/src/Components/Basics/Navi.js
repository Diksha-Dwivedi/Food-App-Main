import React from 'react'
import {Link} from "react-router-dom"

import './navi.css'

const Navi = () => {
  return (
    <>

    {/* <h1>nav</h1> */}
     <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
     <Link className="navbar-brand word" href="/">Food App</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  word">
          <Link className="nav-link active" aria-current="page" to="/"  style={{color:'aliceblue'}}>Home</Link>
        </li>
        
        <li className="nav-item word">
          <Link className="nav-link active" aria-current="page" to="/allplan" style={{color:'aliceblue'}}>Plan</Link>
        </li>
        <li className="nav-item word">
          <Link className="nav-link active" aria-current="page" to="/login" style={{color:'aliceblue'}}>Login</Link>
        </li>
        
        
      </ul>
    
    </div>
  </div>
</nav> 




    
    </>
  )
}

export default Navi