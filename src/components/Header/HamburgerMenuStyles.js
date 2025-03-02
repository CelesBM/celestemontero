import styled, { keyframes } from "styled-components";

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

export const Container = styled.section`
  cursor: pointer;
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; 
  background-color: transparent; 
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  @media(min-width: 768px){
    display: none;
  }

  & div{
    color: white;
    font-size: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2rem;
    padding: 5px 12px;
  }

   @media(min-width: 500px){
    & div{
    font-size: 35px;
    padding: 5px 15px;
    }
  }

    @media(min-width: 600px){
      & div{
      font-size: 40px;
      padding: 5px 16px;
      }
    }
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  text-align: center;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    cursor: pointer;
    margin: 20px 0;
    animation: ${slideUp} 0.7s ease-out forwards; 
  }

  .hero, .projects, .skills, .about {
    transition: color 0.3s ease; 
  }

  .hero:hover {
    color: rgb(218, 118, 209);
    }

  .projects:hover {
    color: rgba(63,94,251,1);
  }

  .skills:hover {
    color: rgba(252,70,107,1);
  }

  .about:hover {
    color:  rgb(236, 234, 119);
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;
