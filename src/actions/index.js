import { ADD_TO_BASKET } from "./actionTypes";
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
