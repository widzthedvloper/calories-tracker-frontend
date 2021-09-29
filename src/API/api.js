/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable quote-props */

const baseUrl = 'https://obscure-ridge-52411.herokuapp.com/api/v1';

const logUser = async (user) => {
  try {
    const response = await fetch(`${baseUrl}/log`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

const createUser = async (user) => {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

const getFoods = async (id) => {
  const resp = fetch(`${baseUrl}/users/${id}/foods`, {
    method: 'GET',
    params: {},
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error.message);

  return resp;
};

const createFood = async (id, food) => {
  const resp = fetch(`${baseUrl}/users/${id}/foods`, {
    method: 'POST',
    params: {},
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(food),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error.message);
  return resp;
};

const createIngredient = async (food_id, user_id, ingredient) => {
  const resp = fetch(`${baseUrl}/users/${user_id}/foods/${food_id}/ingredients`, {
    method: 'POST',
    params: {},
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(ingredient),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error.message);
  return resp;
};

export {
  logUser, createUser, getFoods, createFood, createIngredient,
};
