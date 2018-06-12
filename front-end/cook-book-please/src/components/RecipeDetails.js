import React from 'react';
import { Link } from "react-router-dom";


const RecipeDetails = (props) => {
  const { drinkData } = props;

  return (

    <div className="recipedetails">
      <Link to="/cookbook">
        <button>Back</button>
      </Link>
      <img
        className="recipe--details_image"
        src={drinkData.strDrinkThumb} />
      <p>{drinkData.strDrink}</p>
      <p>{drinkData.strCategory}</p>
      <p>{drinkData.strAlcoholic}</p>
      <p>{drinkData.strGlass}</p>
      <p>{drinkData.strInstructions}</p>
    </div>
  );

}

export default RecipeDetails;
