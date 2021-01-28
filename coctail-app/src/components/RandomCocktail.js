import React, { Component } from "react";
import axios from "axios";

export default class RandomCocktail extends Component {
  constructor() {
    super();
    this.state = {
      cocktail_name: "Not yet gotten",
    };
  }

  handleButtonClick = () => {
    axios.get("/api/cocktail").then((response) => {
      this.setState({
        cocktail_name: response.data.cocktail_name,
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Get a random cocktail</button>
        <h1>The cocktails name is: {this.state.cocktail_name}</h1>
      </div>
    );
  }
}
