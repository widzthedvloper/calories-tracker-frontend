import { logUser, createUser, getFoods } from '../API/api';

const checkUser = (user) => async (dispatch) => {
  const payload = await logUser(user);
  localStorage.setItem('jwt_token', `Bearer ${payload.auth_token}`);
  dispatch(
    { type: 'LOG-USER', payload },
  );
};

const registerUser = (user) => async (dispatch) => {
  const payload = await createUser(user);
  localStorage.setItem('jwt_token', `Bearer ${payload.auth_token}`);
  dispatch(
    { type: 'SIGN-USER', payload },
  );
};

const fetchUserFood = (authToken) => async (dispatch) => {
  const payload = await getFoods(authToken);
  dispatch(
    { type: 'FETCH-USER-FOOD', payload },
  );
};

export { checkUser, registerUser, fetchUserFood };
