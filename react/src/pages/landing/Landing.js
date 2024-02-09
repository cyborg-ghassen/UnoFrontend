import React from 'react';
import Hero from './Hero';
import NavbarStandard from './NavbarStandard';
import CategoryBanner from "./CategoryBanner";

const Landing = () => {
    return (
        <>
            <NavbarStandard/>
            <CategoryBanner/>
            <Hero/>
        </>
    );
};

export default Landing;
