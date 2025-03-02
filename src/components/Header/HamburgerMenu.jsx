import { useState } from "react";
import { Link } from 'react-scroll'; 
import { Container, Menu, Overlay, CloseButton } from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <div onClick={toggleMenu}>
          {isOpen ? "✕" : "☱"}
        </div>
      </Container>
      {isOpen && (
        <>
          <Overlay />
          <Menu>
            <CloseButton onClick={toggleMenu}></CloseButton>
            <ul>
              <li className="hero">
                <Link 
                  to="hero" 
                  smooth={true}  // Activar desplazamiento suave
                  duration={900} // Duración de la transición 
                  offset={-70}   // Ajuste de desplazamiento
                  onClick={toggleMenu} 
                >
                  Home
                </Link>
              </li>
              <li className="projects">
                <Link 
                  to="projects" 
                  smooth={true}  
                  duration={900} 
                  offset={-70}   
                  onClick={toggleMenu} 
                >
                  Proyectos
                </Link>
              </li>
              <li className="skills"> 
                <Link 
                  to="skills" 
                  smooth={true}
                  duration={3000}
                  offset={-70}
                  onClick={toggleMenu} 
                >
                  Tecnologías
                </Link>
              </li>
              <li className="about">  
                <Link 
                  to="about" 
                  smooth={true}
                  duration={3500}
                  offset={-70}
                  onClick={toggleMenu} 
                >
                  Sobre mí
                </Link>
              </li>
            </ul>
          </Menu>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
