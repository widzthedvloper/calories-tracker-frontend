const initialState = {
  id: null,
  email: null,
  foods: [],
  ingredients: [],
  calories: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-USER-FOOD':
      return {
        ...state,
        foods: action.payload,
      };
    case 'LOG-USER':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };
    case 'SIGN-USER':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
