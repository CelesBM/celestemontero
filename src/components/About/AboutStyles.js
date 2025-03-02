import styled, { keyframes } from "styled-components";

export const writeAnimation = keyframes`
   0% { width: 0; }
   100% { width: 100%; }
`;

export const cursorAnimation = keyframes`
   0% { opacity: 0; }
   50% { opacity: 1; }
   100% { opacity: 0; }
`;

export const lightAnimation = keyframes`
  0% { box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.6), 0 0 2px 1px rgba(255, 255, 255, 0.3); }
  25% { box-shadow: 2px 0 2px 1px rgba(255, 255, 255, 0.6), 2px 0 2px 1px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 1px 2px 2px 1px rgba(255, 255, 255, 0.6), 2px 2px 2px 1px rgba(255, 255, 255, 0.3); }
  75% { box-shadow: 0 2px 2px 1px rgba(255, 255, 255, 0.6), 0 2px 2px 1px rgba(255, 255, 255, 0.3); }
  100% { box-shadow: -2px 2px 2px 1px rgba(255, 255, 255, 0.6), -2px 2px 2px 1px rgba(255, 255, 255, 0.3); }
`;

export const Container = styled.section`;
  background-color:rgb(41, 44, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 50px 20px;
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

  @media(min-width: 800px){
    gap: 35px;
  }

  @media(min-width: 900px){
    padding: 60px 50px;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
  color: white;

  @media(min-width: 800px){
    gap: 30px;
  }

  & h3 {
    color: white;
    font-weight: 800;
    font-style: normal;
    font-size: 25px;
    margin-bottom: 25px;
    position: relative;
    overflow: hidden; /* Esconde el texto extra */
    white-space: nowrap; 
    width: 0;
    padding-right: 5px;
    animation: ${writeAnimation} 4s steps(40) 1s forwards; 
  }

  & h3::after {
    content: '';
    display: inline-block;
    width: 0.1em;
    height: 1em;
    background-color: white;
    animation: ${cursorAnimation} 0.8s step-end infinite; /* Cursor titilante */
    margin-left: 5px; /* Espacio adicional entre el texto y el cursor */
  }

  @media(min-width: 800px){
    & h3 {
      font-size: 30px;
    }
  }

  & p{
   font-size: 18px;
   line-height: 1.4;
   text-align: center;
  }

  @media(min-width: 800px){
    & p {
      font-size: 20px;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px; 
  margin-top: 20px;

  @media(min-width: 1075px){
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 100px;
  }

  & img {
    border-radius: 50rem;
    width: 250px;
    animation: ${lightAnimation} 1.5s infinite linear;
  }

  @media(min-width: 1075px){
    & img {
      width: 300px;
    }
  }

  & p {
    color: white;
    font-size: 18px;
    line-height: 1.4;
    text-align: justify;
  }

  @media(min-width: 800px){
    & p {
      font-size: 20px;
    }
  }

  @media(min-width: 1075px){
    & p {
      width: 60%;
      padding-left: 50px;
      border-left: solid 3px rgb(68, 73, 97);
    }
  }

  & span{
    font-size: 19px;
    font-weight: bold;
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
    -webkit-background-clip: text; /* Aplica el gradiente al texto */
    color: transparent; /* Hace que el texto sea transparente para que solo se vea el gradiente */
    -webkit-text-stroke: 0.1px white; /* Aplica el borde negro alrededor del texto */
  }

  @media(min-width: 800px){
    & span {
      font-size: 21px;
    }
  }
`;