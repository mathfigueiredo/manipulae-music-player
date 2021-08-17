import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';

export default combineReducers({
  form: reducer,
  songs: fetchReducer,
});
