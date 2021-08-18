import deezer from '../api/deezer';

export const fetchPopular = () => {
  return async (dispatch) => {
    const response = await deezer.get('/playlist/948759923');
    console.log(response.data);

    dispatch({ type: 'FETCH_POPULAR', payload: response.data });
  };
};

export const fetchSearchResults = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: e.target.value } });

    dispatch({ type: 'FETCH_SEARCH', payload: response.data.data });
  };
};

export const deleteSearch = () => {
  return { type: 'DELETE_SEARCH' };
};

export const newSelect = (properties) => {
  return { type: 'NEW_SELECT', payload: properties };
};

export const defineTrackList = (properties) => {
  let trackList;
  if (properties.type === 'playlist') {
    trackList = properties.tracks.data;
  }
  return { type: 'DEFINE_TRACKLIST', payload: trackList };
};

export const showTrackList = (boolean) => {
  return { type: 'SHOW_TRACKLIST', payload: boolean };
};

export const addToFavorites = (song) => {
  return { type: 'ADD_FAVORITE', payload: song };
};
