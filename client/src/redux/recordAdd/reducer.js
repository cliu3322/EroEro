import actions from "./actions";

const initState = {
  tab_id:1,
  basic:{}
 };


export default (state = initState, action) => {
  //console.log(action)
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
      tab_id:2
    };
    default:
      return state;
  }
};
