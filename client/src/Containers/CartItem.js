import React from 'react';


const CartItem = (props) => {

    const { item } = props;

    console.log('props', item)

    return(<div className="card">
        <div className="card-body">
            <div className="container">
                <div className="item-img">
                    <img src={item.imageUrl} className="cartItem-img" alt="..."/>
                </div>
                <div className="item-description">
                    <p>{item.description}</p>
                    <p>Qty</p>
                </div>
                <div className="item-price">
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default CartItem

