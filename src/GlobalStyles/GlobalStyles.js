import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  html {
  scroll-behavior: smooth; /* Aplica el desplazamiento suave */
  }
`;