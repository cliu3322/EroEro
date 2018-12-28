import clone from "clone";
import actions from "./actions";



const initState =[];
export default (state = initState, action) => {
  switch (action.type) {
    case actions.INIT_DATA:
      return {
        ...state,
        loadingInitData: true,
        productQuantity: action.payload.productQuantity,
        products: action.payload.products
      };
    case actions.CHANGE_VIEW:
      return {
        ...state,
        view: action.view
      };
    case actions.VIEW_TOPBAR_CART:
      return {
        ...state,
        viewTopbarCart: action.viewTopbarCart
      };
    case actions.UPDATE_DATA:
      return {
        ...state,
        products: clone(action.products),
        productQuantity: clone(action.productQuantity)
      };
    case actions.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.address
      };
    default:
      return state;
  }
};
