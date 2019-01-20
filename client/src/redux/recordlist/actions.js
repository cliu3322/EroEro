const actions = {
  INIT_RECORDLIST: 'INIT_RECORDLIST',
  GET_PAPERLIST: 'GET_PAPERLIST',
  UPDATE_PAPERLIST: 'UPDATE_PAPERLIST',


  initData:  locationId => ({ type: actions.INIT_RECORDLIST, locationId:locationId.id }),


};


export default actions;
