import { Container, NavLinks, HamburgerMenuContainer } from './HeaderStyles'; // Asegúrate de importar los estilos
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Container>
      {/* Mostrar el hamburguesa en pantallas pequeñas */}
      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>

      {/* Mostrar los enlaces de navegación en pantallas grandes */}
      <NavLinks>
        <ul>
        
        <li>
            <Link to="hero" smooth={true} duration={900} offset={-70}>
            <img src="https://img.icons8.com/?size=100&id=73&format=png&color=D173E9" alt="" /> 
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={900} offset={-70}>
            <img src="https://img.icons8.com/?size=100&id=999&format=png&color=D173E9" alt="" /> 
              <h5>Proyectos</h5>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={3000} offset={-70}>
            <img src="https://img.icons8.com/?size=100&id=42437&format=png&color=D173E9" alt="" />
              <h5>Tecnologías</h5>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={3500} offset={-70}>
            <img src="https://img.icons8.com/?size=100&id=2906&format=png&color=D173E9" alt="" />
              <h5>Sobre mí</h5>
            </Link>
          </li>
        </ul>
      </NavLinks>
    </Container>
  );
};

export default Header;
