import { logUser, createUser, getFoods } from '../API/api';

const checkUser = (user) => async (dispatch) => {
  const payload = await logUser(user);
  dispatch(
    { type: 'LOG-USER', payload },
  );
};

const registerUser = (user) => async (dispatch) => {
  const payload = await createUser(user);
  dispatch(
    { type: 'SIGN-USER', payload },
  );
};

const fetchUserFood = (user) => async (dispatch) => {
  const payload = await getFoods(user);
  dispatch(
    { type: 'FETCH-USER-FOOD', payload },
  );
};

export { checkUser, registerUser, fetchUserFood };
