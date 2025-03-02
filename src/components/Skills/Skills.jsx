import { Container, Presentation, SkillsContainer } from "./SkillsStyles";

const Skills = () => {
    return(
        <>
        <Container id="skills">
            <Presentation>
                <h3>Tecnologías</h3>
                <p>Mi especialización es fullstack, con sólidos conocimientos en React, Javascript, Typescript, Node.js, bases de datos relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB), implementando soluciones eficientes y escalables. Disfruto transformar ideas complejas en aplicaciones web funcionales y fáciles de usar.<br/>
                En mis proyectos anteriores he trabajado en el desarrollo de plataformas web desde cero, optimizado la performance de aplicaciones para mejorar la experiencia del usuario final.</p>
            </Presentation>
            <SkillsContainer>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png" alt="Javascript"/>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React"/>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png" alt="Node"/>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" alt="HTML"/>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png" alt="CSS"/>
              <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-256.png" alt="BOOSTRAP"/>
              <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="MongoDB"/>
              <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700048-icon-89-document-file-sql-256.png" alt="PostgreSQL"/>
            </SkillsContainer>
        </Container>
        </>
    )
}

export default Skills;