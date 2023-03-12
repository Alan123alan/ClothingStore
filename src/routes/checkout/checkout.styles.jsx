import styled from "styled-components";

export const CheckoutContainer = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  `;
  
export const CheckoutHeader = styled.div`
  text-transform: capitalize;
  width: 20%;
  &:last-child {
    width: 10%;
  }
`;

export const TotalContainer = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;





export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemDetails = styled.span`
  display:flex;
  width: 20%;
  justify-content:center;
`;

export const CheckoutItemQuantityContainer = styled.span`
  display: flex;
  width: 20%;
  justify-content: center;
`;

export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantity = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
  display:flex;
  width: 20%;
  justify-content:center;
`;

// .checkout-container {
//     .checkout-header-container {
//       .checkout-header {
//       }
//     }  
//     .total {
//     }
// }

// .checkout-item-container {


//   .image-container {
   

//     img {
//     }
//   }
//   .name,
//   .quantity,
//   .price {

//   }

//   .quantity {

//   }

//   .remove-button {
//   }
// }
  
  