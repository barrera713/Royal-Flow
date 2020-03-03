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

const handleSneakerPage = () => {
  history.push('/sneakers')
}

const handleShirtPage = () => {
  history.push('/tops')
}

const handleAccessoriesPage = () => {
  history.push('/accessories')
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
        <Link className="nav-link" onClick={() => handleSneakerPage()}>Sneakers <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => handleShirtPage()}>Tops</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" onClick={() => handleAccessoriesPage()}>Accessories</Link>
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