import { all, takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import SuperFetch from '../../helpers/superFetch';

const onPostRequest = async (data) => {
  return await SuperFetch.post('reocrd/basic',data)
}

function* addBasic({payload}) {
  console.log('saga')
  const { data } = payload;
  try {
    const addResult = yield call(
      onPostRequest,
      data
    );
    console.log(addResult)
    // if (addResult) {
    //   console.log(addResult)
    // } else {
    //   yield put(actions.addpaperSuccess());
    // }
  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.ADD_BASIC, addBasic)]);
}
