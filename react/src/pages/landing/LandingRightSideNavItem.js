import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {
    Card,
    Dropdown,
    Nav,
} from 'react-bootstrap';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Login from "../authentication/Login";
import "./styles.css"
import CartNotification from "../../components/navbar/top/CartNotification";
import Flex from "../../components/common/Flex";


const LandingRightSideNavItem = () => {

    return (
        <Nav navbar className="i6 ms-auto">

            <Flex justifyContent={"between"} alignItems={"center"}>
                <CartNotification/>

                <Dropdown className="d-none d-sm-block">
                    <Dropdown.Toggle as={Link} to="#!" className="nav-link fw-semi-bold text-primary">
                        <FontAwesomeIcon icon={faUser} size={"lg"}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dropdown-menu-end dropdown-menu-card mt-0 dropdown-caret dropdown-caret-bg">
                        <Card className="navbar-card-login shadow-none">
                            <Card.Body className="fs--1 fw-normal p-4">
                                <Login/>
                            </Card.Body>
                        </Card>
                    </Dropdown.Menu>
                </Dropdown>
            </Flex>

        </Nav>
    );
};

export default LandingRightSideNavItem;
