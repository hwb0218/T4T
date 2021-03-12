import styled ,{ createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Karla', sans-serif;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const Form = styled.form`
  max-width: 250px;
  margin: 0 auto;
`;

export const PTag = styled.p`
  color: #bf1650;
  
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  background-color: white;
  border: none;
  border-bottom: 1px solid #5f0080;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 200;
`;

export const InputSubmit = styled(Input).attrs({
    type: 'submit'
})`
  background-color: #5f0080;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  cursor: pointer;
    
  &:hover {
    transition: 0.15s all;
    opacity: 0.5;
  }
  
  &:focus {
    outline: none;
  }  
  
  &:active {
    transition: 0.5s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

export default GlobalStyles;