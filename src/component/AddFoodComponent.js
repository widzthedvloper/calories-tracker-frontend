/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { createFood } from '../API/api';
import '../style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus,
  faChartLine,
  faTasks,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

const mapState = (state) => ({
  id: state.user.id,
});
function AddFoodComponent({ id }) {
  const history = useHistory();
  const [name, setName] = useState();
  const grabName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFood(id, { name, user_id: id });
    history.push('/App');
  };
  return (
    <>
      <div className="form-confirmation">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Food
            <br />
            <input onChange={grabName} id="email" type="text" className="email" placeholder="enter your food name" value={name} />
          </label>
          <br />
          <button className="sign-in" type="submit">Add Food</button>
        </form>
      </div>
      <div className="footer-nav">
      <div className="nav-item">
        <NavLink className="footer-item" activeClassName="is-active" to="/new/food" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faPlus} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Add Food
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faChartLine} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Dash
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faTasks} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Ingredient
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faEllipsisH} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            More
          </span>
        </NavLink>
      </div>
    </div>
    </>
  );
}

export default connect(mapState)(AddFoodComponent);
