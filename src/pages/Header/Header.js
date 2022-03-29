import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from "react-router-dom";
import useAuth from '../../Hooks/useFirebase/useAuth';
import "./Header.css";
const Header = () => {
  // const { user, logOut } = useAuth();
  // const handleLogOut = () => {
  //   logOut();
  // };
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <h2 className="custom-banner">Educlam</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link className="menu-item" to="/home">
                  Home
                </Link>

                {/* {user?.email && (
                  <Link className="menu-item" to="/services">
                    Services
                  </Link>
                )} */}

                {/* {!user?.email ? (
                  <Link className="menu-item" to="/login">
                    Login
                  </Link>
                ) : (
                  <Button variant="dark" onClick={handleLogOut}>
                    Logout
                  </Button>
                )} */}
                {/* <Navbar.Text className="custom-text">
                  {user.displayName}
                </Navbar.Text> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;