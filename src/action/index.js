import logUser from '../API/api';

const checkUser = (user) => async (dispatch) => {
  const payload = await logUser(user);
  dispatch(
    { type: 'LOG-USER', payload },
  );
};

export default checkUser;
