import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser } from "../../../_actions/userActions";
// import './LoginPage.css';

const LoginPage = ({ history }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        const dataToSubmit = { email, password };

        dispatch(loginUser(dataToSubmit))
            .then(response => {
                if (response.payload.loginSuccess) {
                    history.push("/");
                } else {
                    alert(response.payload.err);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input name="email" type="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>이메일이 필요합니다.</p>}

            <label>Password</label>
            <input name="password" type="password" ref={register({ required: true, minLength: 6 })} />
            {errors.password && errors.password.type === 'required' && <p>비밀번호가 필요합니다.</p>}
            {errors.password && errors.password.type === 'minLength' && <p>비밀번호는 최소 6자리 이상입니다.</p>}

            <input type="submit" />
        </form>
    );
};

export default LoginPage;