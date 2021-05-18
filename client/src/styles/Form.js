import styled from "styled-components";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  min-width: 280px;
  width: 600px;

  ${({ theme }) => theme.mobile`
    width: 100%;
    padding: 0 1rem;
  `}
`;

export const LoginForm = styled.form`
  margin: 0 auto;
  max-width: 280px;
`;

export const RegisterForm = styled.form`
  margin: 0 auto;
  max-width: 280px;
`;

export const PTag = styled.p`
  margin-top: 5px;
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
  border-bottom: 1px solid #cbcbcb;
  margin-bottom: 10px;
  padding: 10px 15px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  background-color: white;
  border: 1px solid #cbcbcb;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #525252;
`;

export const InputNumber = styled(Input).attrs({
  type: "number",
})`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputSubmit = styled(Input).attrs({
  type: "submit",
})`
  background-color: #5f0080;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 0;
  padding: 16px;
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
