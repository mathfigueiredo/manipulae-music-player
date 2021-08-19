import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';
import defineTrackListReducer from './deFineTrackListReducer';
import showTrackListReducer from './showTrackListReducer';
import favoritesReducer from './favoritesReducer';
import changeCurrentSongReducer from './changeCurrentSongReducer';
import playPauseReducer from './playPauseReducer';

export default combineReducers({
  form: reducer,
  currentSong: changeCurrentSongReducer,
  playPause: playPauseReducer,
  songs: fetchReducer,
  favorites: favoritesReducer,
  selected: selectReducer,
  trackList: defineTrackListReducer,
  showTrackList: showTrackListReducer,
});
