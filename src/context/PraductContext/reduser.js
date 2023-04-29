import { arrivals } from "../../Components/ulits/New Arrivals";
import { products } from "../../Components/ulits/data";
import { icon } from "../../Components/ulits/icon";
import { shoes } from "../../Components/ulits/shoes";
import { watches } from "../../Components/ulits/watches";

const INITIAL_STATE = {
  products,
  icon,
  arrivals,
  watches,
  shoes,
  cart: [],
  wishlist:[]
};

const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  LIKED: "LIKED",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const isExist = state.cart.filter(
        (v) => v.id === action.payload.praduct.id
      ).length;
      if (isExist > 0) {
        let res = state.cart.map((v) =>
          v.id === action.payload.praduct.id
            ? { ...v, quantity: v.quantity + 1 }
            : v
        );
        return { ...state, cart: res };
      } else {
        let res = { ...state, cart: [...state.cart, action.payload.praduct] };
        return res;
      }
    }
    case ACTION_TYPES.INCREMENT_QUANTITY: {
      const res = state.cart.map((v) =>
        v.id === action.payload.praduct.id
          ? { ...v, quantity: v.quantity + 1 }
          : v
      );
      return { ...state, cart: res };
    }
    case ACTION_TYPES.DECREMENT_QUANTITY: {
      if (action.payload.praduct.quantity > 1) {
        const res = state.cart.map((v) =>
          v.id === action.payload.praduct.id
            ? { ...v, quantity: v.quantity - 1 }
            : v
        );
        return { ...state, cart: res };
      } else {
        let res = state.cart.filter((v) => v.id !== action.payload.praduct.id);
        return { ...state, cart: res };
      }
    }
    case ACTION_TYPES.LIKED: {
     const res=[...state.wishlist ,{...action.payload.praduct, liked:!action.payload.praduct.liked}]
     return  {...state, wishlist:res}
    }
    default:
      return state;
  }
}

export { INITIAL_STATE, reducer, ACTION_TYPES };
