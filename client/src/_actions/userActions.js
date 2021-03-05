import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, AUTH_USER, REGISTER_USER } from './types';

const registerUser = (dataToSubmit) => {
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    };
}

const loginUser = (dataToSubmit) => {
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    };
}

const logoutUser = () => {
    const request = axios.get('/api/users/logout')
        .then(response => response.data)

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export { registerUser, loginUser, logoutUser };