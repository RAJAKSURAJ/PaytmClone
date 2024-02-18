import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Logo } from "../utilis/constant";
import Form from "react-bootstrap/Form";

function Heading() {
  return (
    <div className="text-bold">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Paytm For Customers</Nav.Link>
              <Nav.Link href="#">paytm for Business</Nav.Link>
              <Nav.Link href="#">Investor Relations</Nav.Link>
              <Nav.Link href="#">Company</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
              <Nav.Link>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Sign In"
                  />
                </Form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Heading;
