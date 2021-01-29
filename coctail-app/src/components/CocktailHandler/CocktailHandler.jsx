import React, { useState } from "react";
import { getData } from "../../utils/api";
import CocktailCard from "../CocktailCard/CocktailCard";

import "./cocktail-handler.css";

const CocktailHandler = () => {
  const [cocktails, setCocktails] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleRandomClick = () => {
    getData("/api/cocktail").then((data) => setCocktails(data));
  };

  const handleSearch = () => {
    getData(`/api/cocktail?search=${searchValue}`).then((data) =>
      setCocktails(data)
    );
  };

  return (
    <div className="cocktail-handler">
      <div className="action-container">
        <div className="search-cocktail">
          <label>
            <input
              className="search-input"
              type="text"
              placeholder="Search for a drink..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </label>
        </div>
        <button className="random-cocktail" onClick={handleRandomClick}>
          Get a random cocktail
        </button>
      </div>
      {cocktails
        ? cocktails.map(
            ({ idDrink, strDrink, strInstructions, strDrinkThumb }) => (
              <div className="cocktail-card-container" key={idDrink}>
                <CocktailCard
                  name={strDrink}
                  instructions={strInstructions}
                  thumbnail={strDrinkThumb}
                />
              </div>
            )
          )
        : "No cocktail yet."}
    </div>
  );
};

export default CocktailHandler;
