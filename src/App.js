/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
// import axios from 'axios';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
import { fetchUserFood } from './action';

const mapState = (state) => ({
  userOauth: state.user.auth_token,
  userFoods: state.user.foods,
  foodIngredients: state.user.ingredients,
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Hi');
  }, []);

  const handleClick = () => {
    const mykey = localStorage.getItem('jwt_token');
    dispatch(fetchUserFood(mykey));
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
