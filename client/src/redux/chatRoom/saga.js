import { all, takeEvery, call, put } from 'redux-saga/effects';
import conversationActions from './actions/createConversation';
import SuperFetch from '../../helpers/superFetch';

const onPostRequest = async (data) => {
  console.log(data)
  return await SuperFetch.post('conversations',data)
}


function* createConversation({payload}) {
  try {
    const result = yield call(
      onPostRequest,
      payload
    );
    if (result._id) {
      // yield put(
      //   actions.basicAddSuccess(
      //     result._id
      //   )
      //);
    } else {

      // yield put(actions.basicAddSuccess(result._id));
    }
  } catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([takeEvery(conversationActions.CREATE_CONVERSATION, createConversation)]);
}
