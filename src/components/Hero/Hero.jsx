import { Container, HelloContainer, SocialMediaContainer, CurriculumContainer, Arrow} from "./HeroStyles"

const Hero = ()=> {

    return(
        <>
        <Container>
            <HelloContainer>
                <h2>Hola, soy Celeste </h2>
                <img src="/hand.png" alt="hand"/>
            </HelloContainer>
            <h1>Fullstack Developer</h1>
            <p>Mi objetivo es crear experiencias que generen valor para los usuarios y las empresas, aplicando siempre las mejores prácticas de desarrollo y diseño. </p>
            <SocialMediaContainer>
                <a href="https://github.com/CelesBM"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/celestemontero/"><img src="https://cdn-icons-png.flaticon.com/512/4701/4701533.png" alt="linkedin" /></a>
            </SocialMediaContainer>
            <CurriculumContainer>
                <button>Descargar CV</button>
            </CurriculumContainer>
            <a href="#projects">
                <Arrow>{'︾'}</Arrow>
            </a>    
        </Container>
        </>
    )
}

export default Hero