import React, { createContext, useContext, useReducer } from "react";

//PREPARE LE DATA LAYER(LENDROIT OU VA TRANSITER LES DONNEES LORS DU CLICK )
export const StateContext = createContext();

//ENCAPSULE NOTRE APPLICATION COMME LE PROVIDER EN REDUX
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//RECUPERE LES INFORMATIONS DU DATA LAYER
export const useStateValue = () => useContext(StateContext);

//FOCUSE ON HOW WE USE ? YOU DONT NEED TO REMENBER
