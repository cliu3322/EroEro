import { all, takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import SuperFetch from '../../helpers/superFetch';

const onGetRequest = async () => {
  return await SuperFetch.get('getCXGCities');
}

function* initData() {
  try {
    const result = yield call(
      onGetRequest
    );
    result.allcities.sort(function(a, b){return b.children.length - a.children.length});
    result.allcities.forEach((country,i) => {
      country.children.sort((a,b) =>{return a.label.localeCompare(b.label)})
      country.children.forEach((state,j) =>{
        state.children.sort((a,b) =>{return a.label.localeCompare(b.label)})
      })
    })

    if (result) {
      yield put({
        type: actions.INIT_CITIES,
        payload: result.allcities
      });
    }
  } catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([takeEvery(actions.INIT_CITIES_SAGA, initData)]);
}
