/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import DashboardComponent from '../component/DashboardComponent';

const mapState = (state) => ({
  id: state.user.id,
  userFoods: state.user.foods,
  ingredients: state.user.ingredients,
  email: state.user.email,
  calorie: state.user.calories,
});

function DashboardContainer({
  id, userFoods, ingredients, email, calorie,
}) {
  return (
    <>
      <DashboardComponent id={id} userFoods={userFoods} ingredients={ingredients} email={email} calorie={calorie} />
    </>
  );
}

export default connect(mapState)(DashboardContainer);
