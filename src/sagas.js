import { takeEvery, all, put } from 'redux-saga/effects';
import axios from 'axios';
import { setToken } from './actions/auth';

function* exchangeCodeForToken({ code }) {
  const res = yield axios.get(`http://localhost:3000/api/auth?code=${code}`);
  const { access_token } = res.data;
  if (access_token) {
    yield put(setToken(access_token));
  } else {
    console.log(res)
  }
}

function* getTokenSaga() {
  yield takeEvery('GET_TOKEN', exchangeCodeForToken);
}

export default function* rootSaga() {
  yield all([
    getTokenSaga()
  ])
}
