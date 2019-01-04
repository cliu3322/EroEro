import actions from "./actions";

const initState ={
  recordlist: [],
};

export default function listReducer(state = initState, action) {
  switch (action.type) {
    case actions.UPDATE_PAPERLIST:
      return {
        ...state,
        recordlist:action.recordlist

       };
    default:
      return state;
  }
}
