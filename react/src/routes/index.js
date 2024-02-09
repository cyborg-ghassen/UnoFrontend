import {Route, Routes} from "react-router-dom";
import ProductMap from "../componnents/ProductMap";
import {AllthePage} from "../componnents/OneItemToBy";
import {Panier} from "../componnents/Panier";
import {Magazine} from "../componnents/Magazine";
import {LogIn} from "../componnents/LogIn";
import {Register} from "../componnents/Register";
import {PageNotFound} from "../componnents/PageNotFount";
import React from "react";
import {useSelector} from "react-redux";
import Landing from "../pages/landing/Landing";

const AppRoutes = () => {
    const authOrNot = useSelector((state) => state.Auth.value);
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Products" element={<ProductMap/>}/>
            <Route path="/Product/:id" element={<AllthePage/>}/>
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