import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage/homepage.components";
import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/hats" Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
