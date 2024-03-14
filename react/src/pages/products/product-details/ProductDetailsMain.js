import classNames from 'classnames';
import IconButton from 'components/common/IconButton';
import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRating from 'components/common/StarRating';
import QuantityController from '../QuantityController';

const ProductDetailsMain = ({product,setQuantity,setToBacket}) => {

    const [productCount, setProductCount] = useState(1);

    const handleQuantityChange = e => {
        setProductCount(parseInt(e.target.value < 1 ? 1 : e.target.value));
        setQuantity(parseInt(e.target.value < 1 ? 1 : e.target.value));
    };

    const handleQuantityIncrease = () => {
        setProductCount(productCount + 1);
        setQuantity(productCount + 1);
    };

    const handleQuantityDecrease = () => {
        productCount > 1 && setProductCount(productCount - 1);
        productCount > 1 && setQuantity(productCount - 1);
    };


    useEffect(()=>{

    },[productCount])

    return (
        <>
            <h5>{product?.name}</h5>
            <div>
                {product?.category_names?.map((item, index) => (
                    <>
                        <Link to={`/products?category=${product?.category[index]}`} className="fs--1">
                            {item}
                        </Link> {index === product?.category_names?.length && '|'}
                    </>
                ))}
            </div>
            <div className="fs--2 mb-3 d-inline-block">
                <StarRating readonly rating={product?.reviews}/>
                <span className="ms-1 text-600">({product?.reviews})</span>
            </div>
            {product?.description && <p className="fs--1">{product?.description}</p>}
            <h4 className="d-flex align-items-center">
        <span className="text-warning me-2">
          {`${product?.price_promotion ? product?.price_promotion : product?.price_promotion} TND`}
        </span>
                {product?.price_promotion !== product?.price && (
                    <span className="me-1 fs--1 text-500">
            <del className="me-1">{`${product?.price} TND`}</del>
            <strong>-{product?.promotion}%</strong>
          </span>
                )}
            </h4>
            <p className="fs--1">
                Stock:{' '}
                <strong
                    className={classNames({
                        'text-success': product?.stock > 0,
                        'text-danger': product?.stock < 0
                    })}
                >
                    {product?.stock > 0 ? 'En Stock' : 'Hors Stock'}
                </strong>
            </p>
            {product?.tags && (
                <p className="fs--1 mb-3">
                    Tags:
                    {product?.tags?.map((tag, index) => (
                        <Link
                            to="#!"
                            key={tag}
                            className={classNames({
                                'ms-2': index === 0,
                                'ms-1': index > 0
                            })}
                        >
                            {tag},
                        </Link>
                    ))}
                </p>
            )}
            <Row>
                <Col xs="auto" className="pe-0">
                    <div className="">
                        <QuantityController
                            quantity={productCount}
                            setQuantity={setQuantity}
                            handleChange={handleQuantityChange}
                            handleIncrease={handleQuantityIncrease}
                            handleDecrease={handleQuantityDecrease}
                        />
                    </div>
                </Col>
                <Col xs="auto" className="px-2 px-md-3">
                    <IconButton
                        iconClassName="me-sm-2"
                        variant="primary"
                        size="sm"
                        icon="cart-plus"
                        onClick={async() =>{
                           await setQuantity(productCount);
                           await  setToBacket()}
                        }
                    >
                        <span className="d-none d-sm-inline-block">Ajouter au panier</span>
                    </IconButton>
                </Col>
            </Row>
        </>
    );
};

ProductDetailsMain.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        shippingCost: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        totalReview: PropTypes.number.isRequired,
        isInStock: PropTypes.bool.isRequired,
        shortDescription: PropTypes.string,
        tags: PropTypes.array,
        favorite: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
};

export default ProductDetailsMain;
