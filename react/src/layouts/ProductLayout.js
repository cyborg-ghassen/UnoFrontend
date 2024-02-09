import classNames from "classnames";
import {Outlet} from "react-router-dom";
import Footer from "../componnents/Footer";
import NavbarStandard from "../pages/landing/NavbarStandard";
import CategoryBanner from "../pages/landing/CategoryBanner";

const ProductLayout = () => {
    return (
        <div className={classNames('content')}>
            <NavbarStandard />
            <CategoryBanner />
            {/*------ Main Routes ------*/}
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default ProductLayout