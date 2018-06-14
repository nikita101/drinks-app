import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Styled.css'


const RecipeDetails = (props) => {
  const { drinkData } = props;
  console.log(drinkData)

  for (let ingredientName of Object.values(drinkData)) {
    console.log(ingredientName)
  }

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
        <div className="recipe-details_instructions_title"> Ingredients</div>
        <p>{drinkData.strMeasure1}<span></span>{drinkData.strIngredient1}</p>
        <p>{drinkData.strMeasure2}<span></span>{drinkData.strIngredient2}</p>
        <p>{drinkData.strMeasure3}<span></span>{drinkData.strIngredient3}</p>
        <p>{drinkData.strMeasure4}<span></span>{drinkData.strIngredient4}</p>
        <p>{drinkData.strMeasure5}<span></span>{drinkData.strIngredient5}</p>
        <p>{drinkData.strMeasure6}<span></span>{drinkData.strIngredient6}</p>
        <div className="recipe-details_instructions">
          <div className="recipe-details_instructions_title"> Instructions</div>
          <p>{drinkData.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
