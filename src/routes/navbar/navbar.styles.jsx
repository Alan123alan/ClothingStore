import styled from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as ShoppingBagSvg} from "../../assets/shopping-bag.svg";
import {ReactComponent as Logo} from "../../assets/zarape.svg";


export const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const NavbarLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarLogo = styled(Logo)`
  height: 50%;
  width: 50px;
`;

export const NavbarLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const ShoppingBagContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingBagIcon = styled(ShoppingBagSvg)`
  width: 24px;
  height: 24px;
`;

export const ShoppingBagItemsContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemName = styled.span`
  font-size: 16px;
`;

export const CartIemPrice = styled.span`
  font-size: 16px;
`;

// .navbar-container {

  
//     .logo-container {


//       .logo{
//           height: 50px;
//           width: 50px;
//       }
//     }
  
//     .links-container {

  
//       .link {

//       }
//     }
//   }

// .shopping-bag-container {


//   .shopping-bag-icon {

//   }

//   .shopping-bag-items {

//   }
// }

// .cart-dropdown-container {


//   .empty-message {
//   }

//   .cart-items {

//   }

//   button {
//     margin-top: auto;
//   }
// }

// .cart-item-container {


//   img {

//   }

//   .item-details {


//     .name {
      
//     }
//   }
// }


  