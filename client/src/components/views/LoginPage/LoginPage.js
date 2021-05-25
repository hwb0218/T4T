import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../_actions/userActions";
import {
  LoginForm,
  PTag,
  Input,
  Label,
  InputSubmit,
} from "../../../styles/Form";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    const dataToSubmit = { email, password };

    dispatch(loginUser(dataToSubmit)).then((response) => {
      if (response.payload.loginSuccess) {
        history.goBack(2);
      } else {
        alert("아이디나 비밀번호를 확인하세요.");
      }
    });
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Email</Label>
      <Input
        name="email"
        type="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <PTag>이메일이 필요합니다.</PTag>}

      <Label>Password</Label>
      <Input
        name="password"
        type="password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password && errors.password.type === "required" && (
        <PTag>비밀번호가 필요합니다.</PTag>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <PTag>비밀번호는 최소 6자리 이상입니다.</PTag>
      )}

      <InputSubmit type="submit" value="로그인" />
    </LoginForm>
  );
};

export default LoginPage;
