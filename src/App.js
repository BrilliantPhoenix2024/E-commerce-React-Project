import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage/homepage.components";
import ShopPage from "./components/shop/shop.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {HomePage}
        </Route>
        <Route path="/shop">
          {ShopPage}
          </Route>
      </Switch>
    </div>
  );
}

export default App;
