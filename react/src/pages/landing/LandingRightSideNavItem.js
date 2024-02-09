import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import {
    Card,
    Dropdown,
    Nav,
} from 'react-bootstrap';
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import Login from "../authentication/Login";

const LandingRightSideNavItem = () => {

    return (
        <Nav navbar className="ms-auto">

            <Nav.Item>
                <Nav.Link
                    className={"text-primary me-2"}
                    as={Link}
                    to="#contact"
                >
                    <FontAwesomeIcon icon={faCartShopping} size={"lg"}/>
                </Nav.Link>
            </Nav.Item>

            <Dropdown>
                <Dropdown.Toggle as={Link} to="#!" className="nav-link fw-semi-bold">
                    <FontAwesomeIcon icon={faUser} size={"lg"} className={"text-primary"} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end dropdown-menu-card mt-0 dropdown-caret dropdown-caret-bg">
                    <Card className="navbar-card-login shadow-none">
                        <Card.Body className="fs--1 fw-normal p-4">
                            <Login/>
                        </Card.Body>
                    </Card>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    );
};

export default LandingRightSideNavItem;
