import React from 'react';
import { connect } from 'react-redux';
import { LoggedOutCart} from '../Components/LoggedOutCart';
import CartItem from '../Components/CartItem';


class Cart extends React.Component{


    render() {
    // ------------------------ Checks for User auth -----------------------------------------------------------------------------
        const userLoggedIn = sessionStorage.getItem('Bearer');

        
        console.log('CART DATA', this.props.cart)
        // ---------------- Render LoggedOutCart if token is not available------------------------------------------------------
        if(!userLoggedIn) {
        return(<LoggedOutCart />)
        }
        
        //----------------------------- function to multiply each item's price by it's quantity  ------------------------------
        let eachItemTotal = this.props.cart.map(i => i.price * i.quantity)
        //-------------------------- returns array of total price for each item ---------------------------------------------------------------------
        console.log('eachItemTotal', eachItemTotal)
        
        //------------------------------------- if else function to join array total depending on the length of array  ------------------------------------------------------------
        const getGranTotal = (arr) => {
            if(arr.length === 0) {
                return ''
            } else if (arr.length === 1) {
                return arr.join('')
            } else if (arr.length > 1) {
                let sum = arr.reduce((acc, item) => {
                    return acc + item
                })
                return sum
            }
        }

        let cartTotal = getGranTotal(eachItemTotal);
        console.log('TOTALLL', cartTotal)

        let totalItems = this.props.cart.length;
        
        // -------------------------------------- Conditional Rendering for whether Cart is empty or not ----------------------------------------------
        if(this.props.cart.length === 0 && userLoggedIn) {
            return<div>
                <h4>Your Royal cart is empty.</h4>
            </div>
        } else { 
            return(
                <div>
                    <p>Shopping Cart</p>
                    {this.props.cart.map(i => {
                        return <CartItem item={i}/>
                    })}
                    <div>
                        { totalItems > 1 ? <p>Items ({totalItems})</p> : <p>Item ({totalItems})</p> }
                        <hr/>
                        <h4>Total ${cartTotal}</h4>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps)(Cart);

