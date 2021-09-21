/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';

const mapState = (state) => ({
  userOauth: state.user.auth_token,
});

function App({ userOauth }) {
  return (
    <>
      <HeadComponent />
      <h1>
        You made it to the main page:
        {userOauth}
      </h1>
      <FooterComponent />
    </>
  );
}

export default connect(mapState)(App);
