import { all, takeEvery, call, put } from "redux-saga/effects";
import actions from "./actions";
import axios from "axios";
import SuperFetch from '../../helpers/superFetch';

const onGetRequest1 = async (data) => {
  return await axios.get('http://localhost:3000/api/getrecordlist',{
    params: {
      ID: 12345
    }
  });
};

const onGetRequest = async (data) => {
  return  await SuperFetch.get('getrecordlist?id=1234')
};

function* getPapers(payload) {;

  try {
    const getResult = yield call(onGetRequest,payload);
    //console.log('result1',getResult);
    yield put({
      type: actions.UPDATE_PAPERLIST,
      recordlist:getResult
    });

  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.GET_PAPERLIST, getPapers)]);
}
