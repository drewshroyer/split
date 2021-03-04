import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
   const [state] = useReducer(AppReducer, initialState)

return (<GlobalContext.Provider value={{
    transactions: state.transactions,

  }}>
    {children}
  </GlobalContext.Provider>);
}