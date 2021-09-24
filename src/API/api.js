/* eslint-disable prefer-template */
/* eslint-disable quote-props */

const baseUrl = 'https://obscure-ridge-52411.herokuapp.com/api/v1';

const logUser = async (user) => {
  try {
    const response = await fetch(`${baseUrl}/log`, {
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
    const response = await fetch(`${baseUrl}/users`, {
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
  const resp = fetch(`${baseUrl}/users/${id}/foods`, {
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
