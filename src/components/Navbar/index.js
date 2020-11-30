import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/style/navbar.css';
import {Link} from 'react-router-dom';
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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar  expand="md">
        <NavbarBrand>
        <Link to="/" >AIPT&T</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Offfices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Testimony</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Team</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/components/">Contact</NavLink>
            </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
    
  );
}

export default Example;