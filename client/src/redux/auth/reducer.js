import actions from './actions';

const initState = { idToken: null, username: '' };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      console.log('action',action)
      return { ...state, token: action.token };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
