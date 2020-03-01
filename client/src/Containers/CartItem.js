import React from 'react';
import { connect } from 'react-redux';
import { incrementItem, decrementItem } from '../Actions/ActiveCart';


const CartItem = (props) => {

    const { item } = props;
    console.log('PROOOOPPSSSSSS', item)

    const handleIncrement = (clickedItem) => {
        console.log('ADDD COUNT INSIDE TESTING', clickedItem)
        props.incrementItem(clickedItem)
    }

    const handleDecrement = (clickedItem) => {
        console.log('INSIDE DECREMENT');
        props.decrementItem(clickedItem)
    }

    return(
    <div className="card" key={item.id}>
        <div className="card-body">
            <div className="container">
                <div className="item-img">
                    <img src={item.imageUrl} className="cartItem-img" alt="..."/>
                </div>
                <div className="item-description">
                    <p>{item.description}</p>
                    <p>Qty: {item.quantity}</p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => handleIncrement(item)}>+</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={ () => handleDecrement(item)}>-</button>
                </div>
                <div className="item-price">
                    <p>${props.item.price}</p>
                </div>
            </div>
        </div>
    </div>)
}


export default connect(null, { incrementItem, decrementItem })(CartItem);

