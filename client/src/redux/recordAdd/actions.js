const recordActions = {

  UPDATE_ADDRESS: 'POSTAD_UPDATE_ADDRESS',
  ADD_BASIC: 'RECORDADD_ADD_BASIC',
  ADD_BASIC_SUCCESS_RESULT: 'RECORDADBASIC_SUCCESS_RESULT',
  UPDATE_ADDRESS_SUCCESS_RESULT:'RECORD_UPDATE_ADDRESS_SUCCESS_RESULT',
  UPDATE_IMAGE_SUCCESS_RESULT: 'RECORD_UPDATE_IMAGE_SUCCESS_RESULT',

  updateAddress: address => ({
    type: recordActions.UPDATE_ADDRESS,
    payload: address
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
  }),

  addressUpdateSuccess: (_id) => ({
    type: recordActions.UPDATE_ADDRESS_SUCCESS_RESULT,
    _id:_id
  }),

  addressImageSuccess: (_id) => ({
    type: recordActions.UPDATE_IMAGE_SUCCESS_RESULT,
    _id:_id
  })
};
export default recordActions;
