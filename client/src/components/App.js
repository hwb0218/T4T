import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "../hoc/auth";
import RandingPage from "./views/RandingPage/RandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import LoginPage from "./views/LoginPage/LoginPage";
import Navbar from "./views/NavBar/Navbar";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import GlobalStyles from "../styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <div
        style={{
          padding: "2.5rem 0",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Switch>
          <Route exact path="/" component={Auth(RandingPage, null)} />
          <Route path="/register" component={Auth(RegisterPage, false)} />
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
