import classNames from "classnames";
import {Outlet, useNavigate} from "react-router-dom";
import NavbarStandard from "../pages/landing/NavbarStandard";
import CategoryBanner from "../pages/landing/CategoryBanner";
import FooterStandard from "../pages/landing/FooterStandard";
import {useEffect} from "react";

const ProductLayout = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate("/expired")
	}, [navigate]);
	return (
		<div className={classNames('content')}>
			<NavbarStandard/>
			<CategoryBanner/>
			{/*------ Main Routes ------*/}
			<Outlet/>
			<FooterStandard/>
		</div>
	)
}

export default ProductLayout