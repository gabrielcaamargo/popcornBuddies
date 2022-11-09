import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.textColor};
    height: 100vh;
  }

  button {
    font-size: 16px;
    cursor: pointer;
  }

  input {
    font-size: 16px;
  }

  ul {
      display: flex;
      gap: 12px;
      li {
        list-style: none;
      }
    }
`;