import React from "react";
import styled from "styled-components";
import { useStateValue } from "./stateProvider";
import { removeFromBasket } from "../actions";

//PEUT ETRE AUSSI ACCESSIBLE PAR LA PROPRIETE PROPS (PROPS.IMAGE) MAIS EN PASSANT UNIQUEMENT PROPS COMME ARG DE LA FONCTION
function ChekoutProduct({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();  // autre facon de lier sans le mapState et le mapDispatch
  
  const handleClick = () => {
    //REMOVE THE BASKET TO THE TABLE*
    dispatch(removeFromBasket(id));
  };
  return (
    <Container>
      <img className="chechoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={handleClick}>Remove From Basket</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  .chechoutProduct_image {
    width: 150px;
    object-fit: contain;
  }
  .checkoutProduct_info {
    padding-left: 20px;

    .checkoutProduct_title {
      font-size: 17px;
      font-weight: 800;
    }
    button {
      border: 1px solid;
      background-color: #f0c14b;
      color: #111;
      border-color: #a88734 #9c7e31 #846a29;
      padding: 3px;
      margin-top: 10px;
    }
    .checkoutProduct_rating {
      display: flex;
    }
  }
`;
export default ChekoutProduct;
