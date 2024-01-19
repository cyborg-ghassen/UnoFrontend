import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {LandingPage} from './landingPage';
import ProductMap from './ProductMap';
import {TheItemRendring , AllthePage} from './OneItemToBy';
import { Panier } from './Panier';
import { LogIn } from './LogIn';
// import { useEffect } from 'react';
import { PageNotFound } from './PageNotFount';
// import { Provider } from 'react-redux';
// import {storeAuth} from './reduxStores.js/AuthStore.js';
import { Magazine } from './Magazine.jsx';
import { Register } from './Register.jsx';
import { useSelector } from 'react-redux';



export const Myrouters=()=>{
    const authOrNot = useSelector((state) => state.Auth.value);
	

    return(
        <Router>
      		<Routes>
        		<Route path="/home" element={<LandingPage />} />
        		<Route path="/Products" element={<ProductMap />} />
        		<Route path="/Product/:id" element={<AllthePage />} />
        		{authOrNot && (
        		<Route path="/Panier" element={<Panier />} />
                )}
        		<Route path="/OurMagazine" element={<Magazine />} />
        		{!authOrNot && (
                    <Route path="/LogIn" element={<LogIn />} />
                )}
                {!authOrNot && (
                    <Route path="/register" element={<Register />} />
                )}
				
        		<Route path="*" element={<PageNotFound />} />
        		{/* <Route path="/about" element={<Banner />} /> */}
      		</Routes>
   	 </Router>
    )
}