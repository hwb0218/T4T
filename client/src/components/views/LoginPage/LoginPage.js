import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginPage.css';

const LoginPage = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log('data................',data);
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