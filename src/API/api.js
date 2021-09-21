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

export { logUser, createUser };
