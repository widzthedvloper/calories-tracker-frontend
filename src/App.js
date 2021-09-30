/* eslint-disable react/prop-types */
// import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
// import { checkUser } from './action';
import DashboardContainer from './container/DashboardContainer';

const mapState = (state) => ({
  id: state.user.id,
  email: state.user.email,
});

function App() {
  // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   dispatch(checkUser({ email }));
  // // }, []);

  return (
    <>
      <HeadComponent />
      <DashboardContainer />
      <FooterComponent />
    </>
  );
}

export default connect(mapState)(App);
