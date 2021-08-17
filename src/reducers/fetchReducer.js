const INITIAL_STATE = {
  popular: {},
  search: {},
  favorites: {},
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      console.log(action.payload);
      return { ...state, popular: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
