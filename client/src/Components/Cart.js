import React from 'react';
import { LoggedOutCart} from '../Containers/LoggedOutCart';
import CartItem from '../Containers/CartItem';


class Cart extends React.Component{



    render() {

        const userLoggedIn = sessionStorage.getItem('Bearer');

        if(!userLoggedIn) {
        return(<LoggedOutCart />)
        }


        return(<CartItem />)



    }

}

export default Cart;

