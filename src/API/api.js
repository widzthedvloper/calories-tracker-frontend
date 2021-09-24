/* eslint-disable prefer-template */
/* eslint-disable quote-props */

const baseUrl = 'https://obscure-ridge-52411.herokuapp.com/api/v1/';

const logUser = async (user) => {
  try {
    const response = await fetch('https://fierce-escarpment-48376.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
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
    const response = await fetch(`${baseUrl}/api/v1/users`, {
      method: 'POST',
      headers: {
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
  const resp = fetch(`${baseUrl}/api/v11/users/${id}/foods`, {
    method: 'GET',
    params: {},
    'headers': {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error.message);

  return resp;
};

export { logUser, createUser, getFoods };
