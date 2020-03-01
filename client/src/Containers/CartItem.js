import React from 'react';
import { connect } from 'react-redux';
import { incrementItem } from '../Actions/ActiveCart';


const CartItem = (props) => {

    const { item } = props;
    console.log('PROOOOPPSSSSSS', item)

    const testing = (clickedItem) => {
        // let addCount = props.item.qty = clickedItem.qty + 1
        // console.log(addCount)
        console.log('ADDD COUNT INSIDE TESTING', clickedItem)
        props.incrementItem(clickedItem)
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
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => testing(item)}>+</button>
                    <button type="button" className="btn btn-secondary btn-sm">-</button>
                </div>
                <div className="item-price">
                    <p>${props.item.price}</p>
                </div>
            </div>
        </div>
    </div>)
}


export default connect(null, { incrementItem })(CartItem);

