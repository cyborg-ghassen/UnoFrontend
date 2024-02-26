import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const CartNotification = () => {
    const bas = useSelector((state) => state.Auth.basket);

    return (
        <Nav.Item as="li" className="d-sm-block">
            <Nav.Link
                as={Link}
                to="/panier"
                className={classNames('px-0  ', {
                    'notification-indicator notification-indicator-warning position-relative notification-indicator-fill':
                    bas?.length
                    
                })}
            >
                <span className="notification-indicator-number text-primary">
                {(bas?.length!==0) &&
                    <>
                    {bas?.length} 
                    </>
                }
          </span>
                <FontAwesomeIcon
                    icon="shopping-cart"
                    transform="shrink-3"
                    className="fs-4 text-primary ms-4 me-2"
                />
            </Nav.Link>
        </Nav.Item>
    );
};

export default CartNotification;
