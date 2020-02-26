import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return( <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/"><h4>Royal Flow</h4></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Sneakers <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Head Wear</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Shirts</a>
        </li>
      </ul>
      <span className="navbar-text">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </span>
    </div>
  </nav>
  </div>)
}

export { NavBar };