import React from 'react';
import { connect } from 'react-redux';
import { addItem, cartCount } from '../Actions/ActiveCart';
import history from '../history';

const ItemCard = (props) => {

    const { item } = props;

    const handleAddItem = (item) => {
        let userLoggedIn = sessionStorage.getItem('Bearer');
    
        //---------- checks if item exist in props.cart --------------
        let findItem = props.cart.find(i => i.id === item.id)
        // console.log('item', findItem)
        if(userLoggedIn === null ) {
            history.push('/login');
        }
        else if (findItem === undefined && userLoggedIn !== null) {
            props.addItem(item)
            props.cartCount()
        } else {
            window.alert(`${item.description} is already in your cart.`)
        }
    };

    return(<div className="col mb-4" key={item.id}>
        <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <p className="card-text">{item.description}</p>
            {item.size ? <p>Size {item.size} | Price ${item.price}</p> : <p>Price ${item.price}</p>}
            <button type="button" className="btn btn-warning" onClick={() => handleAddItem(item)} >
                <i className="fas fa-cart-arrow-down"></i>
                Add to Cart
            </button>
            </div>
        </div>
    </div>)
};


const mapStateToProps = state => ({
    cart: state.cart.cartItems
});

export default connect(mapStateToProps, { addItem, cartCount })(ItemCard);

