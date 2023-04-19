import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reduser";
const ProductContext = createContext();

export const UseProductContext = () => useContext(ProductContext);


function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(() => reducer, INITIAL_STATE);
  return (
    <ProductContext.Provider value={INITIAL_STATE}>{children}</ProductContext.Provider>
  );
}

export default ProductContextProvider;
