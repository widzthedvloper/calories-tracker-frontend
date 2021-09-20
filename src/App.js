/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponenet';

const mapState = (state) => ({
  userOauth: state.user.userOauth,
});

function App({ userOauth }) {
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
