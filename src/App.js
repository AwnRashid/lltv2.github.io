import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Virtual from './pages/virtual';
import SignUpPage from './pages/signup';
import InPerson from './pages/inperson';
import Hybrid from './pages/hybrid';
import About from './pages/about';
import Analytics from './pages/analytics';
import Sponsors from './pages/sponsors';
import CS from './pages/customersuccess';
import Match from './pages/matchmaking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignUpPage} exact /> 
        <Route path='/virtual' component={Virtual} exact />
        <Route path='/inperson' component={InPerson} exact />
        <Route path='/hybrid' component={Hybrid} exact />
        <Route path='/about' component={About} exact />
        <Route path='/analytics' component={Analytics} exact />
        <Route path='/sponsors' component={Sponsors} exact />
        <Route path='/customersuccess' component={CS} exact />
        <Route path='/matchmaking' component={Match} exact />
      </Switch>
    </Router>
  );
}

export default App;
