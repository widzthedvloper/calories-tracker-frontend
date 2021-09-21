import { logUser, createUser } from '../API/api';

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

export { checkUser, registerUser };
