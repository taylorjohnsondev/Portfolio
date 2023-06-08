import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/CSS/header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Socials from "./Socials";
function Header() {
  const navRef = useRef();

  const showHeader = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="header">
      <Navbar ref={navRef} bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="/">Taylor Johnson</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-center" navbarScroll>
            <Nav.Link as={Link} to="/resume" onClick={showHeader}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={showHeader}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Socials />

        <button className="nav-btn" onClick={showHeader}>
          <FaTimes />
        </button>
      </Navbar>
      <button className="nav-btn" onClick={showHeader}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
