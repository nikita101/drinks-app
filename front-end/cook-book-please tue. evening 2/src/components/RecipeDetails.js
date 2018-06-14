import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Styled.css'


const RecipeDetails = (props) => {
  const { drinkData, currentSearchTerm } = props;
  return (

    <div className="recipedetails">
      <Link to={`/cookbook/${props.currentSearchTerm}`}>
        <button>Back</button>
      </Link>
      <img
        className="recipe-details_image"
        src={drinkData.strDrinkThumb} />
      <p className="recipe-details_title">
        {drinkData.strDrink}</p>
      <div className="recipe-details_body">  
      <p>{drinkData.strCategory}</p>
      <p>{drinkData.strAlcoholic}</p>
      <p>{drinkData.strGlass}</p>
      <p>{drinkData.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
