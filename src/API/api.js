const logUser = async (username, password) => {
  try {
    const response = await fetch('https://fierce-escarpment-48376.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(username, password),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

export default logUser;
