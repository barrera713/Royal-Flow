import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import NavBar from './Containers/NavBar';
import SignUp from './Containers/SignUp';
import Login  from './Containers/Login';
import Cart from './Containers/Cart';
import UserDashboard from './Containers/UserDashboard';
import OrderDetails from './Containers/OrderDetails';
import ItemReviews from './Containers/ItemReviews';
import MainBody from './MainBody';



import './App.css';

function App() {
  return (<div>
    <Router history={history}>
    <NavBar />
    <Switch>
     <Route exact path="/" component={MainBody} />
     <Route exact path="/signup" component={SignUp} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/cart" component={Cart} />
     <Route exact path="/dashboard" component={UserDashboard} />
     <Route exact path="/details/:id" component={OrderDetails} />
     <Route exact path="/reviews/:id" component={ItemReviews} />
    </Switch>
    </Router>
   </div>
  );
}

export default App;
