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
  position: relative; 
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.5px; 
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(117,87,210,1) 56%, rgba(199,81,146,1) 89%);
  }

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

export const SkillsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: center;
gap: 20px; 
margin-top: 20px;
& img {
border-radius: 5px;
width: 60px;
}
`;