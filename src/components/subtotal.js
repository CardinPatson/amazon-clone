import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
function Subtotal(props) {
  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items) : <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed th checkout</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
  .subtotal_gift {
    display: flex;
    align-items: center;
    & > input {
      margin-right: 5px;
    }
  }
  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
export default Subtotal;
