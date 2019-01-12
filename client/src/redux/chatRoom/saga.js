import { all, takeEvery, call, put } from 'redux-saga/effects';
import conversationActions from './actions/createConversation';
import SuperFetch from '../../helpers/superFetch';

const onPostRequest = async (data) => {
  return await SuperFetch.post('conversations',data)
}


function* createConversation({payload}) {
  try {
    const result = yield call(
      onPostRequest,
      payload
    );
    console.log(result)
    if (result) {
      yield put(
        conversationActions.createConversationSuccess(result)
      );
    } else {


    }
  } catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  yield all([takeEvery(conversationActions.CREATE_CONVERSATION, createConversation)]);
}
