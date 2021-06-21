import React from "react";
import styled from "styled-components";
import { addToBasketAction } from "../actions";
import { useStateValue } from "./stateProvider";
function Product({ id, title, image, price, rating }) {
  //NOUS PERMET DUTILISER LETATE DE BASKET
  const [{ basket }, dispatch] = useStateValue();

  console.log("the basket >>>>", basket);
  const addToBasket = () => {
    //dispatch(envoie) l'action au datalayer (COMME UN PISTOLET IL NOUS PERMET DE TIRER LES DONNEES DANS LE DATALAYER)
    dispatch(addToBasketAction(id, title, image, price, rating)); //envoie de l'action au reducer
  };
  return (
    <Container>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {/* Array(size).fill() cree un array vide de taille 5 */}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  margin: 10px;
  padding: 20px;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  width: 100%;
  & > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain; //regle la taille de l'image par rapport a son conteneur
    margin-bottom: 15px;
  }
  .product_info {
    height: 100px;
    margin-bottom: 15px;

    .product_price {
      margin-top: 5px;
    }
    .product_rating {
      display: flex;
    }
  }

  & > button {
    border: 1px solid;
    background-color: #f0c14b;
    color: #111;
    border-color: #a88734 #9c7e31 #846a29;
    padding: 3px;
    margin-top: 10px;
  }
`;
export default Product;
