import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';


const handleLogOut = () => {
  window.location = '/'
  sessionStorage.clear()
}

const handleHome = () => {
  history.push('/')
}


function NavBar() {
//----------------------------------------------- Checks for user auth ----------------------------------------------------------------------
  let userLoggedIn = sessionStorage.getItem('Bearer');

  return( <div className="App">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" onClick={() => handleHome()}><h4>Royal Flow</h4></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Sneakers <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Tops</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Accessories</a>
      </li>
    </ul>
    <span className="navbar-text">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
{/* -----------------------------------Ternary for user Login/Logout ------------------------------------------------------------------- */}
          { !userLoggedIn ? <Link to="/login" className="nav-link">Login</Link> :
          <Link onClick={() => handleLogOut()} className="nav-link">Log Out</Link>}
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
    </span>
  </div>
  </nav>
  </div>)
}

export { NavBar };