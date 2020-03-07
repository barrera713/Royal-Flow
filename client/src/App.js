import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import NavBar from './Containers/NavBar';
import ItemCollection from './Containers/ItemCollection';
import SneakerPage from './Containers/SneakerCollection';
import ShirtCollection from './Containers/ShirtCollection';
import AccessoriesCollection from './Containers/AccessoriesCollection';
import SignUp from './Containers/SignUp';
import Login  from './Containers/Login';
import Cart from './Containers/Cart';
import UserDashboard from './Containers/UserDashboard';



import './App.css';

function App() {
  return (<div>
    <Router history={history}>
    <NavBar />
    <Switch>
     <Route exact path="/" component={ItemCollection} />
     <Route exact path="/sneakers" component={SneakerPage} />
     <Route exact path="/tops" component={ShirtCollection} />
     <Route exact path="/accessories" component={AccessoriesCollection} />
     <Route exact path="/signup" component={SignUp} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/cart" component={Cart} />
     <Route exact path="/dashboard" component={UserDashboard} />
    </Switch>
    </Router>
   </div>
  );
}

export default App;
