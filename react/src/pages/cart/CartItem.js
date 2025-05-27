import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import QuantityController from '../products/QuantityController';
import {useDispatch} from 'react-redux';
import {deleteOneItem, updateQuatity} from 'reduxStores.js/authSlice';

const CartItem = ({product, getItems}) => {
    console.log("AAAAAAAA")
    console.log(product)
    const dispatch = useDispatch();


    // const { id, files, name, quantity, totalPrice } = product;
    const [Quantity, setQuantity] = useState(product?.quantity)

    const deleteFormBas = (id) => {
        return new Promise(async (resolve, reject) => {
            await dispatch(deleteOneItem({id: id}))
            resolve()
        })
    }
    const handleRemove = async (id) => {
        deleteFormBas(id)
    };

    const handleIncrease = () => {
        setQuantity(prevState => parseInt(prevState + 1))
    };

    const handleDecrease = () => {
            setQuantity(prevState => parseInt(prevState - 1))
    };
    const handleDispatch = async () => {
        await dispatch(updateQuatity({id: product?.product?.id, quantity: Quantity}));
    }
    useEffect(() => {
        handleDispatch()
        // eslint-disable-next-line
    }, [Quantity])

    const handleChange = (e) => {
        setQuantity(parseInt(e.target.value))
    };
    return (
        <Row className="gx-card mx-0 align-items-center border-bottom border-200">
            <Col xs={8} className="py-3">
                <div className="d-flex align-items-center">
                    <Link to={`/products/${product?.product?.id}`}>
                        <img
                            src={`https://api.uno.futuretech.tn${product?.product?.image}`}
                            width="60"
                            alt={product?.product?.name}
                            className="img-fluid rounded-1 me-3 d-none d-md-block"
                        />
                    </Link>
                    <div className="flex-1">
                        <h5 className="fs-0">
                            <Link
                                to={`/products/${product?.product?.id}`}
                                className="text-900"
                            >
                                {product?.product?.name}
                            </Link>
                        </h5>
                        <div className="fs--2 fs-md--1">
                            <Button
                                variant="link"
                                size="sm"
                                className="text-danger fs--2 fs-md--1 fw-normal p-0"
                                onClick={() => handleRemove(product?.product?.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={4} className="py-3">
                <Row className="align-items-center">
                    <Col
                        md={{span: 8, order: 0}}
                        xs={{order: 1}}
                        className="d-flex justify-content-end justify-content-md-center"
                    >
                        <div>
                            <QuantityController
                                quantity={Quantity}
                                handleChange={handleChange}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                                btnClassName="px-2"
                            />
                        </div>
                    </Col>
                    <Col
                        md={{span: 4, order: 1}}
                        xs={{order: 0}}
                        className="text-end ps-0 mb-2 mb-md-0 text-600"
                    >
                        {parseFloat(product?.individual_price).toFixed(3)} TND
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        files: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired
    })
};

export default CartItem;
