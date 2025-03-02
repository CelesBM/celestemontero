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
                  to="hero" // Coincide con el id de la sección "Projects"
                  smooth={true}  // Activar desplazamiento suave
                  duration={900} // Duración de la transición (500ms)
                  offset={-70}   // Ajuste de desplazamiento (si tienes un header fijo)
                  onClick={toggleMenu} // Cierra el menú al hacer clic
                >
                  Home
                </Link></li>
              <li className="projects">
                <Link 
                  to="projects" // Coincide con el id de la sección "Projects"
                  smooth={true}  // Activar desplazamiento suave
                  duration={900} // Duración de la transición (500ms)
                  offset={-70}   // Ajuste de desplazamiento (si tienes un header fijo)
                  onClick={toggleMenu} // Cierra el menú al hacer clic
                >
                  Proyectos
                </Link></li>
              <li className="skills"> 
                <Link 
                  to="skills" // Coincide con el id de la sección "Skills"
                  smooth={true}
                  duration={3000}
                  offset={-70}
                  onClick={toggleMenu} // Cierra el menú al hacer clic
                >
                  Tecnologías
                </Link></li>
              <li className="about">  <Link 
                  to="about" // Coincide con el id de la sección "About"
                  smooth={true}
                  duration={3500}
                  offset={-70}
                  onClick={toggleMenu} // Cierra el menú al hacer clic
                >
                  Sobre mí
                </Link></li>
            </ul>
          </Menu>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
