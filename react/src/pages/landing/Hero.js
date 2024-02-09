import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

const Hero = () => {
    return (
        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className={"w-100"}/></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" className={"w-100"}/></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" className={"w-100"}/></SwiperSlide>
        </Swiper>
    );
};

export default Hero;
