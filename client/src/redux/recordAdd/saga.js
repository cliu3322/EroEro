import { all, takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import SuperFetch from '../../helpers/superFetch';

const onPostRequest = async (data) => {
  return await SuperFetch.post('record',data)
}

function* addBasic({payload}) {
  try {
    const result = yield call(
      onPostRequest,
      payload
    );
    if (result._id) {
      yield put(
        actions.basicAddSuccess(
          result._id
        )
      );
    } else {
      yield put(actions.basicAddSuccess(result._id));
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateAddress({payload}) {
  try {
    const result = yield call(
      onPostRequest,
      payload
    );
    if (result._id) {
      yield put(
        actions.addressUpdateSuccess(
          result._id
        )
      );
    } else {
      yield put(actions.basicAddSuccess(result._id));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.ADD_BASIC, addBasic)]);
  yield all([takeEvery(actions.UPDATE_ADDRESS, updateAddress)]);
}
