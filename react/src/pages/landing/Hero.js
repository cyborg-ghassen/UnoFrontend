import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';
import {api} from "../../utils/api";
import Section from "../../components/common/Section";

const Hero = () => {
    const [posters, setPosters] = useState([])

    const getPosters = async () => {
        await api.get("/setting/poster/").then(res => setPosters(res?.data?.results))
    }

    useEffect(() => {
        getPosters()
    }, []);

    return (
        <Section fluid>
            <Swiper navigation={true} pagination={true} style={{
                height: "auto"
            }} modules={[Navigation, Pagination]}>
                {posters?.slice(0, 3)?.map(poster => (
                    <SwiperSlide className={"d-flex justify-content-center align-items-center overflow-hidden"}>
                        <img src={poster?.image}
                             style={{
                                 width: "70%",
                                 position: "relative",
                                 transitionProperty: "transform"
                             }}
                             alt={poster?.name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};

export default Hero;
