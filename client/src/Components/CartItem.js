import React from 'react';
import { connect } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../Actions/ActiveCart';


const CartItem = (props) => {

    const { item } = props;
    console.log('PROOOOPPSSSSSS', )

    const handleIncrement = (item) => {
        // console.log('ADDD COUNT INSIDE TESTING', item)
        props.incrementItem(item)
    }

    const handleDecrement = (item) => {
        // console.log('INSIDE DECREMENT');
        props.decrementItem(item)
    }

    const handleRemove = (item) => {
        console.log('INSIDE REMOVE')
        props.removeItem(item)
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
                    <ul>
                        <li>
                            <p>Qty: {item.quantity}</p>
                        </li>
                        <li id="remove-item" onClick={() => handleRemove(item)}>
                            <p>Delete</p>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => handleIncrement(item)}>+</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={ () => handleDecrement(item)}>-</button>
                </div>
                <div className="item-price">
                    <p>${props.item.price}</p>
                </div>
            </div>
        </div>
    </div>
    )
}




export default connect(null, { incrementItem, decrementItem, removeItem })(CartItem);

