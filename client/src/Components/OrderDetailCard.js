import React from 'react';


function OrderDetailCard(props) {
    

    console.log('INSIDE CARD', props.item)

    return props.item.map(i => {
        return(<div className="card" key={i.id}>
        <div className="order-detail-card">
            <ul>
                <li>
                    <img src={i.imageUrl} className="order-detail-img" alt="..." />
                </li>
                <li>
                    <p>{i.description}</p>
                </li>
                <li>
                    <p>Quantity {i.cartItem.quantity}</p>
                </li>
                <li>
                    <p className="card-text">Price ${i.price}</p>
                </li>
            </ul>
        </div>
      </div>)
    })
}

export default OrderDetailCard;