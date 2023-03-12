import styled from "styled-components";
import Button from "../../components/button/button.component";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardFooter = styled.footer`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const ProductCardName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductCardPrice = styled.span`
  width: 10%;
`;


// .products-container{
    
// }

// .product-card-container {
    
  
//     img {

//     }
  
//     button {

//     }
  

  
//     .footer {

  
//       .name {
//       }
  
//       .price {
//       }
//     }
//   }
  