import React from 'react';
import { connect } from 'react-redux';
import { getUserOrders } from '../Actions/Orders';
import OrderCard from '../Components/OrderCard';


class UserDashboard extends React.Component {

    componentDidMount() {
        this.props.getUserOrders()
    }

    
    render() {
        console.log('ORDER PROPS DASHBOARD:', this.props.allOrders)

        return(<div>
            <h5>Welcome to your dashboard</h5>
            {this.props.allOrders.map(i => {
                return <OrderCard order={i} key={i.id}/>
            })}
        </div>)
    }
}

const mapStateToProp = (state) => ({
    allOrders: state.userOrders.orders
})

export default connect(mapStateToProp, { getUserOrders })(UserDashboard);