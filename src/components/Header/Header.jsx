import { Container, NavLinks, HamburgerMenuContainer } from './HeaderStyles';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Container>
      {/* Mostrar el hamburguesa*/}
      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>
      {/* Mostrar los links al agrandar la pantalla */}
      <NavLinks>
        <ul> 
          <li>
            <Link to="hero" smooth={true} duration={900} offset={-70}>
              <img src="https://img.icons8.com/?size=100&id=73&format=png&color=D173E9" alt="home" /> 
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={900} offset={-70}>
              <img src="https://img.icons8.com/?size=100&id=999&format=png&color=D173E9" alt="projects" /> 
              <h5>Proyectos</h5>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={3000} offset={-70}>
              <img src="https://img.icons8.com/?size=100&id=42437&format=png&color=D173E9" alt="skills" />
              <h5>Tecnologías</h5>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={3500} offset={-70}>
              <img src="https://img.icons8.com/?size=100&id=2906&format=png&color=D173E9" alt="about" />
              <h5>Sobre mí</h5>
            </Link>
          </li>
        </ul>
      </NavLinks>
    </Container>
  );
};

export default Header;
