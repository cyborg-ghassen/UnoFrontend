import React, {useEffect, useState} from 'react';
import {api} from "../../utils/api";
import Section from "../../components/common/Section";
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <Carousel
                className='theme-slider'
                nextIcon={
                    <FontAwesomeIcon icon="angle-right"/>
                }
                prevIcon={
                    <FontAwesomeIcon icon="angle-left"/>
                }
            >
                {posters?.slice(0, 3)?.map(poster => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={poster?.image}
                            alt={poster?.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Section>
    );
};

export default Hero;
