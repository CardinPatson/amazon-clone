import React from "react";
import styled from "styled-components";
function Product(props) {
  return (
    <Container>
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>25</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
      <button>Add to basket</button>
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
  }
  .product_price {
    margin-top: 5px;
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
