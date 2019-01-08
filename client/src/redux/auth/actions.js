const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: payload => ({
    type: actions.LOGIN_REQUEST,
    payload
  }),
  logout: () => ({
    type: actions.LOGOUT
  }),
  signup: payload => ({
    type: actions.SIGNUP_REQUEST,
    payload
  }),
};
export default actions;
