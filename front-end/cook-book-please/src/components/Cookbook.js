import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails';
import { Route } from 'react-router-dom';
import '../styles/Styled.css'
import SearchError from '../components/SearchError'
import Splash from '../components/Splash'

class Cookbook extends Component {
  state = {
    currentSearchTerm: '',
    searchedDrinks: {},
    drinkData: [],
    selectedDrink: '',
    searchError: false
  };

  openRecipe = (id) => {
    // api call is made here
    const API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(API)
      // api response
      //.then(response => console.log(response))
      .then(response => response.json())
      .then(data => {
        // setting state with slectedDrink id & it's data.
        this.setState({ selectedDrink: id, drinkData: data.drinks[0] })
      })
  }

  onChange = (e, term) => {
    this.setState({ currentSearchTerm: e.target.value });
  }

  handleSubmit = (e) => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.currentSearchTerm}`;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ searchedDrinks: data })
        // changing url using JS instead of anchor tag
        this.props.history.push(`/cookbook/${this.state.currentSearchTerm}`)
      }).catch((err) => {
        this.setState({ searchError: true})
      });
    e.preventDefault();
  }

componentWillUpdate = () =>{
  ()=>this.setState ({
    searchError : false
  })
}
  render() {
    const { match, location } = this.props;
    let selectedDrinkDetails;
    if (this.state.selectedDrink !== ''
      &&
      location.pathname !== "/cookbook"
    ) {
      selectedDrinkDetails =
        <Route
          path={'/cookbook/:searchTerm/:selectedDrink'}
          render={() => <RecipeDetails
            drinkData={this.state.drinkData}
            currentSearchTerm={this.state.currentSearchTerm}
          />}
        />
    }

    if (this.state.searchError){
      <SearchError />
    }
    console.log(this.state.searchError)

    return (
      <div className="fade-in one">
        {/* video background */}
        <div id="video-container">
          <video id="video" muted loop autoPlay>               
          {/* <source src="http://muloux.com/wp-content/uploads/2018/05/White-Smoke.mp4" /> */}
            {/* <source src="http://muloux.com/wp-content/uploads/2018/06/Pexels-Videos-5009.mp4" /> */}
            <source src="http://muloux.com/wp-content/uploads/2018/06/Drink-Wine.mp4" />

            Your browser does not support the video tag.
          </video>
          <div>
            {/* calling on nav component */}
            <div className="nav-parent">
              <Navigation />
              {this.state.searchError ? <SearchError />: 
              <div id="search--bar">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.currentSearchTerm} placeholder="Search.." />
                  <input type="submit" value="Submit" />
                </form>
              </div>}
            </div>
            <div className="container cookbook-parent">
              <div className="row equal">
                <div className="cookbook">
                  <div className='col-md-4'>
                    <div className="recipe-search-parent">
                      <Route
                        path={`/cookbook/:currentSearchTerm`}
                        render={() => (
                          <RecipeSearch
                            currentSearchTerm={this.state.currentSearchTerm}
                            searchedDrinks={this.state.searchedDrinks}
                            openRecipe={this.openRecipe}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    {selectedDrinkDetails}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Cookbook;
