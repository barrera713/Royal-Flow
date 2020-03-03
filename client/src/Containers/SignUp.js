import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../Actions/User';


class SignUp extends React.Component {


    loginForm = (e) => {
        e.preventDefault()
        const formData = {
            "email": e.target["email"].value,
            "password": e.target["password"].value
        }
        // console.log('inside loginForm', formData)
        this.props.createUser(formData);
    }

    render() {

        return(
        <form className="login-form" onSubmit={this.loginForm}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>)
    }
}

export default connect(null, { createUser })(SignUp);