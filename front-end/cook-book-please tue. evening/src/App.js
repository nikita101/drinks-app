import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Cookbook from "./components/Cookbook";
import Splash from './components/Splash';
import './styles/Styled.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
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