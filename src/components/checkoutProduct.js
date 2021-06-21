import React from "react";
import styled from "styled-components";

function ChekoutProduct(id, image, title, price, rating) {
  return (
    <Container>
      <img src={image} className="chechoutProduct_image" />
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
        <button>Rmove From Basket</button>
      </div>
    </Container>
  );
}

const Container = styled.div``;
export default ChekoutProduct;
