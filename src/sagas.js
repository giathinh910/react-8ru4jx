import { takeEvery, all, put } from 'redux-saga/effects';
import axios from 'axios';
import { setToken, setAuth, actions } from './actions/auth.action';

function* exchangeCodeForToken({ code }) {
  const res = yield axios.get(`http://localhost:3000/api/auth?code=${code}`);
  const { access_token } = res.data;
  if (access_token) {
    yield all([
      put(setToken(access_token)),
      put(setAuth(true)),
    ]);
  } else {
    // TODO: handle error response
    console.log(res);
  }
}

function* getTokenSaga() {
  yield takeEvery(actions.GET_TOKEN, exchangeCodeForToken);
}

export default function* rootSaga() {
  yield all([
    getTokenSaga()
  ])
}
