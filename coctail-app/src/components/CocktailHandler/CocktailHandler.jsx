import React, { useState } from "react";
import { getData } from "../../utils/api";
import CocktailCard from "../CocktailCard/CocktailCard";

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
        <button onClick={handleRandomClick}>Get a random cocktail</button>
        <div className="search-cocktail">
          <label>
            Search for a drink
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </label>
        </div>
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
