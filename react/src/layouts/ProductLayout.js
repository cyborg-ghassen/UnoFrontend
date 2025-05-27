import classNames from "classnames";
import {Outlet, useNavigate} from "react-router-dom";
import NavbarStandard from "../pages/landing/NavbarStandard";
import CategoryBanner from "../pages/landing/CategoryBanner";
import FooterStandard from "../pages/landing/FooterStandard";
import React, {useEffect} from "react";
import FooterStandard2 from "../pages/landing/FooterStandard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const ProductLayout = () => {

	return (
		<div className={classNames('content')}>
			<NavbarStandard/>
			<CategoryBanner/>
			{/*------ Main Routes ------*/}
			<Outlet/>
			<FooterStandard2/>
		</div>
	)
}

export default ProductLayout