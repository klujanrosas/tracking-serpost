import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">Tracking Serpost</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/klujanrosas">@klujanrosas</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
