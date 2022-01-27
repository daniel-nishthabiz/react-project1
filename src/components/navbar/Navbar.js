import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

import logo from "../../images/logo.png";
import { forwardRef } from "react";

const NavLink = ({ children, href, ...rest }) => {
    const { pathname } = useLocation();
    return (
        <LinkContainer to={href} className={href === pathname ? styles.active : ""}>
            <Nav.Link className={styles.navlink} {...rest}>
                {children}
            </Nav.Link>
        </LinkContainer>
    );
};

const Header = forwardRef((_, ref) => {
    return (
        <Navbar ref={ref} bg="dark" className={styles.navbar} expand="lg">
            <LinkContainer to="">
                <Navbar.Brand className={styles.navlink}>
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    Daniel Raybone
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.nav}>
                <Nav className="me-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="https://github.com/iAverages">Github</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
});

export default Header;
