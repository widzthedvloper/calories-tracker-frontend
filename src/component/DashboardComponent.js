/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import foodLogo from '../img/food.png';
import '../style/dashboard.css';

function DashboardComponent({
  id, userFoods, email, calorie,
}) {
  const today = new Date();
  const date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;

  let foods;
  if (userFoods.length === 0 || userFoods.status === 500 || userFoods === null) {
    foods = [[
      <div className="meal" key={1}>
        <div className="meal-icon">
          <img src={foodLogo} alt="Ustensils logo" />
        </div>
        <div className="meal-details">
          <span>Pasta</span>
          <br />
          <NavLink className="footer-item" activeClassName="is-active" to={`/new/ingredient/${1}/${1}`}>
            <span>Add ingredients</span>
          </NavLink>
        </div>
      </div>,
    ]];
  } else {
    foods = userFoods.map((food) => (
      <div className="meal" key={food.id}>
        <div className="meal-icon">
          <img src={foodLogo} alt="Ustensils logo" />
        </div>
        <div className="meal-details">
          <span>{food.name}</span>
          <br />
          <NavLink className="footer-item" activeClassName="is-active" to={`/new/ingredient/${id}/${food.id}`}>
            <span style={{ color: '#291' }}>Add ingredients</span>
          </NavLink>
        </div>
      </div>
    ));
  }

  return (
    <div className="dash">
      <h2 className="email-header">{email}</h2>
      <div className="time">{date}</div>
      <div className="measurement-total">
        <div className="meal-total">
          <p>{userFoods.length}</p>
          <p>meal</p>
        </div>
        <div className="calorie-total">
          <p>{calorie.length}</p>
          <p>calorie</p>
        </div>
      </div>
      <div className="measurement-panel">
        {foods}
      </div>
    </div>
  );
}

export default DashboardComponent;
