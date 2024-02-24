import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import ProductGrid from "../products/ProductGrid";
import SectionHeader from "./SectionHeader";
import {api} from "../../utils/api";
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

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
        <Section>
            <SectionHeader
                title="Notre Meilleure Promo"
                subtitle={""}
                // className="i17"
            />
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="i16" style={{
                    background: `url(${settings[0]?.banner_best_products}) no-repeat`,
                    backgroundSize: "cover"
                }}>
                </div>
                <Slider
                    slidesToShow={products?.length > 1 && 2}
                    asNavFor={nav}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    arrows={true}
                    className="slick-slider-arrow-inner mt-1 mr-n1 position-relative w-sm-100 w-lg-50"
                    // navigation={true}
                    // pagination={true}
                    // modules={[Navigation, Pagination]}
                >
                    {products?.slice(0, 3).map((product, index) =>
                        <div className="overflow-visible">

                            <ProductGrid
                                className='i21 fit-cover h-sm-50'
                                product={product}
                                key={product.id}
                                md={6}
                                lg={4}
                                index={index}
                            />
                        </div>
                    )}
                </Slider>
            </div>
        </Section>
    )
}

export default BestPromoProducts