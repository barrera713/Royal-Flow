import React from 'react';


function OrderCard(props) {

    const { order } = props;
    let setDate = new Date(order.createdAt);
    let formatDate = setDate.toDateString()

    return(<div className="card" key={order.id}>
        <div className="card-body">
            <p>{formatDate}</p>
            <p>$ {order.total}</p>
           <button className="btn btn-primary">Details</button>
        </div>
    </div>)

}

export default OrderCard;