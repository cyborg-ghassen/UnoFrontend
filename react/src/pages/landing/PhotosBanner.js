import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import {api} from "../../utils/api";
import {Col, Image, Row} from "react-bootstrap";

const PhotosBanner = () => {
    const [posters, setPosters] = useState([])

    const getPosters = async () => {
        await api.get("/setting/poster/").then(res => setPosters(res?.data?.results))
    }

    useEffect(() => {
        getPosters()
    }, []);
    return (
        <Section>
            <Row>
                {posters?.slice(3, 4)?.map(poster => (
                    <Image src={poster?.image} alt={poster?.name} height={300}/>
                ))}
            </Row>
            <Row className={"mt-3"}>
                <Col lg={4}>
                    {posters?.slice(4, 5)?.map(poster => (
                        <Image src={poster?.image} alt={poster?.name} height={400} className={""}/>
                    ))}
                </Col>
                <Col lg={8}>
                    {posters?.slice(5, 6)?.map(poster => (
                        <Image src={poster?.image} alt={poster?.name} height={400} className={"ms-4"}/>
                    ))}
                </Col>
            </Row>
        </Section>
    )
}

export default PhotosBanner