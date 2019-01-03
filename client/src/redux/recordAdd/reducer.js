import actions from "./actions";

const initState = {
  tab_id:1,
  basic:{}
 };


export default (state = initState, action) => {

  switch (action.type) {
    case actions.ADD_BASIC:
      return {
        ...state,
        basic: action.payload,
      };
    case actions.ADD_BASIC_SUCCESS_RESULT:
      return {
        ...state,
        _id: action._id,

      };
    case actions.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case actions.UPDATE_ADDRESS_SUCCESS_RESULT:
      return {
        ...state,

      };
    case actions.UPDATE_IMAGE_SUCCESS_RESULT:
      return {

      };
    default:
      return state;
  }
};
