const recordActions = {

  UPDATE_ADDRESS: 'POSTAD_UPDATE_ADDRESS',
  ADD_BASIC: 'RECORDADD_ADD_BASIC',
  ADD_BASIC_SUCCESS_RESULT: 'RECORDADBASIC_SUCCESS_RESULT',

  updateAddress: address => ({
    type: recordActions.UPDATE_ADDRESS,
    address
  }),
  addBasic: basic => {

    return (dispatch, getState) => {
      dispatch({
        type: recordActions.ADD_BASIC,
        payload: basic
      });
    };
  },
  basicAddSuccess: (_id) => ({
    type: recordActions.ADD_BASIC_SUCCESS_RESULT,
    _id:_id
  })
};
export default recordActions;
