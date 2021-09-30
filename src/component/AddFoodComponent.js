/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createFood } from '../API/api';

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
    </>
  );
}

export default connect(mapState)(AddFoodComponent);
