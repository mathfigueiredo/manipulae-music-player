import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';

export default combineReducers({
  form: reducer,
  songs: fetchReducer,
  selected: selectReducer,
});
