import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import {
    Nav,
} from 'react-bootstrap';
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";

const LandingRightSideNavItem = () => {


    const navigate = useNavigate()

    return (
        <Nav navbar className="ms-auto">

            <Nav.Item>
                <Nav.Link
                    className={"text-primary me-2"}
                    as={Link}
                    to="#contact"
                >
                    <FontAwesomeIcon icon={faCartShopping} size={"lg"} />
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    as={Link}
                    className={"bg-transparent btn-primary text-primary ms-2"}
                    onClick={() => navigate('/authentication/card/login')}
                >
                    <FontAwesomeIcon icon={faUser} size={"lg"} />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default LandingRightSideNavItem;
