const actions = {
  INIT_MYPOST: 'INIT_MYPOST',
  INIT_MYPOST_SUCCESS: 'INIT_MYPOST_SUCCESS',


  initData:  username => ({ type: actions.INIT_MYPOST, username:username }),


};


export default actions;
