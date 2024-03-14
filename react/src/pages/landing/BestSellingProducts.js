import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import ProductGrid from "../products/ProductGrid";
import SectionHeader from "./SectionHeader";
import {api} from "../../utils/api";

const BestSellingProducts = () => {
    const [products, setProducts] = useState([])

    const getBestProducts = async () => {
        await api.get("/product/best_products/").then(res => setProducts(res?.data))
    }

    useEffect(() => {
        getBestProducts()
    }, []);

    return (
        <Section fluid>
            <SectionHeader
                title="Meilleure Vente"
                subtitle={""}
            />
            <Row>
                {products?.slice(0, 4).map((product, index) =>
                    <ProductGrid
                        product={product}
                        key={product.id}
                        md={6}
                        lg={3}
                        index={index}
                    />
                )}
            </Row>
        </Section>
    )
}

export default BestSellingProducts