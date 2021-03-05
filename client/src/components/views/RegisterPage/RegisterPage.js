import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';

const RegisterPage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef(null);
    password.current = watch('password');

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input name="email" type="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>이메일이 필요합니다.</p>}

            <label>Name</label>
            <input name="name" ref={register({ required: true, maxLength: 10 })} />
            {errors.name && errors.name.type === 'required' && <p>이름이 필요합니다.</p>}
            {errors.name && errors.name.type === 'maxLength' && <p>이름은 최대 10글자까지 입니다.</p>}

            <label>Password</label>
            <input name="password" type="password" ref={register({ required: true, minLength: 6 })} />
            {errors.password && errors.password.type === 'required' && <p>비밀번호가 필요합니다.</p>}
            {errors.password && errors.password.type === 'minLength' && <p>비밀번호는 최소 6자리 이상입니다.</p>}

            <label>Password Confirm</label>
            <input name="password_confirm"
                   type="password"
                   ref={register({ required: true,
                       validate: (value) => (value === password.current) })}
            />
            {errors.password_confirm && errors.password_confirm.type === 'required' && <p>비밀번호가 필요합니다.</p>}
            {errors.password_confirm && errors.password_confirm.type === 'validate' && <p>비밀번호가 맞지 않습니다.</p>}
            <input type="submit" value="가입하기" />
        </form>
    );
};

export default RegisterPage;