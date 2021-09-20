/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import HeadComponent from './component/HeadComponent';

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
    </div>
  );
}

export default connect(mapState)(App);
