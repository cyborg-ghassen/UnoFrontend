import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import ProductGrid from "../products/ProductGrid";
import SectionHeader from "./SectionHeader";
import {api} from "../../utils/api";
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';
import Flex from "../../components/common/Flex";

const BestPromoProducts = () => {
    const [products, setProducts] = useState([])
    const [nav, setNav] = useState()
    const [settings, setSettings] = useState([])

    const getSettings = async () => {
        await api.get("/setting/site/").then(res => setSettings(res?.data?.results))
    }

    const getBestProducts = async () => {
        await api.get("/product/daily_deals/").then(res => setProducts(res?.data))
    }

    useEffect(() => {
        getSettings()
    }, []);

    useEffect(() => {
        getBestProducts()

    }, []);
    let slider;
    useEffect(() => {
        setNav(slider)
    }, [slider]);
    return (
        <Section fluid>
            <SectionHeader
                title="Notre Meilleure Promo"
                subtitle={""}
                // className="i17"
            />
            <Flex justifyContent={"between"} alignItems={"center"} alignContent={"center"} breakpoint={"md"}>
                <div className="i16" style={{
                    background: `url(${settings[0]?.banner_best_products}) no-repeat`,
                    backgroundSize: "contain"
                }}>
                </div>
                <Slider
                    slidesToShow={products?.length > 2 && 3}
                    asNavFor={nav}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    arrows={true}
                    className="slick-slider-arrow-inner mt-1 mr-n1 position-relative w-md-100 w-lg-75"
                    // navigation={true}
                    // pagination={true}
                    // modules={[Navigation, Pagination]}
                >
                    {products?.map((product, index) =>
                        <ProductGrid
                            className='h-sm-50 overflow-visible'
                            product={product}
                            key={product.id}
                            md={6}
                            lg={3}
                            index={index}
                        />
                    )}
                </Slider>
            </Flex>
        </Section>
    )
}

export default BestPromoProducts