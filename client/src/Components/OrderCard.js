import React from 'react';
import { connect } from 'react-redux';
import { getItemsFromOrder } from '../Actions/Orders';
import { Link } from 'react-router-dom';



function OrderCard(props) {

    const { order } = props;
    let setDate = new Date(order.createdAt);
    let formatDate = setDate.toDateString()

    const getItems = (order) => {
        // console.log('ID inside function', order.id)
        props.getItemsFromOrder(order.id)
    }

    return(<div>
    <div className="card" key={order.id}>
        <div className="card-body">
            <p>{formatDate}</p>
            <p>$ {order.total}</p>
           <Link to={`/details/${order.id}`} className="btn btn-primary details" onClick={ () => getItems(order) }>Details</Link>
        </div>
    </div>
    </div>)
}



export default connect(null, { getItemsFromOrder })(OrderCard);