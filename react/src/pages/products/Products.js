import React, {useEffect, useState} from 'react';
import {
    Card,
    Col,
    Form,
    OverlayTrigger,
    Row,
    Tooltip,
    Button,
    InputGroup
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ProductGrid from './ProductGrid';
import CartModal from '../cart/CartModal';
import Section from "../../components/common/Section";
import ProductFilters from "./ProductFilters"
import {api} from "../../utils/api";
import useQuery from "../../hooks/useQuery";
import AdvanceTablePagination from "../../components/common/AdvanceTablePagination";

const Products = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(1)
    const [sortBy, setSortBy] = useState('price');
    const [isAsc, setIsAsc] = useState(true);
    let query = useQuery()
    const getProducts = async () => {
<<<<<<< HEAD
        console.log(query.toString())
        await api.get(`/product/product/?${query.toString()}`).then(res => setProducts(res?.data?.results))
=======
        await api.get(`/product/product/?${query.toString()}`).then(res => {
            setProducts(res?.data?.results)
            setCount(res?.data?.count)
        })
>>>>>>> 355b1459d84d62632c97effecbee595e4d7371a3
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <Section fluid>
            <Row className={"g-3" }>
                <Col xl={3}>
                    <ProductFilters/>
                </Col>
                <Col xl={9}>
                    <Card>
                        <Card.Body
                            className={"pb-0 "}
                        >
                            <Row>
                                {products?.map((product, index) =>
                                    <ProductGrid
                                        product={product}
                                        key={product.id}
                                        md={6}
                                        lg={4}
                                        index={index}
                                    />
                                )}
                            </Row>
                        </Card.Body>
                        <Card.Footer
                        >
                            <AdvanceTablePagination
                                length={products?.length}
                                itemsPerPage={12}
                                fetch={getProducts}
                                query={query}
                                count={count}
                            />
                        </Card.Footer>
                    </Card>
                    <CartModal/>
                </Col>
            </Row>
        </Section>
    );
};

export default Products;
