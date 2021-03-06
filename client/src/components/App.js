import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import RandingPage from "./views/RandingPage/RandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import LoginPage from "./views/LoginPage/LoginPage";
import axios from 'axios';

function App({history}) {
    const logoutHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if (response.status === 200) {
                    history.push('/login');
                } else {
                    alert('Log Out Failed');
                }
            });
    }

    return (
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Link to="/">홈</Link>
      <Link to="/register">회원가입</Link>
      <Link to="/login">로그인</Link>
      <Link to="/logout" onClick={logoutHandler}>로그아웃</Link>
      <Switch>
          <Route exact path="/" component={RandingPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/login" component={LoginPage}/>
      </Switch>
    </div>
);
}

export default withRouter(App);
