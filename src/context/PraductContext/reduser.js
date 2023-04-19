import { products } from "../../Components/ulits/data";

const INITIAL_STATE = {
    products,
  };
  const ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
  };
  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.ADD_TO_CART: {
        return state;
      }
      default:
        return state;
    }
  }

export {INITIAL_STATE,reducer,ACTION_TYPES}