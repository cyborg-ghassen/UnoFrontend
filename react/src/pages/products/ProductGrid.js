import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import {Link} from 'react-router-dom';
import {Button, Col, Card, CardFooter} from 'react-bootstrap';
import classNames from 'classnames';
import ProductImage from './ProductImage';
import "./style.css"
import {setNewItemToBasket} from 'reduxStores.js/authSlice';
import {useDispatch} from 'react-redux';

const ProductGrid = ({product, index, ...rest}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        dispatch(setNewItemToBasket({id: parseInt(product?.id), Quantity: 1}))


    }
    return (
        <Col className="mb-4 h-75" lg={3} {...rest}>
            <Flex
                direction="column"
                justifyContent="between"
                className="border rounded-1"
            >
                <Card style={
                    {
                        minWidth: "180px",
                    }
                }
                >
                    <div className="overflow-hidden">
                        <ProductImage
                            // className="mt-3"
                            name={product?.name}
                            id={product?.id}
                            files={product?.image}
                            product={product}
                            layout="grid"
                        />
                        <div className="i10 px-3 ">
                            <h5 className="fs-0">
                                <a
                                    className="text-dark"
                                    href={`/products/${product?.id}`}
                                >
                                    {product?.name}
                                </a>
                            </h5>
                            <p className="fs--1">
                                {product?.category_names?.map((c, i) =>
                                    <>
                                        <Link to={`/products?category=${product?.category[i]}`}
                                              className="text-500">
                                            {c}
                                        </Link> {'  '}
                                    </>
                                )}
                            </p>
                            <h5 className="fs-md-2 text-warning mb-0 d-flex align-items-center" style={{minHeight: "30px"}}>
                                {product?.promotion === 0 && `${product?.price_promotion} TND`}
                            </h5>
                            <p className="fs--1 mb-1">
                                Stock:{' '}
                                <strong
                                    className={classNames({
                                        'text-success': product?.stock > 0,
                                        'text-danger': product?.stock < 0
                                    })}
                                >
                                    {product?.stock > 0 ? 'En stock' : 'Hors stock'}
                                </strong>
                            </p>
                            <Button onClick={handleAddToCart} className='pt-1 pr-2 pl-2 btn-primary '>Ajouter
                                au panier</Button>
                        </div>
                    </div>
                    {/* <Flex alignItems="center" className="px-3">
          <div className="flex-1">
            <StarRating readonly rating={product?.reviews} />
            <span className="ms-1">({product?.reviews})</span>
          </div>
          
        </Flex> */}

                    < CardFooter></CardFooter>
                </Card>

            </Flex>
        </Col>
    );
};

ProductGrid.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        features: PropTypes.array,
        price: PropTypes.number.isRequired,
        discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        shippingCost: PropTypes.number,
        rating: PropTypes.number,
        totalReview: PropTypes.number,
        isInStock: PropTypes.bool,
        isNew: PropTypes.bool,
        files: PropTypes.arrayOf(PropTypes.object).isRequired
    })
};

export default ProductGrid;
