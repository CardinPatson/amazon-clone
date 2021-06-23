import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_USER,
} from "../actions/actionTypes";
export const initialState = {
  basket: [],
  user: null,
};

//CLACULE LE TOTAL DES BASKET
export const getTotalBasket = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item], //AJOUTE A CHAQUE FOIS LES ITEMS DANS LE TABLEAU BASKET LORS DU CLICK
      };
    case REMOVE_FROM_BASKET:
      //rechercher l'index du premier correspondant a lid
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove ");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

//AUTRE FACON DE RETIRER LES ITEMS AVEC MAIS RETIT TOUS LES ID CORRESPONDANT MEME CEUX DUPLIQUE
/*
return {
        ...state,
        basket: state.basket.filter((item) => item.id != action.id),
      };
*/
