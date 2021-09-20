/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponenet';
import SignInComponent from './component/SignInComponent';

const mapState = (state) => ({
  userOauth: state.user.userOauth,
});

function App({ userOauth }) {
  if (userOauth === null) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={SignInComponent} exact />
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <div className="App">
      <HeadComponent />
      Data form Redux:
      {' '}
      {userOauth}
      <FooterComponent />
    </div>
  );
}

export default connect(mapState)(App);
