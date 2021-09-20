const initialState = {
  user: {
    foods: [],
    calories: [],
  },
};

const userReducer = (state = initialState.user, action) => {
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
    default:
      return state;
  }
};

export default userReducer;
