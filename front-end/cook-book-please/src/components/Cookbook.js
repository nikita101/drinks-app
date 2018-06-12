import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetails';
import { Link, Switch, Route } from 'react-router-dom';

class Cookbook extends Component {
  state = {
    currentSearchTerm: '',
    searchedDrinks: {},
    drinkData: [],
    selectedDrink: ''
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

  componentWillMount = () => {

  }

  handleSubmit = (e) => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.currentSearchTerm}`;
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ searchedDrinks: data }));
    e.preventDefault();
  }

  render() {
    console.log(this.state.drinkData)
    console.log(this.state.selectedDrink)
    console.log(this.state.searchedDrinks)
    console.log(this.state.currentSearchTerm)

    let selectedDrinkDetails;
    if (this.state.selectedDrink !== '') {
      selectedDrinkDetails =
        <RecipeDetails
          drinkData={this.state.drinkData}
        />
    }

    const { match } = this.props;
    return (
      <div>
        {/* video background */}
        <div id="video-container">
          <video id="video" muted loop autoPlay>
            <source src="http://muloux.com/wp-content/uploads/2018/05/Aerial-Shot-Of-City.mp4" />
            Your browser does not support the video tag.
          </video>
          {/* calling on nav component */}
          <div>
            <Nav />
            <div className="cookbook">
              {/* <Switch> */}
                <Route
                  path={`/cookbook`}
                  render={() => (
                    <RecipeSearch
                      currentSearchTerm={this.state.currentSearchTerm}
                      searchedDrinks={this.state.searchedDrinks}
                      openRecipe={this.openRecipe}
                    />
                  )}
                />
                
              {/* </Switch> */}
              {selectedDrinkDetails}
              <div id="search--bar">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.currentSearchTerm} placeholder="Search.." />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
