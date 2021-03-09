import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Auth from '../hoc/auth';
import RandingPage from "./views/RandingPage/RandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import LoginPage from "./views/LoginPage/LoginPage";
import Navbar from "./views/NavBar/Navbar";

const App = () => {
    return (
    <>
        <Navbar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
              <Route exact path="/" component={Auth(RandingPage, null)}/>
              <Route path="/register" component={Auth(RegisterPage, false)}/>
              <Route path="/login" component={Auth(LoginPage, false)}/>
          </Switch>
        </div>
    </>
);
}

export default withRouter(App);
