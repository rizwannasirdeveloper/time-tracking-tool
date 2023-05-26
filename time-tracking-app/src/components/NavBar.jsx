import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand style={{ color: "white", marginLeft: "25px", fontSize:"5vh" }}>
        Time Tracking
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse
        id="navbar-nav"
        style={{ float: "right", alignItems: "right", justifyContent: "right", marginRight:"25px" }}
      >
        <Nav className="ml-auto" >
          <Link to="/time-entry-form" className="nav-link">
            Add Time Entry
          </Link>
          <Link to="/time-entry-list" className="nav-link">
            Time Entry List
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
