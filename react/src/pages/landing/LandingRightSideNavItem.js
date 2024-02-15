import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {
    Card,
    Dropdown,
    Nav,
} from 'react-bootstrap';
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import Login from "../authentication/Login";
import "./styles.css"
import CartNotification from "../../components/navbar/top/CartNotification";
import Flex from "../../components/common/Flex";
import {useDispatch, useSelector} from "react-redux";
import { resetBasket, setFalse } from 'reduxStores.js/authSlice';


const LandingRightSideNavItem = () => {
    const authOrNot = useSelector((state) => state.Auth.value);
    const dispatch=useDispatch()

    const LogOut=async ()=>{
        localStorage.removeItem("Token")
        await dispatch(setFalse())
        await dispatch(resetBasket())
        // navigate('/home')
        window.location.href = '/';
    }
    return (
        <Nav navbar className="i6 ms-auto">

            <Flex justifyContent={"between"} alignItems={"center"}>
                {authOrNot && 
                <>
                <CartNotification/>
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    onClick={LogOut}
                    transform="shrink-7"
                    className="fs-4 text-primary"
                />
                </>
                }
                {!authOrNot &&
                
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
                }
            </Flex>

        </Nav>
    );
};

export default LandingRightSideNavItem;
