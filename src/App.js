/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
// import axios from 'axios';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
import { fetchUserFood } from './action';
import DashboardContainer from './container/DashboardContainer';

const mapState = (state) => ({
  id: state.user.id,
});

function App({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFood(id));
  }, []);

  return (
    <>
      <HeadComponent />
      <DashboardContainer />
      <FooterComponent />
    </>
  );
}

export default connect(mapState)(App);
