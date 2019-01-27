import { all, takeEvery, call, put } from "redux-saga/effects";
import actions from "./actions";
import SuperFetch from '../../helpers/superFetch';



const onGetRequest = async (data) => {
  console.log(data)
  return await SuperFetch.get('getmypost?username='+data.username)
};

function* getmypost(payload) {
  try {
    const getResult = yield call(onGetRequest,payload);
    console.log('result1',getResult);
    yield put({
      type: actions.INIT_MYPOST_SUCCESS,
      mypost:getResult
    });

  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.INIT_MYPOST, getmypost)]);
}
