import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage/homepage.components";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {HomePage}
        </Route>
        <Route path="/shop">{ShopPage}</Route>
        <Route path="/signin">{SignInAndSignUpPage}</Route>
      </Switch>
    </div>
  );
}

export default App;
