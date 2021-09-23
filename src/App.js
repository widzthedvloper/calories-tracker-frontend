/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import HeadComponent from './component/HeadComponent';
import FooterComponent from './component/FooterComponent';
import { fetchUserFood } from './action';

const mapState = (state) => ({
  userOauth: state.user.auth_token,
  userFoods: state.user.foods,
  foodIngredients: state.user.ingredients,
});

function App({ userOauth }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFood({ Authorization: userOauth }));
  }, [userOauth]);

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
