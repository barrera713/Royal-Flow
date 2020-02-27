import React from 'react';
import history from '../history';

class Cart extends React.Component{


    handleLogin = () => {
        history.push('/login')
    };

    handleSignUp = () => {
        history.push('/signup')
    };


    render() {

        return(
        <div className="cart-no-user">
            <h5>Your Royal cart is empty</h5>
            <p>Have an account? Sign in to see your items.</p>
            <ul>
                <li>
                    <button className="btn btn-primary btn-lg" onClick={this.handleLogin}>Login</button>
                </li>
                <li>
                    <button className="btn btn-primary btn-lg" onClick={this.handleSignUp}>Sign Up</button>
                </li>
            </ul>
        </div>)
    }

}

export default Cart;

