import styled, { createGlobalStyle, css } from 'styled-components';

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

export const Container = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 15px;
`;

export const mixinFlex = ({ alignItem = 'start', justifyContent = 'flex-start' }) => css`
  display: flex;
  align-items: ${alignItem};
  justify-content: ${justifyContent};
`;

export const mixinKeyframesUpdateTime = css`
  @keyframes indicator {
    0% {
      box-shadow: ${({ theme }) => theme.colors.green3} 0 0 0;
    }
    65% {
      box-shadow: ${({ theme }) => theme.colors.green3} 0 0 0 7px;
    }
  }
`;

export const mixinKeyframesSpinner = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
