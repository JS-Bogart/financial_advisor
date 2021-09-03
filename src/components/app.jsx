import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
//Containers:
import HomeContainer from './home/home_container';
// import CalculatorContainer from './calculator/calculator_container';


const App = () => (
  <div className="app">
    <Switch>     
      <Route exact path="/home" component={HomeContainer} />
      {/* <Route exact path="/calculator" component={CalculatorContainer} /> */}
      <Redirect to="/home" />
    </Switch>
  </div>
);

export default App;