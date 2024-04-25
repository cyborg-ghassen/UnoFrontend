import Section from "../../components/common/Section";
import React, {useEffect, useState} from "react";
import {api} from "../../utils/api";
import {Col, Image, Row} from "react-bootstrap";
import useQuery from "../../hooks/useQuery";


const PhotosBanner = () => {
	const [posters, setPosters] = useState([])
	let query = useQuery()

	const getPosters = async () => {
		query.set("position", "bottom")
		await api.get(`/setting/poster/?${query.toString()}`).then(res => setPosters(res?.data?.results))
	}

	useEffect(() => {
		getPosters()
	}, []);
	return (
		<Section>
			<Row>
				{posters?.slice(0, 3)?.map(poster => (
					<Image src={poster?.image} alt={poster?.name} style={{
						maxHeight: "300px", maxWidth: "90vw"
					}}/>
				))}
			</Row>
			<Row className={"mt-3"}>
				<Col lg={4}>
					{posters?.slice(4, 5)?.map(poster => (
						<Image src={poster?.image} alt={poster?.name} className={""}
						       style={{
							       maxHeight: "300px", maxWidth: "80vw"
						       }}
						/>
					))}
				</Col>
				<Col lg={8}>
					{posters?.slice(5, 6)?.map(poster => (
						<Image src={poster?.image} alt={poster?.name} className={"m-auto"}
						       style={{
							       maxHeight: "300px", maxWidth: "80vw"
						       }}
						/>
					))}
				</Col>
			</Row>
		</Section>
	)
}

export default PhotosBanner