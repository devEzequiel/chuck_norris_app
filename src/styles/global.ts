import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      box-sizing: border-box ;  
      margin: 0;
      padding: 0;
      outline: 0;
    }

    body {
      background: #312E38;
      color: #FFF;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Roboto', serif;
      font-size: 16px;
    }
`;
