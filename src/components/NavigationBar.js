import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll'
import '../styles/NavigationBar.css'

const NavigationBar = () => {

    return (
        <div>
          <Navbar className="navbar-custom">
              <Container>
              <Navbar.Brand>Crypto Cointry</Navbar.Brand>
              <Nav className="me-auto justify-content-center ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#market">Market</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#discord">Discord</Nav.Link>
              </Nav>
              </Container>
          </Navbar>
        </div>
      );

}

export default NavigationBar
