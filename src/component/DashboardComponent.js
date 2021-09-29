/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import foodLogo from '../img/food.png';

function DashboardComponent({
  id, userFoods, email, calorie,
}) {
  const today = new Date();
  const date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
  const foods = userFoods.map((food) => (
    <div className="meal" key={food.id}>
      <div className="meal-icon">
        <img src={foodLogo} alt="Ustensils logo" />
      </div>
      <div className="meal-details">
        <span>{food.name}</span>
        <br />
        <NavLink className="footer-item" activeClassName="is-active" to={`/new/ingredient/${id}/${food.id}`}>
          <span>Add ingredients</span>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <>
      <h2>{email}</h2>
      <div className="time">{date}</div>
      <div className="measurement-total">
        <div className="meal-total">{userFoods.length}</div>
        <div className="calorie-total">{calorie.length}</div>
      </div>
      <div className="measurment-panel">
        {foods}
      </div>
    </>
  );
}

export default DashboardComponent;
