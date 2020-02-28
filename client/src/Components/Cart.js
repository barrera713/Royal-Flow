import React from 'react';
import { connect } from 'react-redux';
import { LoggedOutCart} from '../Containers/LoggedOutCart';
import CartItem from '../Containers/CartItem';


class Cart extends React.Component{


    render() {
// ------------------------ Checks if User is logged in -------------------------------------------
        const userLoggedIn = sessionStorage.getItem('Bearer');

        console.log('CART DATA', this.props.cart)

        if(!userLoggedIn) {
        return(<LoggedOutCart />)
        }
// -------------------------------------- Conditional Rendering for whether Cart is empty or not ----------------------------------------------
        if(this.props.cart.length === 0 && userLoggedIn) {
            return<div>
                <h4>Your Royal cart is empty.</h4>
            </div>
        } else { 
            return(this.props.cart.map(i => {
                return(<CartItem item={i} />)
            }))
        }
    }
}

const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps)(Cart);

