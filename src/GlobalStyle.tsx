import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
