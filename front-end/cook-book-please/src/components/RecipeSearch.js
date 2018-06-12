import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails'
import { Link, Switch, Route } from 'react-router-dom';
import '../styles/App.css'

class RecipeSearch extends Component {
    state = {
        searchedRecipe: [],
        searchTerm: '',
        selectedDrink: '',
        drinkData: []
    };
    static getDerivedStateFromProps(props) {
        return ({
            searchTerm: props.currentSearchTerm,
            searchedRecipe: props.searchedDrinks
        })
    }

    render() {
        const { ...match } = this.props;
        const { searchedDrinks } = this.props;
        const { searchedRecipe } = this.state;

        // mapping all the found recipes to the page.
        let recipesJSX;
        if (searchedRecipe !== {} && searchedRecipe.drinks) {
            recipesJSX = searchedRecipe.drinks.map((item, i) =>
                // actual recipe
                <div key={i}>
                    {/* recipe name */}
                    <p>{searchedRecipe.drinks[i].strDrink}</p>
                    {/* recipe image */}
                    <Link to={`/cookbook/${this.state.searchTerm}/${searchedDrinks.drinks[i].idDrink}`} >
                    <img
                        onClick={() => this.props.openRecipe(searchedDrinks.drinks[i].idDrink)}
                        className="recipe--images"
                        src={searchedRecipe.drinks[i].strDrinkThumb}
                    >
                    </img>
                    </Link>
                </div>
            );
        } else {
            recipesJSX = (<p>What type of ingredients do you have?</p>);
        }

        return (
            <div className="recipe-search">
                <div className="recipeWindow">
                    {recipesJSX}
                </div>
            </div>
        );
    }
}

export default RecipeSearch;
