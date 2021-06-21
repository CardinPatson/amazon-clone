import { ADD_TO_BASKET } from "../actions/actionTypes";
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item], //AJOUTE A CHAQUE FOIS LES ITEMS DANS LE TABLEAU BASKET LORS DU CLICK
      };
    default:
      return state;
  }
};
