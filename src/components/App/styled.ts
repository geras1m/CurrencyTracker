import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body{
    margin: 0;
    background-color: ${({ theme }) => theme.bg};
  }
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 15px;
`;

export default GlobalStyles;
