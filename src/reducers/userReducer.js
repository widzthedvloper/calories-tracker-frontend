const initialState = {
  auth_token: null,
  foods: [],
  ingredients: [],
  calories: [],
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-USER-FOOD':
      return {
        ...state,
        foods: action.payload,
      };
    case 'FETCH-USER-CALORIE':
      return {
        ...state,
        calories: action.payload,
      };
    case 'LOG-USER':
      return {
        ...state,
        auth_token: action.payload.auth_token,
      };
    case 'SIGN-USER':
      return {
        ...state,
        auth_token: action.payload.auth_token,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
