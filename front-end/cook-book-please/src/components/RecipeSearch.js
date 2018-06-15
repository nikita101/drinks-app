import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styled.css'

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
                    <Link to={`/cookbook/${this.state.searchTerm}/${searchedDrinks.drinks[i].idDrink}`} 
                    onClick={() => this.props.openRecipe(searchedDrinks.drinks[i].idDrink)}>
                    {/* recipe name */}
                    <div className="recipe-search--recipetitle">
                        <p>{searchedRecipe.drinks[i].strDrink}</p>
                    </div>
                    {/* recipe image */}
                        <img
                            className="recipe--images"
                            src={searchedRecipe.drinks[i].strDrinkThumb}>
                        </img>
                    </Link>
                </div>
            );
        } else {
            recipesJSX = (<p>What type of ingredients do you have?</p>);
        }

        return (
            <div className="recipe-search">
                <div className="recipe-search__header">
                    {/* <h3>Drinks</h3> */}
                    <div className="recipeWindow recipe-search__scrollbar">
                        {recipesJSX}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeSearch;
