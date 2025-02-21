import { Container, Presentation, ProyectosContainer, ProyectoCard, SkillsContainer } from "./ProjectsStyles"
import { useState } from "react"
const Projects = ()=> {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = ()=> {
        setShowDescription(prevState => !prevState)
    }

    return(
        <>
        <Container id="projects">
            <Presentation>
            <h3>Proyectos y trabajos</h3>
            <p>Me complace presentar algunos de mis proyectos y trabajos, que reflejan mi experiencia y habilidades en el campo del desarrollo web y de software.</p>
            </Presentation>
            <ProyectosContainer>
                <ProyectoCard>
                    <h5>Pet Finder</h5>
                    <div className="img-container">
                        <img src="/pet-finder.png" alt="" />
                        <div className="site-text">Ir al sitio</div> {/* Texto "Ir al sitio" */}
                    </div>
                    <p>12/24 - 02/25</p>
                    <SkillsContainer>
                        <span>PostgreSQL</span><span>Sequelize</span><span>Express.js</span><span>TypeScript</span><span>Custom Elements</span><span>Cloudinary</span><span>Nominatim</span>
                    </SkillsContainer> 
                    <p className={`description ${showDescription ? 'show' : ''}`}>He desarrollado una aplicación para ayudar a encontrar mascotas perdidas rápidamente. Los usuarios pueden registrarse de forma segura, crear reportes con detalles como nombre, imagen (almacenada en Cloudinary) y ubicación en un mapa. Utilizando Nominatim, los reportes se muestran en un radio de 20 km, y se pueden hacer avistamientos con notificaciones por correo. La gestión de reportes es accesible desde el perfil de cada usuario. La aplicación utiliza PostgreSQL, Sequelize, Express.js, TypeScript, Custom Elements, Cloudinary y Leaflet para ofrecer una experiencia eficiente y fácil de usar.</p>
                    <div onClick={toggleDescription} className="toggle-description">
                        <span>{showDescription ? '︿' : '﹀'}</span> {showDescription ? 'Ver menos' : 'Ver más'}
                    </div>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>E-commerce backend</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>09/24 - 11/24</p>
                    <p>He desarrollado el backend de un sistema de e-commerce, enfocado en ser funcional, seguro y escalable. Implementé un sistema de autenticación seguro para el registro y acceso de los usuarios. Cada cuenta tiene un carrito personalizado, gestionado eficientemente y asociado a su perfil. Utilicé Nodemailer para la verificación de correo, asegurando un proceso de registro confiable. Además, implementé un middleware de autorización que protege los recursos sensibles, permitiendo el acceso solo a usuarios autenticados. Para la gestión de datos, empleé Prisma ORM, lo que facilita una interacción eficiente con la base de datos. El sistema también incluye la lógica de productos, con un CRUD completo para manejar productos de manera sencilla y escalable, permitiendo una administración ágil del catálogo.</p>
                    <p>Skills: Node.js Express.js PostgreSQL Prisma ORM  JSON Web Tokens (JWT) y Passport.js Nodemailer</p>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>E-commerce de suplementos deportivos</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>10/23 - actualidad</p>
                    <p>Desarrollé de manera independiente una plataforma de e-commerce para la compra de suplementos deportivos utilizando React.js, ofreciendo una experiencia rápida, responsiva y fácil de navegar. Durante el proyecto, trabajé directamente con el cliente mediante videoconferencias, estableciendo plazos de entrega claros y asegurándome de adaptar el diseño y las funcionalidades a sus necesidades específicas para garantizar su satisfacción. Implementé una arquitectura robusta y escalable, aprovechando herramientas como hooks, context y Redux Toolkit para gestionar el estado de manera eficiente y proporcionar una navegación fluida entre las distintas secciones de la tienda. También desarrollé la lógica del carrito de compras, permitiendo a los usuarios añadir o eliminar productos fácilmente y visualizar un resumen claro del pedido en cualquier momento. Además, diseñé e implementé un formulario de contacto con Formik y Yup, asegurando una validación de datos en tiempo real que optimizó la experiencia del usuario y facilitó una comunicación efectiva. Como parte del diseño de experiencia, incorporé modales para notificar a los usuarios sobre acciones importantes, como agregar productos al carrito o completar una compra. Este proyecto freelance me permitió no solo aplicar habilidades técnicas avanzadas, sino también gestionar la comunicación con el cliente y el cumplimiento de sus expectativas, entregando una solución funcional y centrada en la experiencia del usuario. </p>
                    <p>Skills: React.js, redux Toolkit, styled components, useContext y useEffect, nodejs</p>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>Piedra, papel o tijera</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>04/24 - 06/24</p>
                    <p>Desarrollé un juego online de Piedra, Papel o Tijera con conexión en tiempo real, utilizando Firebase como base de datos NoSQL, lo que permite partidas dinámicas entre jugadores. Implementé gamerooms permanentes, lo que facilita el almacenamiento de puntajes y el seguimiento constante de las partidas previas. Utilicé un state eficiente para asegurar la escalabilidad y una arquitectura limpia, y desarrollé un sistema de rutas con Parcel para una navegación intuitiva. El proyecto también incluye comunicación RESTful para la interacción entre el cliente y el servidor, y cuenta con documentación completa y pruebas en Postman para validar los endpoints. </p>
                    <p>Skills: typescript, firebase, html, css</p>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>Landing page de nutrición</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>01/24 - 02/24</p>
                    <p>Este proyecto combina mi formación en salud con mi pasión por la tecnología. Desarrollé una página web que incluye varias secciones clave: un Inicio para presentarme y generar conexión desde el primer momento, Sobre mí donde comparto mi historia y enfoque profesional, Servicios con detalles sobre lo que ofrezco, un Recetario interactivo con recetas saludables filtrables por categorías, y un Formulario de contacto fácil de usar y validado con Formik y Yup para garantizar precisión. Utilicé React.js y JSX para construir la interfaz, Redux Toolkit para gestionar el estado de manera eficiente, y Styled Components para un diseño modular y personalizado. Además, empleé useEffect y useContext para manejar efectos y compartir datos globales, creando una experiencia de usuario fluida y dinámica.</p>
                    <p>Skills: React.js, redux Toolkit, styled components, useContext y useEffect</p>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>E-commerce de indumentaria de ballet</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>10/23 - 11/23</p>
                    <p>Desarrollé una página web de comercio electrónico para la venta de artículos de ballet, combinando un diseño atractivo con funcionalidades clave que mejoran la experiencia del usuario. El sitio cuenta con un filtro por categoría que facilita la búsqueda de productos, un carrito de compras dinámico donde los usuarios pueden añadir, eliminar y ajustar cantidades en tiempo real, y acciones avanzadas que permiten comprar directamente o vaciar el carrito con un solo clic. El diseño es mobile-first y responsive, garantizando una excelente experiencia en cualquier dispositivo. Utilicé HTML y CSS para la estructura y el diseño, y JavaScript para la lógica y la interactividad.</p>
                    <p>Skills: HTML CSS Javascript</p>
                </ProyectoCard>
                <ProyectoCard>
                    <h5>Landing page de comida</h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="" />
                    <p>05/23</p>
                    <p>Les presento a Presto, una página web creada desde cero utilizando HTML y CSS, con un enfoque mobile-first y diseño responsive. El diseño es totalmente adaptable, asegurando que se vea increíble en cualquier dispositivo, desde móviles hasta escritorios. La estructura de la página es clara y semántica, lo que no solo mejora la accesibilidad, sino también el rendimiento general. Además, todo el proyecto está pensado con un enfoque centrado en la experiencia del usuario (UX), garantizando una navegación intuitiva y eficiente. </p>
                    <p>Skills: HTML CSS</p>
                </ProyectoCard>
            </ProyectosContainer>
        
        </Container >
        
        </>
    )
}

export default Projects