import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header(props) {
  return (
    <Container>
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
        {/* LOGO */}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
          <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Returns </span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <div className="header_optionTwo header_basketCount">0</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: sticky; //LELEMENT BOUGE AVEC LE SCROLL ET QUAND IL ATTEINT LE TOP IL CALE AU DESSUS
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #131921; //    AMAZON BACKGROUND COLOR
  .header_logo {
    width: 100px;
    object-fit: contain; // MAINTIENT EST DIMENSIONNE POUR MAINTENIR SES PROPORTIONS TOUS EN ETATNT AJUSTER A LA BOITE SA TAILLE REELE EST AJUSTER EN UTILISANT LA LARGEUR ET LA LONGUEUR DU CONTENUER
    margin: 0 20px;
    margin-top: 18px;
  }
  .header_search {
    /* position: relative; */
    /* border: solid red 1px; */
    display: flex;
    flex: 1;
    align-items: center;
    /* border-radius: 24px; */
    .header_searchInput {
      width: 100%;
      height: 12px;
      border: none;
      padding: 10px;
    }
    .header_searchIcon {
      /* position: absolute; */
      padding: 5px;
      background-color: #cd9042;
      height: 22px !important;
    }
  }
  .header_nav {
    display: flex;
    justify-content: space-evenly; //LES ELEMENTS SONT REPARTIS EQUITABLEMENT ET ILS SONT SEPARE PAR LE MEME ESPACE
    .header_option {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-right: 10px;
      color: white;
      .header_optionOne {
        font-size: 12px;
      }
      .header_optionTwo {
        font-weight: 800;
        font-size: 14px;
      }
    }
    .header_optionBasket {
      display: flex;
      align-items: center;
      color: white;
      .header_basketCount {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;

//UTILISEZ MATERIAL UI ICON POUR LES ICONES SUR REACT npm install @material-ui/icons AND npm install @material-ui/core
export default Header;
