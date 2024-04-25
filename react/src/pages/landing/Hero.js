import React, {useEffect, useState} from 'react';
import {api} from "../../utils/api";
import Section from "../../components/common/Section";
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useQuery from "../../hooks/useQuery";

const Hero = () => {
	const [posters, setPosters] = useState([])
	let query = useQuery()

	const getPosters = async () => {
		query.set("position", "top")
		await api.get(`/setting/poster/?${query.toString()}`).then(res => setPosters(res?.data?.results))
	}

	useEffect(() => {
		getPosters()
		// eslint-disable-next-line
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
				{posters?.slice(0, 6)?.map(poster => (
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
