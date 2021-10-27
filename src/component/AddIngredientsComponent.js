import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { createIngredient } from '../API/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredient } from '../action';
import foodLogo from '../img/food.png';
import '../style/ingredient.css';

function AddIngredientsComponent({match}) {
  const dispatch = useDispatch()
  const history = useHistory();
  const id = useSelector(state => state.user.id);
  const ingredients = useSelector(state => state.user.ingredients);
  if(id === null){
    history.push('/');
  }
  const { user_id, food_id } = match.params;
  const [name, setName] = useState();
  const [calories, setCalories] = useState();
  
  useEffect(() => {
    dispatch(fetchIngredient(food_id, user_id));
  }, [])

  const grabName = (e) => {
    setName(e.target.value);
  };

  const grabCalorie = (e) => {
    setCalories(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createIngredient(food_id, user_id, {
      name, calories, food_id, user_id,
    });
    dispatch(fetchIngredient(food_id, user_id));
    history.push('/App');
  };

  let foodIngredients = [];
  foodIngredients = ingredients.filter(function(ingredient) {
    return ingredient.food.id == food_id;
  })
  if (foodIngredients.length === 0 || ingredients.status === 500 || ingredients === null) {
    foodIngredients = [[
      <div className="meal" key={1}>
        <div className="meal-icon">
          <img src={foodLogo} alt="Ustensils logo" />
        </div>
        <div className="meal-details">
          <span> Default Ingredient</span>
          <br />
          <span>Watter</span>
        </div>
      </div>,
    ]];
  } else {
    foodIngredients = foodIngredients.map((ingredient) => (
      <div className="meal" key={ingredient.id}>
        <div className="meal-icon">
          <img src={foodLogo} alt="Ustensils logo" />
        </div>
        <div className="meal-details">
          <span>Ingredient</span>
          <br />
          <span>{ingredient.name}</span>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="ingredients-container">
        {foodIngredients}
      </div>
      <div className="form-confirmation form-ingredient">

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Ingredient
            <input onChange={grabName} id="email" type="text" className="calorie" placeholder="" value={name} />
          </label>
          <br />
          <label htmlFor="calorie">
            Calorie
            <input onChange={grabCalorie} id="calorie" type="number" className="calorie" placeholder="" value={calories} />
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
