import actions from "./actions";

const initState = {
  cities : [],
 };


export default (state = initState, action) => {
  switch (action.type) {
    case actions.INIT_CITIES:

      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};
