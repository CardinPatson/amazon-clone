import React from "react";
import styled from "styled-components";
import Product from "./product";
import { Redirect } from "react-router";

const Home = (props) => {
  return (
    <Container>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />

          <HomeRow>
            <Product
              id="12321341"
              title="The Lean Startup : How constant innovation Creates Radically Successful Business Paperback "
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </HomeRow>
          <HomeRow>
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </HomeRow>
          <HomeRow>
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </HomeRow>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  .home {
    display: flex;
    justify-content: center;

    .home_container {
      .home_image {
        /* border: solid red 1px; */
        width: 100%;
        z-index: -1;
        margin-bottom: -150px; //pour ecrire dessus l'image a partir de la 150px du bas
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        ); //pour avoir un effet fade vers le bas
      }
    }
  }
`;

const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;
export default Home;
