import styled, { keyframes } from "styled-components";

export const textGlow = keyframes`
  0% {
    background-position: 200%;
  }
  100% {
    background-position: 0%;
  }
`;

export const FadeIn = keyframes`
  0% {
    opacity: 0;
   
  }
  100% {
    opacity: 1;
    
  }
`;



export const Container = styled.section`;
  background-color:rgb(41, 44, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 50px 20px;

  @media(min-width: 800px){
  gap: 35px;
  }

     @media(min-width: 900px){
  padding: 60px 50px;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
  color: white;

  @media(min-width: 800px){
  gap: 30px;
  }

& h3 {
  color: white;
  font-weight: 800;
  font-style: normal;
  font-size: 25px;
  margin-bottom: 25px;
  position: relative;
 /* El gradiente de brillo en el texto */
    background: linear-gradient(90deg, rgba(241, 240, 235, 0.86) 0%, rgba(255, 255, 255, 0.7) 50%, rgb(255, 255, 255) 100%);
    background-size: 200%;
    -webkit-background-clip: text;
    color: transparent; /* El gradiente se aplica solo al texto */
    animation: ${textGlow} 4s ease-in-out infinite;
}

@media(min-width: 800px){
  & h3 {
  font-size: 30px;
}
  }

& h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px; 
  background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
}

  & p{
   font-size: 18px;
   line-height: 1.4;
   text-align: center;
  }

  @media(min-width: 800px){
  & p {
  font-size: 20px;
}
  }
`;

export const ProyectosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 40px;
  margin-top: 20px;

    @media(min-width: 900px){
  gap: 80px;
  }

`;

export const ProyectoCard = styled.div`
  background-color:rgb(51, 54, 58);
  border: 2px solid transparent; /* Inicialmente sin borde */
  border-radius: 2rem;
  transition: box-shadow 0.6s ease; /* Cambiar box-shadow en lugar de background */
  width: 280px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  color: white;
  position: relative; /* Posiciono "ir al sitio" en la img */
  box-shadow: 0 0 8px 2px rgba(246,242,54,0.3), 0 0 12px 4px rgba(252,70,107,0.3), 0 0 10px 6px rgba(63,94,251,0.3);  

  &:hover{
  box-shadow: 0 0 12px 4px rgba(246,242,54,0.3), 0 0 12px 4px rgba(252,70,107,0.3), 0 0 10px 10px rgba(63,94,251,0.3);  
  }

    @media(min-width: 800px){
  gap: 20px;
  width: 350px;
  min-height: 550px;
  }


    @media(min-width: 1020px){
  width: 400px;
  min-height: 580px;
  }

  & h5 {  
  font-size: 22px;
  text-align: center;
  }

    @media(min-width: 800px){
  & h5 {
  font-size: 24px;
  }
    }

  .img-container {
   position: relative; /* Necesario para posicionar el texto "Ir al sitio" sobre la imagen */
  }

  & img{
  width: 250px;
  height: 150px;
  border-radius: 0.5rem;
  cursor:pointer;
  transition: filter 0.3s ease;
  position: relative;
  }

    @media(min-width: 800px){
  & img {
  width: 290px;
  height: 180px;;
  }
    }

    @media(min-width: 1020px){
  & img {
  width: 310px;
  height: 200px;;
  }
    }

  & img:hover{
   filter: grayscale(100%);
  }

  .img-container:hover img {
  filter: grayscale(100%); /* Mantén la imagen en blanco y negro al hacer hover sobre el contenedor de la imagen */
}

  .site-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px 25px;
    border-radius: 1.5rem;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(198,77,148,1) 79%, rgba(199,81,146,1) 89%);  
    font-size: 18px;
    opacity: 0; /* Inicialmente oculto */
    pointer-events: auto;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .img-container:hover .site-text {
    opacity: 1; /* Aparece el texto al hacer hover */
  }

  & p {
  font-size: 16px;
  line-height: 1.4;
  text-align: justify;
  }

      @media(min-width: 800px){
  & p {
  font-size: 18px;
  }
    }

    /* Estilo para la descripción oculta */
  .description {
    display: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    margin-bottom: 30px;
  }

  .description.show {
    display: flex;
    justify-content: center;
    opacity: 1;
    max-height: 2000px; 
    animation: ${FadeIn} 2.5s ease-out;
  }

  /* Estilos para la flecha "Ver más" */
  .toggle-description {
    position: absolute; /* Para posicionarlo fuera del flujo normal */
    bottom: 20px; /* Distancia desde el borde inferior de la tarjeta */
    left: 50%; /* Centrar horizontalmente */
    transform: translateX(-50%); /* Ajustar para que esté perfectamente centrado */
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-align: center;
    transition: color 0.3s ease;
    color:rgb(126, 119, 219);
    font-weight: bold;
  }

        @media(min-width: 800px){
  & p {
  font-size: 18px;
  }
    }

    @media(min-width: 800px){
  .description {
  font-size: 17px;
  }
    }

   @media(min-width: 1020px){
  .description {
  font-size: 18px;
  }
    }


  .toggle-description:hover {
    color:rgb(227, 235, 117);
  }
`;

export const SkillsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: center;
gap: 7px;


& span{
font-size: 15px;
background-color:rgb(82, 86, 90);
padding: 2px 10px;
border-radius: 1rem;
}

    @media(min-width: 800px){
  & span {
  font-size: 18px;
  }
    }
`;