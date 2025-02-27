import { Container, Presentation, AboutContainer } from "./AboutStyles";

const About = () => {
    return(
        <>
        <Container>
            <Presentation>
                <h3>Un poco sobre mí...</h3>
            </Presentation>
            <AboutContainer>
              <img src="/cv.jpeg" alt="me"/>
              <p>Vivo en Buenos Aires, Argentina. Mi carrera comenzó en el ámbito de la nutrición, donde me desempeñé como Licenciada en Nutrición durante varios años. Sin embargo, en 2021, descubrí la programación, y fue un cambio rotundo en mi vida. Lo que comenzó como una curiosidad, pronto se convirtió en una verdadera pasión, que decidí seguir con todo mi empeño. <br />
                 Para formalizar mis conocimientos en esta nueva área, comencé un curso de Fullstack Web Developer en APX, y lo complementé con el bootcamp de NUCBA, que me brindó una base sólida en desarrollo web. Como siempre me he caracterizado por mi deseo de seguir aprendiendo y creciendo, en 2024 decidí continuar mi formación con la Tecnicatura Superior en Análisis de Sistemas Informáticos en el Instituto Scalabrini Ortiz (IRSO). <br />
                 Me considero una persona comprometida con los proyectos en los que me involucro, siempre buscando mejorar y brindar lo mejor de mí en cada desafío. Además, soy muy predispuesta a seguir aprendiendo y evolucionando constantemente. <br />
                 ¡Gracias por visitar mi portfolio y conocer un poco más sobre mi historia y pasión por la programación!</p>
            </AboutContainer>
        </Container>
        </>
    )
}

export default About;