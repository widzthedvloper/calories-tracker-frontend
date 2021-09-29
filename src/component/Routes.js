import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import AddFoodComponent from './AddFoodComponent';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';
import AddIngredientsComponent from './AddIngredientsComponent';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignInComponent} />
        <Route exact path="/App" component={App} />
        <Route exact path="/new/user" component={SignUpComponent} />
        <Route exact path="/new/food" component={AddFoodComponent} />
        <Route exact path="/new/ingredient/:user_id/:food_id" component={AddIngredientsComponent} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
