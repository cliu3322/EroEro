import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';
import { setProfile, clearProfile, getProfile } from '../../helpers/utility';
import AuthHelper from '../../helpers/authHelper';
import notification from '../../components/notification';

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*({ payload }) {
    console.log('loginRequest',payload)
    const { history, userInfo } = payload;
    const result = yield call(AuthHelper.login, userInfo);

    if (result.token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: result,
        token: result.token,
        username: result.username,
        history
      });
    } else {
      notification('error', result.error || result);
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {

  yield takeEvery(actions.LOGIN_SUCCESS, function*({ payload, history }) {
    console.log('payload',payload)
    yield setProfile(payload);
    //console.log('history',history)
    if (history) {
      history.push('/dashboard');
    }
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearProfile();
    yield put(push('/'));
  });
}

export function* signupRequest() {
  yield takeEvery('SIGNUP_REQUEST', function*({ payload }) {
    const { history, userInfo } = payload;
    const result = yield call(AuthHelper.signup, userInfo);
    console.log('signupRequest')
    if (result.token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: result,
        token: result.token,
        username: result.username,
        history
      });
    } else {
      notification('error', result.error || result);
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* checkAuthorization() {

  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    console.log('checkAuthorization',getProfile())
    const { token } = AuthHelper.checkExpirity(getProfile().idToken);
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: { token },
        username:getProfile().username,
        token,
        profile: 'Profile'
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
    fork(signupRequest)
  ]);
}
