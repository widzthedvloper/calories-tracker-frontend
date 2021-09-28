import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import AddFoodComponent from './AddFoodComponent';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignInComponent} />
        <Route exact path="/App" component={App} />
        <Route exact path="/new/user" component={SignUpComponent} />
        <Route exact path="/new/food" component={AddFoodComponent} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
