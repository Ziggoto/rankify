import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { Map } from 'immutable';
import { SAVE_SPOTIFY_CODE_ACTION } from './Actions';

const configState = Map({});

const configReducer = (state = configState, action) => {
  switch (action.type) {
    // case 'CONNECT_SPOTIFY_ACTION': {
    //   return state.set('bar', 'Connecting')
    // }
    case SAVE_SPOTIFY_CODE_ACTION:
      return state.set('code', action.payload);
    default:
      return state;
  }
};

export default (history) => combineReducers({
  router: connectRouter(history),
  config: configReducer
});
