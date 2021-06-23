import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./actionTypes";
export const addToBasketAction = (id, title, image, price, rating) => {
  return {
    type: ADD_TO_BASKET,
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  };
};

export const removeFromBasket = (id) => {
  return {
    type: REMOVE_FROM_BASKET,
    id: id,
  };
};
export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user,
  };
};
