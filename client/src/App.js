import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { NavBar } from './Components/NavBar';
import ItemCollection from './Components/ItemCollection';
import { SignUp } from './Components/SignUp';
import Login  from './Components/Login';
import Cart from './Components/Cart';

import './App.css';

function App() {
  return (<div>
    <Router history={history}>
    <NavBar />
    <Switch>
     <Route exact path="/" component={ItemCollection} />
     <Route exact path="/signup" component={SignUp} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/cart" component={Cart} />
    </Switch>
    </Router>
   </div>
  );
}

export default App;
