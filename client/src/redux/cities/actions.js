const citiesActions = {
  INIT_CITIES: 'INIT_CITIES',
  INIT_CITIES_SAGA: 'INIT_CITIES_SAGA',


  initCities: () => ({ type: citiesActions.INIT_CITIES_SAGA }),
};
export default citiesActions;
