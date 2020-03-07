import React from 'react';
import { connect } from 'react-redux';
import { getUserOrders } from '../Actions/Orders';


class UserDashboard extends React.Component {

    componentDidMount() {
        this.props.getUserOrders()
    }

    
    render() {
        console.log('ORDER PROPS DASHBOARD:', this.props.allOrders)

        return(<div>
            <h3>Welcome to your dashboard</h3>
        </div>)
    }
}

const mapStateToProp = (state) => ({
    allOrders: state.userOrders
})

export default connect(mapStateToProp, { getUserOrders })(UserDashboard);