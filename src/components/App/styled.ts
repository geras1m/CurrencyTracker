import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
  }
  
  body{
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Container = styled.div`
  //width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 15px;
`;

export default GlobalStyles;
