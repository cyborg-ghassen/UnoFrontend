import {Route, Routes} from "react-router-dom";
import {AllthePage} from "../componnents/OneItemToBy";
import {Panier} from "../componnents/Panier";
import {Magazine} from "../componnents/Magazine";
import {LogIn} from "../componnents/LogIn";
import {Register} from "../componnents/Register";
import {PageNotFound} from "../componnents/PageNotFount";
import React from "react";
import {useSelector} from "react-redux";
import Landing from "../pages/landing/Landing";
import Products from "../pages/products/Products";
import ProductLayout from "../layouts/ProductLayout";
import ProductDetails from "../pages/products/product-details/ProductDetails";

const AppRoutes = () => {
    const authOrNot = useSelector((state) => state.Auth.value);
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route element={<ProductLayout />}>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
            </Route>
            {authOrNot && (
                <Route path="/Panier" element={<Panier/>}/>
            )}
            <Route path="/OurMagazine" element={<Magazine/>}/>
            {!authOrNot && (
                <Route path="/LogIn" element={<LogIn/>}/>
            )}
            {!authOrNot && (
                <Route path="/register" element={<Register/>}/>
            )}

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRoutes