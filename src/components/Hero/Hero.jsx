import  { useState} from "react";
import { Container, HelloContainer, SocialMediaContainer, CurriculumContainer, Arrow } from "./HeroStyles";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Esto se ejecuta cuando la imagen se ha cargado
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleDownloadCV = () => {
    const downloadCV = "/curriculum.pdf";
    window.open(downloadCV);
  };

  return (
    <Container id="hero">
      <HelloContainer>
        <h2>Hola, soy Celeste</h2>
        {/* La imagen tendrá un fondo negro mientras se carga */}
        <img
          src="/hand.png"
          alt="hand"
          onLoad={handleImageLoad}
          style={{
            backgroundColor: isLoading ? "black" : "transparent", // Fondo negro mientras carga
            transition: "background-color 0.3s ease", // Para una transición suave
          }}
        />
      </HelloContainer>
      <h1>Fullstack Developer</h1>
      <p>
        Mi objetivo es crear experiencias que generen valor para los usuarios y las
        empresas, aplicando siempre las mejores prácticas de desarrollo y diseño.
      </p>
      <SocialMediaContainer>
        <a href="https://github.com/CelesBM">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/celestemontero/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4701/4701533.png"
            alt="linkedin"
          />
        </a>
      </SocialMediaContainer>
      <CurriculumContainer>
        <button onClick={handleDownloadCV}>Descargar CV</button>
      </CurriculumContainer>
      <a href="#projects">
        <Arrow>{'︾'}</Arrow>
      </a>
    </Container>
  );
};

export default Hero;
