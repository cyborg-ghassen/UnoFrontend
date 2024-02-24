import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import ProductDetailsMedia from './ProductDetailsMedia';
import ProductDetailsMain from './ProductDetailsMain';
import CartModal from '../../cart/CartModal';
import Flex from 'components/common/Flex';
import {api} from "../../../utils/api";
import { useDispatch } from 'react-redux';
import { setNewItemToBasket } from 'reduxStores.js/authSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [Quantity, setQuantity] = useState(1)
  const { id } = useParams();

  const [product, setProduct] = useState({})
  const setToBacket = () => {
    dispatch(setNewItemToBasket({id: parseInt(id), Quantity: parseInt(Quantity)}))
  
};
  const getProduct = async () => {
    await api.get(`/product/product/${id}/`).then(res => setProduct(res?.data))
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line
  }, []);

  return product && (
    <>
      <Card className={"mb-6"}>
        <Card.Body>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <ProductDetailsMedia product={product} />
            </Col>
            <Col lg={6} as={Flex} justifyContent="between" direction="column">
              <ProductDetailsMain
                setQuantity={setQuantity}
                setToBacket={setToBacket}
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
