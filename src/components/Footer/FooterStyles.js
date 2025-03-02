import styled from "styled-components";

export const Container = styled.section`;
  background-color:rgb(41, 44, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px 20px;
  position: relative; 
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.5px; 
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
  }

  @media(min-width: 500px){
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
  }

  @media(min-width: 800px){
    padding: 30px 40px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  & h5 {
   font-size: 25px;
   font-weight: bold;
   background: linear-gradient(270deg, rgba(246,242,54,1) 0%, rgba(252,70,107,1) 35%, rgba(63,94,251,1) 100%);
   -webkit-background-clip: text; /* Aplica el gradiente al texto */
   color: transparent; /* Hace que el texto sea transparente para que solo se vea el gradiente */
   -webkit-text-stroke: 0.5px black; /* Aplica el borde negro alrededor del texto */
   text-align: center;
  }

  @media(min-width: 800px){
    & h5{
      font-size: 30px;
    }
  }

  & p {
    font-size: 18px;
    color: white;
  }

  @media(min-width: 800px){
    & p{
      font-size: 22px;
    }
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 60px;

  @media(min-width: 450px){
    gap: 90px;
  }

  @media(min-width: 500px){
    flex-direction: column;
    gap: 20px;
  }

  @media(min-width: 600px){
    flex-direction: row;
    gap: 40px;
  }

`;

export const SocialMedia = styled.div`
  display: flex;
  j ustify-content: center;
  align-content: center;
  align-items: center;

  & img{
    width: 45px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  & img:hover{
    transform: scale(1.1);
  }

  @media(min-width: 800px){
    & img{
      width: 55px;;
    }
  }
`;