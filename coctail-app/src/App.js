import React, { Component } from "react";
import "./App.css";

import RandomCocktail from "./components/RandomCocktail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey! I'm a React App for DigitalThinkers</h1>
        <RandomCocktail />
      </div>
    );
  }
}

export default App;
