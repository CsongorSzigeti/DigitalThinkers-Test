import React from "react";
import PropTypes from "prop-types";

const CocktailCard = ({ name, instructions, thumbnail }) => {
  return (
    <div className="cocktail-card">
      <h1 className="cocktail-card-header">{name}</h1>
      <div className="cocktail-instructions">{instructions}</div>
      <img className="cocktail-thumbnail" src={thumbnail} alt=""></img>
    </div>
  );
};

// This is for checking the prop types if they are correct.
CocktailCard.propTypes = {
  name: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default CocktailCard;
