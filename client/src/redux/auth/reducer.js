import actions from './actions';
import AuthHelper from '../../helpers/authHelper';

const initState = { idToken: null, username:'' };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, idToken: action.token, username: AuthHelper.checkUsername(action.token)};
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
