const initialState = {
  userOauth: null,
  foods: [],
  calories: [],
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
        userOauth: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
