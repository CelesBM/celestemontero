import { Container, Presentation, ProyectosContainer, ProyectoCard, SkillsContainer } from "./ProjectsStyles";
import { useState } from "react";

const Projects = () => {
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);  

    const toggleDescription = (index) => {
        setShowDescriptionIndex(prevIndex => prevIndex === index ? null : index);  // Si está abierto, cerramos; si no, lo abrimos
    };

    const projects = [
        {
            title: "Pet Finder",
            date: "12/24 - 02/25",
            skills: ["PostgreSQL", "Sequelize", "Express.js", "TypeScript", "Custom Elements", "Cloudinary", "Nominatim"],
            description: "Desarrollé una aplicación para ayudar a encontrar mascotas perdidas rápidamente. Los usuarios pueden registrarse de forma segura, crear reportes con detalles como nombre, imagen (almacenada en Cloudinary) y ubicación en un mapa. Utilizando Nominatim, los reportes se muestran en un radio de 20 km, y se pueden hacer avistamientos con notificaciones por correo. La gestión de reportes es accesible desde el perfil de cada usuario. La aplicación utiliza PostgreSQL, Sequelize, Express.js, TypeScript, Custom Elements, Cloudinary y Leaflet para ofrecer una experiencia eficiente y fácil de usar.",
            image: "/pet-finder.png"
        },
        {
            title: "E-commerce backend",
            date: "09/24 - 11/24",
            skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Passport.js", "Nodemailer"],
            description: "He desarrollado el backend de un sistema de e-commerce, enfocado en ser funcional, seguro y escalable. Implementé un sistema de autenticación seguro para el registro y acceso de los usuarios. Cada cuenta tiene un carrito personalizado, gestionado eficientemente y asociado a su perfil. Utilicé Nodemailer para la verificación de correo, asegurando un proceso de registro confiable. Además, implementé un middleware de autorización que protege los recursos sensibles, permitiendo el acceso solo a usuarios autenticados. Para la gestión de datos, empleé Prisma ORM, lo que facilita una interacción eficiente con la base de datos. El sistema también incluye la lógica de productos, con un CRUD completo para manejar productos de manera sencilla y escalable, permitiendo una administración ágil del catálogo.",
            image: "/ecommerce-backend.png"
        },
        {
            title: "Zambosco Fitness",
            date: "10/23 - actualidad",
            skills: ["React.js", "Redux Toolkit", "Styled Components", "useContext", "useEffect", "Node.js"],
            description: "Desarrollé de manera independiente una plataforma de e-commerce para la compra de suplementos deportivos utilizando React.js, ofreciendo una experiencia rápida, responsiva y fácil de navegar. Durante el proyecto, trabajé directamente con el cliente mediante videoconferencias, estableciendo plazos de entrega claros y asegurándome de adaptar el diseño y las funcionalidades a sus necesidades específicas para garantizar su satisfacción. Implementé una arquitectura robusta y escalable, aprovechando herramientas como hooks, context y Redux Toolkit para gestionar el estado de manera eficiente y proporcionar una navegación fluida entre las distintas secciones de la tienda. También desarrollé la lógica del carrito de compras, permitiendo a los usuarios añadir o eliminar productos fácilmente y visualizar un resumen claro del pedido en cualquier momento. Además, diseñé e implementé un formulario de contacto con Formik y Yup, asegurando una validación de datos en tiempo real que optimizó la experiencia del usuario y facilitó una comunicación efectiva. Como parte del diseño de experiencia, incorporé modales para notificar a los usuarios sobre acciones importantes, como agregar productos al carrito o completar una compra. Este proyecto freelance me permitió no solo aplicar habilidades técnicas avanzadas, sino también gestionar la comunicación con el cliente y el cumplimiento de sus expectativas, entregando una solución funcional y centrada en la experiencia del usuario.",
            image: "/supplements-page.png"
        },
        {
            title: "Piedra, papel o tijera",
            date: "04/24 - 06/24",
            skills: ["Typescript", "Firebase", "HTML", "CSS", "Custom Elements"],
            description: "He desarrollado un juego online de Piedra, Papel o Tijera con conexión en tiempo real, utilizando Firebase como base de datos NoSQL, lo que permite partidas dinámicas entre jugadores. Implementé gamerooms permanentes, lo que facilita el almacenamiento de puntajes y el seguimiento constante de las partidas previas. Utilicé un state eficiente para asegurar la escalabilidad y una arquitectura limpia, y desarrollé un sistema de rutas con Parcel para una navegación intuitiva. El proyecto también incluye comunicación RESTful para la interacción entre el cliente y el servidor, y cuenta con documentación completa y pruebas en Postman para validar los endpoints.",
            image: "/game-online.png"
        },
        {
            title: "Nutrition Page",
            date: "01/24 - 02/24",
            skills: ["React.js", "Redux Toolkit", "Styled Components", "useContext", "useEffect", "Node.js"],
            description: "Este proyecto combina mi formación en salud con mi pasión por la tecnología. Desarrollé una página web que incluye varias secciones clave: un Inicio para presentarme y generar conexión desde el primer momento, Sobre mí donde comparto mi historia y enfoque profesional, Servicios con detalles sobre lo que ofrezco, un Recetario interactivo con recetas saludables filtrables por categorías, y un Formulario de contacto fácil de usar y validado con Formik y Yup para garantizar precisión. Utilicé React.js y JSX para construir la interfaz, Redux Toolkit para gestionar el estado de manera eficiente, y Styled Components para un diseño modular y personalizado. Además, empleé useEffect y useContext para manejar efectos y compartir datos globales, creando una experiencia de usuario fluida y dinámica.",
            image: "/nutrition.png"
        },
        {
            title: "Dance Wear",
            date: "10/23 - 11/23",
            skills: ["Javascript", "HTML", "CSS"],
            description: "Desarrollé una página web de comercio electrónico para la venta de artículos de ballet, combinando un diseño atractivo con funcionalidades clave que mejoran la experiencia del usuario. El sitio cuenta con un filtro por categoría que facilita la búsqueda de productos, un carrito de compras dinámico donde los usuarios pueden añadir, eliminar y ajustar cantidades en tiempo real, y acciones avanzadas que permiten comprar directamente o vaciar el carrito con un solo clic. El diseño es mobile-first y responsive, garantizando una excelente experiencia en cualquier dispositivo. Utilicé HTML y CSS para la estructura y el diseño, y JavaScript para la lógica y la interactividad.",
            image: "/dance-wear.png"
        },
        {
            title: "Presto",
            date: "05/23",
            skills: ["HTML", "CSS"],
            description: "Les presento a Presto, una página web creada desde cero utilizando HTML y CSS, con un enfoque mobile-first y diseño responsive. El diseño es totalmente adaptable, asegurando que se vea increíble en cualquier dispositivo, desde móviles hasta escritorios. La estructura de la página es clara y semántica, lo que no solo mejora la accesibilidad, sino también el rendimiento general. Además, todo el proyecto está pensado con un enfoque centrado en la experiencia del usuario (UX), garantizando una navegación intuitiva y eficiente.",
            image: "/presto.png"
        },
    ];

    return (
        <Container id="projects">
            <Presentation>
                <h3>Proyectos y trabajos</h3>
                <p>Me complace presentar algunos de mis proyectos y trabajos, que reflejan mi experiencia y habilidades en el campo del desarrollo web y de software.</p>
            </Presentation>
            <ProyectosContainer>
                {projects.map((project, index) => (
                    <ProyectoCard key={index}>
                        <h5>{project.title}</h5>
                        <div className="img-container">
                            <img src={project.image} alt={project.title} />
                            <div className="site-text">Ir al sitio</div>
                        </div>
                        <p>{project.date}</p>
                        <SkillsContainer>
                            {project.skills.map((skill, i) => <span key={i}>{skill}</span>)}
                        </SkillsContainer>
                        <p className={`description ${showDescriptionIndex === index ? 'show' : ''}`}>{project.description}</p>
                        <div onClick={() => toggleDescription(index)} className="toggle-description">
                            <span>{showDescriptionIndex === index ? '︿' : '﹀'}</span>
                        </div>
                    </ProyectoCard>
                ))}
            </ProyectosContainer>
        </Container>
    );
}

export default Projects;