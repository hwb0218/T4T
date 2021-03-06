import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../_actions/userActions';
import './RegisterPage.css';

const RegisterPage = ({ history }) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef(null);
    password.current = watch('password');

    const onSubmit = (data) => {
        console.log('data', data);
        const { email, name, password, passwordConfirm } = data;
        const dataToSubmit = {
            email,
            name,
            password,
            passwordConfirm
        };

        dispatch(registerUser(dataToSubmit))
            .then(response => {
                if (response.payload.success) {
                    history.push('/login');
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

            <label>Name</label>
            <input name="name" ref={register({ required: true, maxLength: 10 })} />
            {errors.name && errors.name.type === 'required' && <p>이름이 필요합니다.</p>}
            {errors.name && errors.name.type === 'maxLength' && <p>이름은 최대 10글자까지 입니다.</p>}

            <label>Password</label>
            <input name="password" type="password" ref={register({ required: true, minLength: 6 })} />
            {errors.password && errors.password.type === 'required' && <p>비밀번호가 필요합니다.</p>}
            {errors.password && errors.password.type === 'minLength' && <p>비밀번호는 최소 6자리 이상입니다.</p>}

            <label>Password Confirm</label>
            <input name="passwordConfirm"
                   type="password"
                   ref={register({ required: true,
                       validate: (value) => (value === password.current) })}
            />
            {errors.passwordConfirm && errors.passwordConfirm.type === 'required' && <p>비밀번호가 필요합니다.</p>}
            {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && <p>비밀번호가 맞지 않습니다.</p>}
            <input type="submit" value="가입하기" />
        </form>
    );
};

export default RegisterPage;