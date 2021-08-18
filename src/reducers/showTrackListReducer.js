const showTrackList = (state = { show: false }, action) => {
  switch (action.type) {
    case 'SHOW_TRACKLIST':
      return { ...state, show: action.payload };
    default:
      return state;
  }
};

export default showTrackList;
