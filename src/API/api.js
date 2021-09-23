/* eslint-disable quote-props */
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
    const response = await fetch('https://fierce-escarpment-48376.herokuapp.com/signup', {
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

const getFoods = async (user) => {
  const resp = fetch('https://fierce-escarpment-48376.herokuapp.com/foods', {
    headers: {
      'alg': 'HS256',
      'typ': 'JWT',
      'Authorization': `Bearer ${user.Authorization}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data.foods)
    .catch((error) => error.message);

  return resp;
};

export { logUser, createUser, getFoods };
