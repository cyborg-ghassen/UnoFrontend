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
import classNames from 'classnames';
import ProductGrid from './ProductGrid';
import CartModal from '../cart/CartModal';
import usePagination from 'hooks/usePagination';
import Flex from 'components/common/Flex';
import Section from "../../components/common/Section";
import ProductFilters from "./ProductFilters";
import {breakpoints} from "../../helpers/utils";
import {api} from "../../utils/api";
import useQuery from "../../hooks/useQuery";

const Products = () => {
    const [products, setProducts] = useState([])

    const [sortBy, setSortBy] = useState('price');
    const [isAsc, setIsAsc] = useState(true);
    const [productPerPage, setProductPerPage] = useState(6);
    let query = useQuery()
    const getProducts = async () => {
        console.log(query.toString())
        await api.get(`/product/product/?${query.toString()}`).then(res => setProducts(res?.data?.results))
    }

    const {
        paginationState: {
            data: paginatedProducts,
            totalItems,
            itemsPerPage,
            currentPage,
            canNextPage,
            canPreviousPage,
            paginationArray,
            from,
            to
        },
        nextPage,
        prevPage,
        goToPage,
        setItemsPerPage
    } = usePagination(products, productPerPage);

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
                    <Card className="mb-3">
                        <Card.Body>
                            <Row className="flex-between-center">
                                <Col
                                    sm="auto"
                                    as={Flex}
                                    alignItems="center"
                                    className="mb-2 mb-sm-0"
                                >
                                    <Form.Select
                                        size="sm"
                                        value={itemsPerPage}
                                        onChange={({target}) => {
                                            setItemsPerPage(target.value);
                                            setProductPerPage(target.value);
                                        }}
                                        style={{maxWidth: '4.875rem'}}
                                    >
                                        <option value={2}>2</option>
                                        <option value={4}>4</option>
                                        <option value={6}>6</option>
                                        <option value={totalItems}>All</option>
                                    </Form.Select>
                                    <h6 className="mb-0 ms-2">
                                        Showing {from}-{to} of {totalItems} Products
                                    </h6>
                                </Col>
                                <Col sm="auto">
                                    <Row className="gx-2 align-items-center">
                                        <Col xs="auto">
                                            <Form as={Row} className="gx-2">
                                                <Col xs="auto">
                                                    <small>Sort by:</small>
                                                </Col>
                                                <Col xs="auto">
                                                    <InputGroup size="sm">
                                                        <Form.Select
                                                            className="pe-5"
                                                            defaultValue="price"
                                                            onChange={({target}) => setSortBy(target.value)}
                                                        >
                                                            <option value="price">Price</option>
                                                            <option value="rating">Rating</option>
                                                            <option value="review">Review</option>
                                                        </Form.Select>
                                                        <InputGroup.Text
                                                            as={Button}
                                                            variant="link"
                                                            className="border border-300 text-700"
                                                            onClick={() => setIsAsc(!isAsc)}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
                                                            />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </Col>
                                            </Form>
                                        </Col>
                                        <Col xs="auto" className="pe-0">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip style={{position: 'fixed'}}>
                                                        Product
                                                    </Tooltip>
                                                }
                                            >
                                                <Link
                                                    to={`/e-commerce/product/product-${
                                                        'grid'
                                                    }`}
                                                    className="text-600 px-1"
                                                >

                                                </Link>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body
                            className={"pb-0 "}
                        >
                            <Row>
                                {paginatedProducts.map((product, index) =>
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
                            <div>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip style={{position: 'fixed'}}>Prev</Tooltip>}
                                >
                                    <Button
                                        variant="falcon-default"
                                        size="sm"
                                        disabled={!canPreviousPage}
                                        onClick={prevPage}
                                        className="me-2"
                                        trigger="focus"
                                    >
                                        <FontAwesomeIcon icon="chevron-left"/>
                                    </Button>
                                </OverlayTrigger>
                            </div>

                            <ul className="pagination mb-0">
                                {paginationArray.map(page => (
                                    <li
                                        key={page}
                                        className={classNames({active: currentPage === page})}
                                    >
                                        <Button
                                            size="sm"
                                            variant="falcon-default"
                                            className="page me-2"
                                            onClick={() => goToPage(page)}
                                        >
                                            {page}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <OverlayTrigger
                                    trigger="click"
                                    placement="top"
                                    overlay={
                                        <Tooltip style={{position: 'fixed'}} id="button-tooltip-2">
                                            Next
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        variant="falcon-default"
                                        size="sm"
                                        disabled={!canNextPage}
                                        onClick={nextPage}
                                        trigger="focus"
                                    >
                                        <FontAwesomeIcon icon="chevron-right"/>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </Card.Footer>
                    </Card>
                    <CartModal/>
                </Col>
            </Row>
        </Section>
    );
};

export default Products;
