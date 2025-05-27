import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'helpers/createMarkup';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {blogPostList, menuList1, menuList2} from 'data/footer';
import {bgWhiteIcons} from 'data/socialIcons';
import {version} from 'config';
import {
	faEnvelope,
	faMailBulk,
	faPaperclip,
	faPhone,
	faShippingFast,
	faSquarePhone
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";

const FooterTitle = ({children}) => (
	<h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = {children: PropTypes.node.isRequired};

const FooterList = ({list}) => (
	<ul className="list-unstyled">
		{list.map(({title, to}, index) => (
			<li className="mb-1" key={index}>
				<Link className="text-600" to={to}>
					{title}
				</Link>
			</li>
		))}
	</ul>
);

FooterList.propTypes = {list: PropTypes.array.isRequired};

const FooterBlogList = ({list}) => (
	<ul className="list-unstyled">
		{list.map((blog, index) => (
			<li key={index}>
				<h5 className="fs-0 mb-0">
					<Link className="text-600" to="#!">
						{blog.title}
					</Link>
				</h5>
				<p className="text-600 opacity-50">
					{blog.date} &bull; {blog.read} read{' '}
					{blog.star && (
						<span dangerouslySetInnerHTML={createMarkup('&starf;')}/>
					)}
				</p>
			</li>
		))}
	</ul>
);

FooterBlogList.propTypes = {list: PropTypes.array.isRequired};

const FooterStandard2 = () => {
	const [categories, setCategories] = useState([])
    let query = useQuery()

    const getCategories = async () => {
        api.get(`/setting/link/?${query.toString()}`).then(res => {
                setCategories(res?.data?.results)
            }
        )
    }

    useEffect(() => {
        getCategories()
        // eslint-disable-next-line
    }, []);
	return (
		<>
			<Section bg="primary" className="pt-8 pb-4 light">
				<Row>
					<Col lg={3}>
						<FooterTitle>Notre société</FooterTitle>
						<ul className="list-unstyled">
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Qui somme nous?
								</Link>
							</li>
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Mentions Légales
								</Link>
							</li>
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Conditions générales de vente
								</Link>
							</li>
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Paiement sécurisé
								</Link>
							</li>
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Livraison rapide
								</Link>
							</li>
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Retours et échanges
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg={3}>
						<FooterTitle>Catégories</FooterTitle>
						<ul className="list-unstyled">
							{categories?.slice(0, 6)?.map((category, index) => (
								<li className="mb-1" key={index}>
									<Link className="text-white" to={`/products?category=${category?.id}`}>
										{category?.name}
									</Link>
								</li>
							))}
						</ul>
					</Col>
					<Col lg={3}>
						<FooterTitle>Produits</FooterTitle>
						<ul className="list-unstyled">
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Promotions
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg={3}>
						<FooterTitle>Mon compte</FooterTitle>
						<ul className="list-unstyled">
							<li className="mb-1" key={0}>
								<Link className="text-white" to={"/"}>
									Qui somme nous?
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col lg={4}>
						<IconGroup className="mt-4" icons={bgWhiteIcons}/>
					</Col>
					<Col className="ps-lg-6 ps-xl-8">
						<Row className="mt-5 mt-lg-0">
							<Col className="mt-5 mt-md-0">
								<FooterTitle><FontAwesomeIcon icon={faSquarePhone}/> Service Client</FooterTitle>
								<p className={"text-white"}>(+216) 42 639 582</p>
							</Col>
							<Col className="mt-5 mt-md-0">
								<FooterTitle><FontAwesomeIcon icon={faShippingFast}/> Livraison rapide</FooterTitle>
								<p className={"text-white"}>(+216) 42 639 582</p>
								<p className={"text-white"}>info@uno.tn</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Section>
		</>
	);
};
export const FooterStandard = () => {
	return (
		<div className="bg-primary AllInfo ">
			<div className="Icons">
				<a href="https://www.facebook.com/share/1ExXshoBn5/?mibextid=wwXIfr">
					<FontAwesomeIcon icon={faFacebook} className={"text-white"} size={"2x"}/>
				</a>
				<a href="https://www.instagram.com/uno.marketofficiel?igsh=MWZkNG83eXBkeno5Nw==">
					<FontAwesomeIcon icon={faInstagram} className={"text-white"} size={"2x"}/>
				</a>
				<a href="">
					<FontAwesomeIcon icon={faWhatsapp} className={"text-white"} size={"2x"}/>
				</a>


			</div>
			<div className="Contact">
				<div className="ee">
					<div>
						<FontAwesomeIcon icon={faPhone} className={"text-white"} size={"2x"}/>
					</div>
					<div className="teliphon ms-2">
						<span>Tel:</span> +216 55 607 300
					</div>
				</div>
				<div className="ee">
					<div>
						<FontAwesomeIcon icon={faEnvelope} className={"text-white"} size={"2x"}/>
					</div>
					<div className="teliphon ms-2">
						<span>Email:</span> Unomarket@gmail.com
					</div>
				</div>
			</div>
		</div>
	)
}
export default FooterStandard2