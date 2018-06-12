import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Cookbook from "./components/Cookbook";
import Splash from './components/Splash';
import './styles/App.css';
import RecipeSearch from "./components/RecipeSearch";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          {/* <Route to={'/'} component={Cookbook} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={()=>(<Splash />)}
            />
            <Route
              path="/Cookbook"
              render={routeProps => <Cookbook 
              {...routeProps} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;