import React, {useEffect, useState} from 'react';
import {
    Card,
    Col,
    Row,
} from 'react-bootstrap';
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
    let query = useQuery()
    const getProducts = async (q) => {
        await api.get(`/product/product/?${q.toString()}`).then(res => {
            setProducts(res?.data?.results)
            setCount(res?.data?.count)
        })
    }

    useEffect(() => {
        getProducts(query)
        // eslint-disable-next-line
    }, [query.get('category')]);

    return (
        <Section fluid>
            <Row className={"g-3" }>
                <Col xl={3}>
                    <ProductFilters getProducts={getProducts}/>
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
