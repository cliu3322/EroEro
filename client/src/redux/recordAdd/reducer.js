import actions from "./actions";

const initState = {
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
    default:
      return state;
  }
};
