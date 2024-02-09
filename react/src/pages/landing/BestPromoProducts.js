import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import ProductGrid from "../products/ProductGrid";
import SectionHeader from "./SectionHeader";
import {api} from "../../utils/api";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

const BestPromoProducts = () => {
    const [products, setProducts] = useState([])

    const getBestProducts = async () => {
        await api.get("/product/daily_deals/").then(res => setProducts(res?.data))
    }

    useEffect(() => {
        getBestProducts()
    }, []);

    return (
        <Section>
            <SectionHeader
                title="Notre Meilleure Promo"
                subtitle={""}
            />
            <Row>
                
                <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}>
                    {products?.slice(0, 3).map((product, index) =>
                        <SwiperSlide>
                            <ProductGrid
                                product={product}
                                key={product.id}
                                md={6}
                                lg={4}
                                index={index}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Row>
        </Section>
    )
}

export default BestPromoProducts