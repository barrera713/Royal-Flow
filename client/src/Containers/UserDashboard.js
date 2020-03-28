import React from 'react';
import { connect } from 'react-redux';
import { getUserOrders } from '../Actions/Orders';
import OrderCard from '../Components/OrderCard';


class UserDashboard extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getUserOrders()
    }
    
    render() {
        let allOrders = this.props.allOrders;
        let reversedArr = allOrders.reverse();
        return(<div className="dashboard-container">
            <div>
            <h2 className="section-header">Order History</h2>
            {reversedArr.map(i => {
                return <OrderCard order={i} key={i.id}/>
            })}
            </div>
        </div>)
    }
}

const mapStateToProp = (state) => ({
    allOrders: state.userOrders.orders
})

export default connect(mapStateToProp, { getUserOrders })(UserDashboard);