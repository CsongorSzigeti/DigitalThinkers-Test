import React, { Component } from "react";
import "./App.css";

import CocktailHandler from "./components/CocktailHandler/CocktailHandler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey! I'm a React App for DigitalThinkers</h1>
        <CocktailHandler />
      </div>
    );
  }
}

export default App;
