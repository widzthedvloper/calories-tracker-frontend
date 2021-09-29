/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createIngredient } from '../API/api';

function AddIngredientsComponent({match}) {
  const history = useHistory();
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredient">
          ingredient
          <input onChange={grabName} id="ingredient" type="text" className="calorie" placeholder="" value={name} />
        </label>
        <label htmlFor="calorie">
          Calorie
          <input onChange={grabCalorie} id="calorie" type="number" className="calorie" placeholder="" value={calorie} />
        </label>
        <button type="submit">Add ingredient</button>
      </form>
    </>
  );
}

export default AddIngredientsComponent;
