import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from "./views/RegisterPage/RegisterPage";
import LoginPage from "./views/LoginPage/LoginPage";

function App() {
  return (

      <Route exact path="/" component={RegisterPage} />
  );
}

export default App;
