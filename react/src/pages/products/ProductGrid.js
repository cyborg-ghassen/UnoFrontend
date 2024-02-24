import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import { Button, Col,  Card,CardFooter } from 'react-bootstrap';
import classNames from 'classnames';
import ProductImage from './ProductImage';
import "./style.css"
import { setNewItemToBasket } from 'reduxStores.js/authSlice';
import { useDispatch } from 'react-redux';

const ProductGrid = ({ product,key, ...rest }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    
    dispatch(setNewItemToBasket({id: parseInt(product?.id), Quantity: 1}))

      
  }

  return (
    <Col className="mb-4" lg={3} {...rest}>
      <Flex
        direction="column"
        justifyContent="between"
        className="border rounded-1 h-100 "
      >
        <Card style={
          {
            minWidth:"300px"
          }
        }
          >
        <div className="overflow-hidden">
          <ProductImage
            // className="mt-3"
            name={product?.name}
            id={product?.id}
            files={product?.image}
            layout="grid"
          />
          <div className="i10 p-3 ">
            <h5 className="fs-0">
              <Link
                className="text-dark"
                to={`/products/${product?.id}`}
              >
                {product?.name}
              </Link>
            </h5>
            <p className="fs--1 mb-3">
              <Link to="#!" className="text-500">
                {product?.category_names?.map(category => <>{category}, </>)}
              </Link>
            </p>
            <h5 className="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">
              {`$${product?.price_promotion}`}
              {product?.price_promotion !== product?.price && <del className="ms-2 fs--1 text-500">${product?.price}</del>}
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
            <Button onClick={handleAddToCart} className='mt-4 pt-2 pb-2 pr-2 pl-2 btn-primary '>Ajouter au panier</Button>
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
