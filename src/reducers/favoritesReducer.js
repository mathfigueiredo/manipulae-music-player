const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter((element) => element !== action.payload);
    default:
      return state;
  }
};
export default favoritesReducer;
