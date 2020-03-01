import React from 'react';
import { connect } from 'react-redux';
import { LoggedOutCart} from '../Containers/LoggedOutCart';
import CartItem from '../Containers/CartItem';


class Cart extends React.Component{


    render() {
    // ------------------------ Checks for User auth -------------------------------------------
        const userLoggedIn = sessionStorage.getItem('Bearer');

        
        console.log('CART DATA', this.props.cart)
        // ---------------- Render LoggedOutCart if token is not available
        if(!userLoggedIn) {
        return(<LoggedOutCart />)
        }
        
        //----------- Funciton to remove duplicate objects in the cart array -------------------------------------------------------
        const deleteDuplicate = (cartArr) => {
            let table = {};
            let uniqArr = [];
            for(let i = 0; i < cartArr.length; i++) {
                if(!table[cartArr[i].id]) {
                    table[cartArr[i].id] = true;
                    uniqArr.push(cartArr[i])
                }
            }
            return uniqArr
        }

        const uniqCart = deleteDuplicate(this.props.cart); 

        // -------------------------------------- Conditional Rendering for whether Cart is empty or not ----------------------------------------------
        if(this.props.cart.length === 0 && userLoggedIn) {
            return<div>
                <h4>Your Royal cart is empty.</h4>
            </div>
        } else { 
            return(uniqCart.map(i => {
                return(<CartItem item={i} />)
            }))
        }
    }
}


const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps)(Cart);

