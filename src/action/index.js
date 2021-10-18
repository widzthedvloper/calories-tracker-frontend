import { logUser, createUser, getFoods } from '../API/api';

const checkUser = (user) => async (dispatch) => {
  let payload = await logUser(user);
  if (payload === null) {
    payload = { id: null, email: null, foods: [] , error: 'Email not found!!!'};
  }

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

const fetchUserFood = (userId) => async (dispatch) => {
  const payload = await getFoods(userId);
  dispatch(
    { type: 'FETCH-USER-FOOD', payload },
  );
};

export { checkUser, registerUser, fetchUserFood };
