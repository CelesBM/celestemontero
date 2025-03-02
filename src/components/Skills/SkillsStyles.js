import styled, { keyframes } from "styled-components";

export const textGlow = keyframes`
  0% { background-position: 200%; }
  100% { background-position: 0%; }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  33% { opacity: 1; }
  80% { opacity: 0; }
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
    background: linear-gradient(90deg, rgba(241, 240, 235, 0.86) 0%, rgba(255, 255, 255, 0.7) 50%, rgb(255, 255, 255) 100%);
    background-size: 200%;
    -webkit-background-clip: text;
    color: transparent; 
    animation: ${textGlow} 4s ease-in-out infinite;
  }

  @media(min-width: 800px){
    & h3 {
      font-size: 30px;
    }
  }

  & h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; 
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
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

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px; 
  margin-top: 20px;

 @media(min-width: 505px){
    margin-top: 40px;
    gap: 35px; 
  }

  & img {
    border-radius: 5px;
    width: 60px;
    opacity: 0; /* Inicialmente las imágenes están ocultas */
    animation: ${fadeInOut} 15s ease-in-out infinite;
  }

  & img:nth-child(1) { animation-delay: 0s; }
  & img:nth-child(2) { animation-delay: 1s; }
  & img:nth-child(3) { animation-delay: 2s; }
  & img:nth-child(4){ animation-delay: 3s; }
  & img:nth-child(5){ animation-delay: 4s; }
  & img:nth-child(6) { animation-delay: 5s; }
  & img:nth-child(7){ animation-delay: 6s; }
  & img:nth-child(8){ animation-delay: 7s; }
  & img:nth-child(9) { animation-delay: 8s; }

  @media(min-width: 800px){
    & img {
      width: 80px;
    }
  }

  @media(min-width: 800px){
    & p {
      font-size: 20px;
    }
  }
`;