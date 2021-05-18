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
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import Footer from "./views/Footer/Footer";
import NotFoundScene from "./views/NotFoundScene/NotFoundScene";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <div
        style={{
          padding: "2.5rem 0",
          minHeight: "100vh",
        }}
      >
        <Switch>
          <Route exact path="/" component={Auth(RandingPage, null)} />
          <Route path="/register" component={Auth(RegisterPage, false)} />
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route
            path="/product/upload"
            component={Auth(UploadProductPage, true, true)}
          />
          <Route
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          />
          <Route path="/user/cart" component={Auth(CartPage, true)} />
          <Route path="/history" component={Auth(HistoryPage, true)} />
          <Route path="*" component={Auth(NotFoundScene, null)} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
