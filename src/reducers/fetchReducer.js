const INITIAL_STATE = {
  popular: {},
  search: {},
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return { ...state, popular: action.payload };
    case 'FETCH_SEARCH':
      return { ...state, search: action.payload };
    case 'DELETE_SEARCH':
      return { ...state, search: {} };
    default:
      return state;
  }
};

export default fetchReducer;
