/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
// import axios from 'axios';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
import { fetchUserFood } from './action';

const mapState = (state) => ({
  id: state.user.id,
  userFoods: state.user.foods,
  email: state.user.email,
});

function App({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFood(id));
  }, []);

  const handleClick = () => {
    dispatch(fetchUserFood(id));
  };
  return (
    <>
      <HeadComponent />
      <h1>
        You made it to the main page:
        <button type="button" onClick={handleClick}>fetch</button>
      </h1>
      <FooterComponent />
    </>
  );
}

export default connect(mapState)(App);
