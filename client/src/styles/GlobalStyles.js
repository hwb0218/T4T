import styled ,{ createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0;
        paading: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  //max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  
  ${({ theme }) => theme.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `}
`;

export default GlobalStyles;