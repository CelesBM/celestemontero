import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 2rem;
  }

  @media(min-width: 1400px){
     ul { 
      gap: 60px;
      padding: 15px;
     }  
  }

  li {
    display: flex;
    margin: 0 20px;
  }

  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s ease;
  }

  @media(min-width: 1400px){
    a {
      gap: 15px;
      font-size: 20px;
    }
  }

  a:hover {
    text-shadow: 1px 1px 8px rgba(255, 255, 255, 0.35);
  }

  @media (max-width: 768px) {
    display: none;
  }

  & img {
    width: 35px;
  }

  @media(min-width: 1400px){
    & img {
      width: 40px;
    }
  }
`;

export const HamburgerMenuContainer = styled.div`
  display: block;

  @media (min-width: 769px) {
    display: none;
  }
`;
