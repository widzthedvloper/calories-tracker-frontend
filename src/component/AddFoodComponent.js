/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFood } from '../API/api';

const mapState = (state) => ({
  id: state.user.id,
});
function AddFoodComponent({ id }) {
  const [name, setName] = useState();
  const grabName = (e) => {
    setName(e.targrt.value);
  };
  const handleSubmit = () => {
    createFood(id, { name, user_id: id });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="food">
          <input onChange={grabName} id="food" type="text" className="food" placeholder="" value={name} />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
}

export default connect(mapState)(AddFoodComponent);
