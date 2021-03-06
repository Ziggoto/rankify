import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { Map } from 'immutable';

import { SET_TOP_ARTIST_ACTION, SET_TIME_RANGE_ACTION } from './Actions';

const userState = Map({});

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_TIME_RANGE_ACTION:
      return state.set('timeRange', action.payload);
    case SET_TOP_ARTIST_ACTION:
      return state.set('topArtists', action.payload);
    default:
      return state;
  }
};

export default (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer
});
