import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


class ElmoNav extends React.Component {
  render() {
    let firstNav = Array.from(this.props.firstNav);
    let secondNav = Array.from(this.props.secondNav);

    console.log(firstNav[0])
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ELMO Automations</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {firstNav.map((item, i) => {
          return (<Nav.Link href={item.href}>{item.text}</Nav.Link>);
        })}
        </Nav>
        <Nav>
        {secondNav.map((item, i) => {          
           return (<Nav.Link href={item.href}>{item.text}</Nav.Link>);
        })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
      
}

export default ElmoNav;
