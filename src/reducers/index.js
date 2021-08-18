import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';
import defineTrackListReducer from './deFineTrackListReducer';
import showTrackListReducer from './showTrackListReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  form: reducer,
  songs: fetchReducer,
  favorites: favoritesReducer,
  selected: selectReducer,
  trackList: defineTrackListReducer,
  showTrackList: showTrackListReducer,
});
