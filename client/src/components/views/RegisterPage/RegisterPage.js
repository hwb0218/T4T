import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../_actions/userActions";
import {
  RegisterForm,
  PTag,
  Input,
  Label,
  InputSubmit,
} from "../../../styles/Form";

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef(null);
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    const { email, name, password, passwordConfirm, role } = data;
    const dataToSubmit = {
      email,
      name,
      password,
      passwordConfirm,
      role: Number(role),
    };

    dispatch(registerUser(dataToSubmit)).then((response) => {
      if (response.payload.success) {
        history.push("/login");
      } else {
        alert(response.payload.err);
      }
    });
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Email</Label>
      <Input
        name="email"
        type="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        autoComplete="off"
      />
      {errors.email && <PTag>이메일이 필요합니다.</PTag>}
      <Label>Name</Label>
      <Input
        name="name"
        ref={register({ required: true, maxLength: 10 })}
        autoComplete="off"
      />
      {errors.name && errors.name.type === "required" && (
        <PTag>이름이 필요합니다.</PTag>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <PTag>이름은 최대 10글자까지 입니다.</PTag>
      )}

      <Label>Password</Label>
      <Input
        name="password"
        type="password"
        ref={register({ required: true, minLength: 6 })}
        autoComplete="off"
      />
      {errors.password && errors.password.type === "required" && (
        <PTag>비밀번호가 필요합니다.</PTag>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <PTag>비밀번호는 최소 6자리 이상입니다.</PTag>
      )}

      <Label>Password Confirm</Label>
      <Input
        name="passwordConfirm"
        type="password"
        ref={register({
          required: true,
          validate: (value) => value === password.current,
        })}
        autoComplete="off"
      />
      {errors.passwordConfirm && errors.passwordConfirm.type === "required" && (
        <PTag>비밀번호가 필요합니다.</PTag>
      )}
      {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && (
        <PTag>비밀번호가 맞지 않습니다.</PTag>
      )}
      <InputSubmit type="submit" value="가입하기" />
    </RegisterForm>
  );
};

export default RegisterPage;
