// import { takeEvery, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
// import { FETCH_ACCESS_TOKEN, saveAccessTokens } from './Actions';
import { FETCH_ACCESS_TOKEN } from './Actions';
import { fetchAccessToken } from './Fetch';

function* processTokens(action){
  const tokens = yield fetchAccessToken(action.payload);
  console.log('tokens: ', tokens);
  debugger;
  // yield put(saveAccessTokens(tokens));
}

function* mySaga(){
  yield takeEvery(FETCH_ACCESS_TOKEN, processTokens);
}

export default mySaga;
