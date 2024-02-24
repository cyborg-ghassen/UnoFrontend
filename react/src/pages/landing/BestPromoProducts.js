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
            <div className="i17">
                <div className="i16" style={{
                    background: `url(${settings[0]?.banner_best_products}) no-repeat`,
                    backgroundSize: "cover"
                }}>
                </div>
                <Slider
                    slidesToShow={products?.length > 0 && 1}
                    asNavFor={nav}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    arrows={true}
                    className="i19 slick-slider-arrow-inner mt-1 mr-n1"
                    // navigation={true}
                    // pagination={true}
                    // modules={[Navigation, Pagination]}
                >
                    {products?.slice(0, 3).map((product, index) =>
                        <div className="i20">

                            <ProductGrid
                                className='i21 fit-cover w-sm-100 h-sm-50'
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