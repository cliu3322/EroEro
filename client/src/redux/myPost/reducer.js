import actions from "./actions";

const initState ={
  mypost: [],
};

export default function listReducer(state = initState, action) {
  switch (action.type) {
    case actions.INIT_MYPOST_SUCCESS:
      return {
        ...state,
        mypost:action.mypost

       };
    default:
      return state;
  }
}
