const changeVolumeReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_VOLUME':
      return action.payload;
    default:
      return state;
  }
};
export default changeVolumeReducer;
