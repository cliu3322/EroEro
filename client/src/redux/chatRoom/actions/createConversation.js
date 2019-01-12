
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


  createConversationSuccess : conversation => ({
    type: 'CREATE_CONVERSATION_SUCCESS',
    conversation,
  }),
};
export default conversationActions;
