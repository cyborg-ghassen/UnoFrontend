import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import ProductDetailsMedia from './ProductDetailsMedia';
import ProductDetailsMain from './ProductDetailsMain';
import ProductDetailsFooter from './ProductDetailsFooter';
import CartModal from '../../cart/CartModal';
import Flex from 'components/common/Flex';

const ProductDetails = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([])

  const product = products.find(product => product.id === productId);

  return product && (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <ProductDetailsMedia product={product} />
            </Col>
            <Col lg={6} as={Flex} justifyContent="between" direction="column">
              <ProductDetailsMain
                product={product}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ProductDetailsFooter
                product={product}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <CartModal />
    </>
  )
};

export default ProductDetails;
