import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import ProductDetailsMedia from './ProductDetailsMedia';
import ProductDetailsMain from './ProductDetailsMain';
import CartModal from '../../cart/CartModal';
import Flex from 'components/common/Flex';
import {api} from "../../../utils/api";
import { useDispatch } from 'react-redux';
import { setNewItemToBasket } from 'reduxStores.js/authSlice';
import ProductGrid from '../ProductGrid';
import Section from 'components/common/Section';

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
      <RelatedProduct id={id} />

    </>
  )
};
const RelatedProduct=({id})=>{
  const [products,setProduct]=useState([])
  const navigate=useNavigate();
  const handleNavigationClick=()=>{
   // navigate("/products")
    window.location="/products"
  }
  const getProduct = async () => {
    await api.get(`/product/related_products/?product=${id}`).then(res => setProduct(res?.data))
  }
  useEffect(()=>{
    getProduct()


  },[])

  return(

    <Section fluid>
            <Row className={"g-3" }>
                
                <Col xl={12}>
                    <Card>
                        <Card.Body
                            className={"pb-0 "}
                        >
                            <Row>
                                {products?.slice(0,3).map((product, index) =>
                                    <ProductGrid
                                        product={product}
                                        key={product.id}
                                        md={6}
                                        lg={4}
                                        index={index}
                                    />
                                )}
                            </Row>
                            <Flex className={"pb-2 pt-2"} justifyContent={"center"} alignItems={"center"}>
                                  <Button onClick={handleNavigationClick} as={Link} size='sm'>Voir Plus</Button>
                            </Flex>
                        </Card.Body>
                    </Card>
                    <CartModal/>
                </Col>
            </Row>
        </Section>
  )
}

export default ProductDetails;
