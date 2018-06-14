import React, { Component } from 'react';
import '../styles/Styled.css'
// importing all requirments from react strap 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Navigation extends React.Component {
  //  Boiler plate react bootstrap 
  // determins if the toggle should be activated based on state
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* nav bar toggle */}
          <div className="nav--menu">
          <NavbarToggler onClick={this.toggle} />
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav >
              <NavItem>
                {/* Links on the nav bar */}
                <NavLink href='/cookbook'>Home</NavLink>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
              </NavItem>
            </Nav>
            {/* wrapping in the collapse class allows for the nav to collapse under certain media queries */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
