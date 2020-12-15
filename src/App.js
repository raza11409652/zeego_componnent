import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import Header from "./components/header";
import Slider from "./components/slider";
import Dashboard from "./components/dashboard/dashboard";
import Cards from "./components/cards/cards";
import Checkouot from "./components/checkout/checkout";




function App() {
  return (
    <div className="App">

    
  <Router>
    <Switch>
    <Route exact path='/' component={Header} />
    <Route exact path='/slider' component={Slider} />
    <Route exact path='/dash' component={Dashboard} />
    <Route exact path='/cards' component={Cards} />
    <Route exact path='/check' component={Checkouot} />
       
     
    </Switch>
</Router>
</div>
  );
}

export default App;
