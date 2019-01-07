
const conversationActions = {

  CREATE_CONVERSATION: 'CREATE_CONVERSATION',


  createConversation: friendId => {

    return (dispatch, getState) => {
      dispatch({
        type: conversationActions.CREATE_CONVERSATION,
        payload: friendId
      });
    };
  },
};
export default conversationActions;
