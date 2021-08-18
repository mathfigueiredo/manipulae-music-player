const INITIAL_STATE = {
  showList: {},
  favorites: {},
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return { ...state, showList: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
