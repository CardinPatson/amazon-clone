import React from "react";
import styled from "styled-components";
import { useStateValue } from "./stateProvider";
import Subtotal from "./subtotal";
import ChekoutProduct from "./checkoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <Container>
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>
            Hello, <br /> {user?.email}
          </h3>
          <h2 className="checkout_title">Your shopping basket</h2>
          {console.log(basket)}
          {basket.map((i) => (
            <ChekoutProduct
              id={i.id}
              image={i.image}
              title={i.title}
              price={i.price}
              rating={i.rating}
            />
          ))}
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
