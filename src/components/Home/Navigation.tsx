import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand>
          <NavLink className="navbar-brand" to="/">
            PY O2
          </NavLink>
        </NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/home"
            >
              FAKE NEWS DETECTOR
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/docs"
            >
              DOCS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/about"
            >
              ABOUT
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
