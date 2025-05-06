import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Google Font import */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.base};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
