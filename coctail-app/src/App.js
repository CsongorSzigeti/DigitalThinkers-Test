import React, { Component } from "react";
import "./App.css";

import CocktailHandler from "./components/CocktailHandler/CocktailHandler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="scroll-container">
          <h1 className="label">Hey! I'm a React App for DigitalThinkers</h1>
          <CocktailHandler />
        </div>
      </div>
    );
  }
}

export default App;
