import { logUser, createUser, getFoods } from '../API/api';

const checkUser = (user) => async (dispatch) => {
  const payload = await logUser(user);
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

const fetchUserFood = (userId) => async (dispatch) => {
  const payload = await getFoods(userId);
  dispatch(
    { type: 'FETCH-USER-FOOD', payload },
  );
};

export { checkUser, registerUser, fetchUserFood };
