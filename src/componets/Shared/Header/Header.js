import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };

  const logo1 =
    "http://themes.potenzaglobalsolutions.com/html/cardealer/images/logo-light.png";

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img style={{ height: "30px" }} src={logo1} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Login user see */}
          {user?.uid ? (
            <Nav>
              <Nav.Link as={Link} to="/manageInventories">
                ManageItems
              </Nav.Link>
              <Nav.Link as={Link} to="/add/items">
                AddItems
              </Nav.Link>
              <Nav.Link as={Link} to="/myitems">
                MyItems
              </Nav.Link>
              <Nav.Link>
                <button
                  onClick={() => logOut()}
                  className=" ms-5 bg-danger text-white rounded fs-5"
                >
                  LogOut
                </button>
                <span className="mx-3 ">{user.email}</span>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/bBaner">
                Normal
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link> */}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
