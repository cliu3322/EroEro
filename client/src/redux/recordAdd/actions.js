const recordActions = {

  UPDATE_ADDRESS: 'POSTAD_UPDATE_ADDRESS',
  ADD_BASIC: 'RECORDADD_ADD_BASIC',

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
  }
};
export default recordActions;
