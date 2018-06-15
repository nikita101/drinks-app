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
    <div className="recipe-details-parent">
      <video id="video" muted loop autoPlay>
        <source src="http://muloux.com/wp-content/uploads/2018/05/White-Smoke.mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="recipe-details">
        <Link id="recipe-details_close_tab" to={`/cookbook/${props.currentSearchTerm}`}>
          X
        </Link>
        <p className="recipe-details_title">
          {drinkData.strDrink}</p>
        <img
          className="recipe-details_image"
          src={drinkData.strDrinkThumb} />
        <div className="recipe-details_body container">
          <div className="row recipe-details_seperator">
            <div className="recipe-details_bullets col-lg">
            <div className="recipe-details_details_title"> Details</div>
              <div><span className="recipe-details_details_lable">Category:</span> <span></span>{drinkData.strCategory}</div>
              <div><span className="recipe-details_details_lable">Alcoholic:</span> <span></span>{drinkData.strAlcoholic}</div>
              <div><span className="recipe-details_details_lable">Served in:</span> <span></span>{drinkData.strGlass}</div>
            </div>
            <div className="recipe-details_ingredients">
            <div className="recipe-details_ingredients_title"> Ingredients</div>
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
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
