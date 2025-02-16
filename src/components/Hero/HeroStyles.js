import styled, {keyframes} from "styled-components";
import heroimg from "../../../public/hero.png";

/* Animación para saludo */

export const helloAnimation = keyframes`
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(30deg); /* Movimiento hacia un lado */
  }
  100% {
    transform: rotate(10deg); /* Regresa a la posición inicial */
  }
`;

export const Container = styled.section`
  background-image: url(${heroimg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;

  & h1 {
    font-family: "Archivo Black", serif;
    font-weight: 400;
    font-style: normal;;
    font-size: 53px;
    font-weight: bold;
    line-height: 1;
    background: linear-gradient(270deg, rgba(246,242,54,1) 0%, rgba(252,70,107,1) 35%, rgba(63,94,251,1) 100%);
    -webkit-background-clip: text; /* Aplica el gradiente al texto */
    color: transparent; /* Hace que el texto sea transparente para que solo se vea el gradiente */
    -webkit-text-stroke: 0.5px black; /* Aplica el borde negro alrededor del texto */
    text-align: center;
  }

  & p {
    color: white;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    margin-top: 20px;
    -webkit-text-stroke: 0.2px #3f5efb;
    text-align: center
  }

  @media(min-width: 500px){
    padding: 20px 50px;
  }

  @media(min-width: 600px){
    gap: 25px;
    & p{
    font-size: 22px;
    }
    & h1{
    font-size: 60px;
    }
  }

  @media(min-width: 768px){
    padding: 20px 70px;
  }

  @media(min-width: 850px){
    gap: 32px
  }

  @media(min-width: 900px){
    padding: 20px 100px;
  }

  @media(min-width: 1030px){
    padding: 20px 130px;
  }

  @media(min-width: 1400px){
    padding: 20px 200px;
    & p{
    font-size: 25px;
    }
    & h1{
    font-size: 68px;
    }
  }

  @media(min-width: 1600px){
    padding: 20px 300px;
  }

    @media(min-width: 1850px){
    padding: 20px 400px;
  }
  
`;

export const HelloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  & h2 {
   color: white;
   font-size: 25px;
  }

  & img {
    width: 50px; 
    height: auto; 
    animation: ${helloAnimation} 1.5s infinite /* Animación para saludo */
  }

   @media(min-width: 600px){
    & h2{
    font-size: 28px;
    margin-right: 10px;
    }
  }

  @media(min-width: 1400px){
    & h2{
    font-size: 30px;
    }
    & img{
    width: 60px;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30px;

  & a{
  border-radius: 2rem;
  padding: 8px;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 94%, rgba(246,242,54,1) 100%); 
  box-shadow: 0px 0px 1.2px 0.8px rgba(246, 242, 54, 1);
  transition: box-shadow 0.3s ease, transform 0.4s ease; /* Color de borde gradualmente */
  }

  & a:hover{
  box-shadow: 0px 0px 8px 1px rgba(246, 242, 54, 1); 
  }

  & a:active {
  transform: scale(1.1);  /* Aumenta el tamaño al hacer click */
  }
  
  & img{
  width: 40px;
  height: auto;
  }

  @media(min-width: 600px){
    margin-top: 40px;
    gap: 70px;
    & a{
    padding: 12px;
    }
    & img{
    width: 45px;
    }
  }

  @media(min-width: 1400px){
    margin-top: 55px;
    & a{
    padding: 18px;
    border-radius: 2.5rem;
    }
    & img{
    width: 50px;
    }
  }
`;

export const CurriculumContainer = styled.div`
  margin-top: 25px;
  & button{
  cursor: pointer;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(198,77,148,1) 79%, rgba(199,81,146,1) 89%);  
  box-shadow: 0px 0px 1.2px 0.8px rgba(246, 242, 54, 1);
  width: 200px;
  height: 30px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 0.2rem;
  transition: box-shadow 0.3s ease, transform 0.4s ease;
  }
  
  & button:hover{
  box-shadow: 0px 0px 8px 1px rgba(246, 242, 54, 1); 
  }

  & button:active {
  transform: scale(1.1); 
  }

  @media(min-width: 600px){
    margin-top: 30px;
    & button{
    width: 250px;
    height: 35px;
    }
  }

    @media(min-width: 1400px){
    & button{
    width: 280px;
    height: 45px;
    font-size: 23px;
    }
  }
`;
