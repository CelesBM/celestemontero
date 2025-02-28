import styled, { keyframes } from "styled-components";
import heroimg from "/hero.png";

/* Animación para texto */
export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

/* Animación para movimiento desde abajo */
export const slideUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(100px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

/* Animación para saludo */
export const helloAnimation = keyframes`
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(10deg);
  }
`;

/* Animación para flecha */
const moveDown = keyframes`
  0% {
    transform: translateY(0);  
  }
  50% {
    transform: translateY(10px);  
  }
  100% {
    transform: translateY(0);  
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
  opacity: 0;
  animation: ${fadeIn} 0s ease-out forwards;

  & h1 {
    font-family: "Archivo Black", serif;
    font-weight: bold;
    font-size: 53px;
    line-height: 1;
    background: linear-gradient(270deg, rgba(246,242,54,1) 0%, rgba(252,70,107,1) 35%, rgba(63,94,251,1) 100%);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 0.5px black;
    text-align: center;
    opacity: 0;
    animation: ${fadeIn} 2.5s ease-out forwards 1s; /* Aparece con delay */
  }

  & p {
    color: white;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    margin-top: 20px;
    -webkit-text-stroke: 0.2px #3f5efb;
    text-align: center;
    opacity: 0;
    animation: ${slideUp} 1.5s ease-out forwards 2.5s; /* Aparece desde abajo con delay */
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
    gap: 32px;
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
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards 0.5;

  & h2 {
    color: white;
    font-size: 25px;
    opacity: 0;
    animation: ${fadeIn} 2s ease-out forwards;
  }

  & img {
    width: 50px; 
    height: auto; 
    animation: ${helloAnimation} 1.5s infinite, ${fadeIn} 2s ease-out forwards;
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
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards 4s; /* Aparece después de la descripción */

  & a{
    border-radius: 2rem;
    padding: 8px;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 94%, rgba(246,242,54,1) 100%);
    box-shadow: 0px 0px 1.2px 0.8px rgba(246, 242, 54, 1);
    transition: box-shadow 0.3s ease, transform 0.4s ease;
  }

  & a:hover{
    box-shadow: 0px 0px 8px 1px rgba(246, 242, 54, 1); 
  }

  & a:active {
    transform: scale(1.1);  
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
  opacity: 0;
  animation: ${fadeIn} 2s ease-out forwards 4.3s; /* Aparece después de las redes sociales */

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

export const Arrow = styled.div`
  margin-top: 0px;
  display: inline-block;
  font-size: 40px;
  animation: ${fadeIn} 9s ease-out, ${moveDown} 1.4s infinite;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
  -webkit-background-clip: text;
  color: transparent;
  transition: color 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 25%, rgba(199,81,146,1) 38%, rgba(199,169,81,1) 56%);
    -webkit-background-clip: text;  
    color: transparent;
  }

  @media(min-width: 600px){
    font-size: 50px;
  }

  @media(min-width: 1400px){
    font-size: 60px;
  }
`;

