import React from "react";
import styled from "styled-components";
import Subtotal from "./subtotal";

function Checkout(props) {
  return (
    <Container>
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: white;
  height: max-content;
  padding: 20px;
  .checkout_left {
    .checkout_ad {
      width: 100%;
      margin-bottom: 10px;
    }
    .checkout_title {
      margin-right: 10px;
      padding: 10px;
      border-bottom: 1px solid lightgray;
    }
  }
`;
export default Checkout;
