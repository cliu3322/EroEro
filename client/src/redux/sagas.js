import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import ecommerceSaga from './ecommerce/saga';
import cardsSagas from './card/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    ecommerceSaga(),
    cardsSagas()
  ]);
}
