import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        word-break: keep-all;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

export default GlobalStyles;
