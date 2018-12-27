import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import fake from './fake';
import fakeinitdata from '../../containers/Ecommerce/cart/config';
import SuperFetch from '../../helpers/superFetch';

const getCities =  async () => {
     const response =  await SuperFetch.get('getCXGCities').then(res => {return res});
     return response;
  };


export function* changedCard() {
  yield takeEvery(actions.CHANGE_CARDS, function*() {});
}
export function* initData() {
  console.log('saga init')
  let fakeData = fakeinitdata;
  if (fakeinitdata.productQuantity.length === 0) {
    fakeData = fake;
  }
  yield put({
    type: actions.INIT_DATA,
    payload: fakeData
  });
}
export function* updateData({ products, productQuantity }) {
  localStorage.setItem('cartProductQuantity', JSON.stringify(productQuantity));
  localStorage.setItem('cartProducts', JSON.stringify(products));
  yield put({
    type: actions.UPDATE_DATA,
    products,
    productQuantity
  });
}
export default function*() {
  yield all([
    takeEvery(actions.INIT_DATA_SAGA, initData),
    takeEvery(actions.UPDATE_DATA_SAGA, updateData)
  ]);
}
