import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Logo = require("../../images/NCLogo.png");

const CustomNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light fixed="top" expand="md" className="removeShadow">
        <NavbarBrand href="/">
          {/* nipit  */}
          <img src={Logo} width="100" height="30" />
        {/* <span style={{background: "#79252f", color: "white", padding: "5px"}}>consults</span> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="navSpacing">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="navSpacing">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem className="navSpacing">
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem className="navSpacing">
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavBar;