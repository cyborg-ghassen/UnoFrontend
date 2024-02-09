import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import {api} from "../../utils/api";
import ProductGrid from "../products/ProductGrid";
import {Row} from "react-bootstrap";

const MoreProducts = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        await api.get("/product/product/").then(res => setProducts(res?.data?.results))
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <Section>
            <Row>
                {products?.slice(0, 6).map((product, index) =>
                    <ProductGrid
                        product={product}
                        key={product.id}
                        md={6}
                        lg={4}
                        index={index}
                    />
                )}
            </Row>
        </Section>
    )
}

export default MoreProducts