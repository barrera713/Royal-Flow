import React from 'react';
import OrderDetailCard from '../Components/OrderDetailCard';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';


function OrderDetails(props) {
    // console.log('PROPS IN ORDER DETAILS', props.details)
  
    return(<div>
        {props.details.map(item => {
            return <OrderDetailCard key={item} item={item} />
        })}
        <Link to="/dashboard">
            <button className="btn btn-primary dashboard">Back to Dashboard</button>
        </Link>
    </div>)
}

const mapStateToProps = state => ({
    details: state.userOrders.orderDetails
})

export default connect(mapStateToProps)(OrderDetails);