import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';
import {api} from "../../utils/api";

const Hero = () => {
    const [posters, setPosters] = useState([])

    const getPosters = async () => {
        await api.get("/setting/poster/").then(res => setPosters(res?.data?.results))
    }

    useEffect(() => {
        getPosters()
    }, []);

    return (
        <Swiper className="i8" navigation={true} pagination={true} modules={[Navigation, Pagination]}>
            {posters?.slice(0, 3)?.map(poster => (
                
                <SwiperSlide className='i8'>
                    <img src={poster?.image}
                className={"i8"}
                 alt={poster?.name}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;
