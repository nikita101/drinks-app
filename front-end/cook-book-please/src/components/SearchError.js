import React, { Component } from 'react';
import   { NavLink } from 'reactstrap';
import '../styles/Styled.css'

console.log("i ran ooooo")

class SearchError extends Component {

render () {

return (
  <div className="container search-error">
    <h3>Yikes! That ingredient was not found. Please search again.</h3>
    <NavLink href='/cookbook'>Search again</NavLink>
  </div>
);
}
}
export default SearchError;