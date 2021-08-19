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

export const removeFromFavorites = (song) => {
  return { type: 'REMOVE_FAVORITE', payload: song };
};

export const changeCurrentSong = (song) => {
  return { type: 'CHANGE_CURRENT_SONG', payload: song };
};

export const nowPlaying = () => {
  return { type: 'PLAY' };
};

export const nowPaused = () => {
  return { type: 'PAUSE' };
};

export const updateTime = (array) => {
  return { type: 'UPDATE_TIME', payload: array };
};

export const generateRGB = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  while (r <= 60 && g <= 60 && b <= 60) {
    r = Math.trunc(Math.random() * 255) + 1;
    g = Math.trunc(Math.random() * 255) + 1;
    b = Math.trunc(Math.random() * 255) + 1;
  }
  return `rgb(${r},${g},${b})`;
};

export const changeColor = () => {
  const color = generateRGB();
  return { type: 'CHANGE_COLOR', payload: color };
};
