import { all, takeEvery, call, put } from "redux-saga/effects";
import actions from "./actions";
import SuperFetch from '../../helpers/superFetch';



const onGetCityRequest = async (data) => {
  console.log(data.locationId)
  return await SuperFetch.get('getcityxrecordlist?id='+data.locationId)
};

function* getPapers(payload) {
  try {
    const getResult = yield call(onGetCityRequest,payload);
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
  yield all([takeEvery(actions.INIT_RECORDLIST, getPapers)]);
}
