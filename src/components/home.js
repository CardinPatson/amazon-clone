import React from "react";
import styled from "styled-components";
import Product from "./product";

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
            <Product />
            <Product />
          </HomeRow>
          <HomeRow>
            <Product />
            <Product />
            <Product />
          </HomeRow>
          <HomeRow></HomeRow>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .home {
    background-color: lightgray;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
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
