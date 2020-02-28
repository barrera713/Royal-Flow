import React from 'react';
import { connect } from 'react-redux';
import { LoggedOutCart} from '../Containers/LoggedOutCart';
import CartItem from '../Containers/CartItem';


class Cart extends React.Component{


    render() {

        const userLoggedIn = sessionStorage.getItem('Bearer');

        console.log('active Cart data?', this.props.cart)

        if(!userLoggedIn) {
        return(<LoggedOutCart />)
        }

        return(<CartItem />)

    }
}

const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps)(Cart);

