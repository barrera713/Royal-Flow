import React from 'react';
import { Link } from 'react-router-dom';
// import history from '../history';
import { connect } from 'react-redux';


const handleLogOut = () => {
  window.location = '/'
  sessionStorage.clear()
}


function NavBar(props) {
  // console.log('NAVBAR PROPS', props.counter)
//----------------------------------------------- Checks for user auth ----------------------------------------------------------------------
  let userLoggedIn = sessionStorage.getItem('Bearer');
 
  return( <div className="navBar">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <div className="navbar-nav mr-auto">
      <Link to="/" className="navbar-brand"><h4>Royal Flow</h4></Link>
    </div>
    <span className="navbar-text">
      <ul className="navbar-nav mr-auto">
        <li>
          { !userLoggedIn ? null :
          <Link to="/dashboard" className="nav-link">Dashboard</Link>}
        </li>
        <li className="nav-item">
          { !userLoggedIn ? <Link to="/login" className="nav-link">Login</Link> :
          <Link to="" onClick={() => handleLogOut()} className="nav-link">Log Out</Link>}
        </li>
        <li>
          { userLoggedIn ? null :
          <Link to="/signup" className="nav-link">Join Us</Link>}
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <button className="btn-nav-cart"><i className="fas fa-shopping-cart"></i>{props.counter === 0 ? '' : `${props.counter}`} </button>
          </Link>
        </li>
      </ul>
    </span>
  </div>
  </nav>
  </div>)
}

const mapStateToProps = state => ({
  counter: state.cart.cartCount
});

export default connect(mapStateToProps)(NavBar);