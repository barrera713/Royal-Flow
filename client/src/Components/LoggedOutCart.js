import React from 'react';
import history from '../history';



const handleLogin = () => {
    history.push('/login')
};

const handleSignUp = () => {
    history.push('/signup')
};


function LoggedOutCart() {

    return(
    <div className="cart-no-user">
        <h5>Your Royal cart is empty</h5>
        <p>Have an account? Sign in to create a cart.</p>
        <ul>
            <li>
                <button className="btn btn-primary btn-lg" onClick={() => handleLogin()}>Login</button>
            </li>
            <li>
                <button className="btn btn-primary btn-lg" onClick={() => handleSignUp()}>Sign Up</button>
            </li>
        </ul>
    </div>)

}

export { LoggedOutCart };