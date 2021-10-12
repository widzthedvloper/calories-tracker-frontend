import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { createIngredient } from '../API/api';
import '../style/ingredient.css';

function AddIngredientsComponent({match}) {
  const history = useHistory();
  if(id === null){
    history.push('/');
  }
  const { user_id, food_id } = match.params;
  const [name, setName] = useState();
  const [calorie, setCalorie] = useState();

  const grabName = (e) => {
    setName(e.target.value);
  };

  const grabCalorie = (e) => {
    setCalorie(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createIngredient(food_id, user_id, {
      name, calorie, food_id, user_id,
    });
    history.push('/App');
  };
  return (
    <>
      <div className="form-confirmation">

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Ingredient
            <input onChange={grabName} id="email" type="text" className="calorie" placeholder="" value={name} />
          </label>
          <br />
          <label htmlFor="calorie">
            Calorie
            <input onChange={grabCalorie} id="calorie" type="number" className="calorie" placeholder="" value={calorie} />
          </label>
          <br />
          <button className="sign-in" type="submit">Add ingredient</button>
        </form>
      </div>
      <div className="footer-nav">
        <div className="nav-item">
          <NavLink className="footer-item" activeClassName="is-active" to="/new/food">
            Add Food
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="footer-text" activeClassName="is-active" to="/App">Dash</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="footer-text" activeClassName="is-active" to="/App">Ingredient</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="footer-text" activeClassName="is-active" to="/App">More</NavLink>
        </div>
      </div>
    </>
  );
}

AddIngredientsComponent.propTypes = {
  match: PropTypes.object
}

export default AddIngredientsComponent;
