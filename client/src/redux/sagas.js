import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import ecommerceSaga from './ecommerce/saga';
import cardsSagas from './card/saga';
import recordAddSagas from './recordAdd/saga';
import recordListSagas from './recordlist/saga';
import chatRoomSagas from './chatRoom/saga';
import citiesSagas from './cities/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    ecommerceSaga(),
    cardsSagas(),
    recordAddSagas(),
    recordListSagas(),
    chatRoomSagas(),
    citiesSagas()
  ]);
}
