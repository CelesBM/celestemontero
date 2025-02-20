import styled from "styled-components";

export const Container = styled.section`;
  background-color:rgb(41, 44, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 50px 20px;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
  color: white;

& h3 {
  color: white;
  font-weight: 800;
  font-style: normal;
  font-size: 25px;
  margin-bottom: 25px;
  position: relative;
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
`;

export const ProyectosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ProyectoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  color: white;

  & h5{ /*ver de hacerlo dentro de la imagen*/
  font-size: 20px;
  }

  & p{
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  }
`;