import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const CartNotification = () => {
    const bas = useSelector((state) => state.Auth.basket);

    return (
        <Nav.Item as="li" className="d-none d-sm-block">
            <Nav.Link
                as={Link}
                to="/cart"
                className={classNames('px-0 mb-3', {
                    'notification-indicator notification-indicator-warning position-relative notification-indicator-fill':
                    bas?.length
                })}
            >
                {bas?.length && (
                    <span className="notification-indicator-number text-primary">
                {bas?.length}
          </span>
                )}
                <FontAwesomeIcon
                    icon="shopping-cart"
                    transform="shrink-7"
                    className="fs-4 text-primary"
                />
            </Nav.Link>
        </Nav.Item>
    );
};

export default CartNotification;