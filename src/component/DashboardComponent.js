/* eslint-disable react/prop-types */
import React from 'react';

function DashboardComponent({
  id, userFoods, ingredients, email,
}) {
  const today = new Date();
  const date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;

  return (
    <>
      <h2>{email}</h2>
      <div className="time">{date}</div>
      <div className="measurement-total">
        <div className="meal-total">{userFoods.length}</div>
        <div className="meal-ingredient">{ingredients.length}</div>
        <div className="calorie-total">{id}</div>
      </div>
      <div className="measurment-panel">
        <div className="meal">
          <div className="meal-icon">
            <img src="../img/food.png" alt="" />
          </div>
          <div className="meal-details">
            <span>meal name</span>
            <span>meal calorie</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardComponent;
