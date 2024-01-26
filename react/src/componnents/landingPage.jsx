import React, {useEffect, useState} from "react";
import "./styling.css"

import Judy from './assetes/Judy2.jpg';
import bannet1 from "./assetes/Bannet1.jpg";
import Profile from "./assetes/profile.jpg";
import {Filltre, Covers} from "./filtre";
import {Link, useNavigate} from "react-router-dom";
import useQuery from "../utils/useQuery";
import {api} from "../utils/api";
// const bannet1="./assetes/Bannet1.jpg"

export const Banner = () => {
    const [siteSettings, setSiteSettings] = useState({})

    const query = useQuery()
    const navigate = useNavigate()

    const getSiteSettings = async () => {
        query.set("site", process.env.REACT_APP_SITE_ID)
        await api.get(`/setting/site/?${query.toString()}`).then(res => setSiteSettings(res?.data?.results[0]))
    }

    useEffect(() => {
        getSiteSettings()
    }, []);
    return (
        <div className="theLeanding" style={{
            backgroundImage: `url(${siteSettings?.home_cover})`
        }}>
            <div className="TheBlurr">
                <div className="theContent">
                    <div className="start">{siteSettings?.slogan}</div>
                    <div className="Canter">{siteSettings?.name}</div>
                    <div className="paragraphes">{siteSettings?.about_me}
                        {/* <!-- Simplify your cleaning routine with our cutting-edge tools and accessories. Whether you're a professional or a home enthusiast, discover the key to a sparkling space. Shop now for a cleaner, fresher lifestyle! --> */}
                    </div>
                    <div className="Buttons">
                        <button onClick={() => navigate("/Products?page1")}>Store</button>
                        <button onClick={() => navigate("/OurMagazine")}>About Us</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export const ForLogo = () => {
    const [services, setServices] = useState([])
    const query = useQuery()
    const getServices = async () => {
        query.set("site", process.env.REACT_APP_SITE_ID)
        await api.get(`/setting/service/?${query.toString()}`).then(res => setServices(res?.data?.results))
    }

    useEffect(() => {
        getServices()
    }, []);

    return (
        <div className="TheLO">
            {services?.slice(0, 5).map(service => (
                <div className="AA">
                    <div className="thePhoto"
                         dangerouslySetInnerHTML={{
                             __html: service?.svg_code
                         }}
                    ></div>
                    <div className="word">{service?.name}</div>
                </div>
            ))}
        </div>

    )
}
export const ProductExepmle = ({Per, data, action, getRelatedProducts}) => {

    const itmes = data?.slice(0, 4).map(item => (
        {
            id: item?.id,
            name: item?.name,
            describtion: item?.slogan,
            promo: item?.promotion,
            price: item?.price_promotion
        }
    ))
    const Jugy = "./assetes/Judy2.jpg"
    return (
        <div className="theProducts">
            <div className="theTitle">
                <div className="klem">{Per.context}</div>
                <a href="">{Per.info}</a>
            </div>
            <div className="Products">
                {itmes?.map(item =>
                    // {{console.log("lsmslm")}}
                    <div className="TheCart">
                        <div className="ThePic">
                            <img src={Judy} alt=""/>
                            {/* <!-- <div className="offre">-10%</div> --> */}
                            {item.promo !== 0 && (

                                <div className="Promo">Promo <label for=""
                                    //  style="color: white;"
                                >-10%</label></div>
                            )

                            }

                        </div>
                        <div className="Name">{item.name}</div>
                        <div className="Name UU">{item.describtion}</div>
                        <div className="Price">
                            <div>Price:</div>
                            <div>{item.price} dt</div>
                            {/* <!-- <div className="Promo">Promo <label for="" style="color: white;">-10%</label> </div> --> */}
                        </div>
                        <Link to={"/Product/" + item.id} onClick={() => {
                            action()
                            getRelatedProducts()
                        }}>

                            <button>Buy</button>
                        </Link>

                    </div>
                )}
            </div>
        </div>

    )
}
export const LandingPage = () => {
    const [testimonials, setTestimonials] = useState([])
    const [dailyDeals, setDailyDeals] = useState([])
    const [bestProducts, setBestProducts] = useState([])

    const query = useQuery()

    const getTestimonials = async () => {
        query.set("site", process.env.REACT_APP_SITE_ID)
        await api.get(`/setting/testimonial/?${query.toString()}`).then(res => setTestimonials(res?.data?.results))
    }

    const getDailyDeals = async (query) => {
        await api.get(`/product/daily_deals/?${query.toString()}`).then(res => setDailyDeals(res?.data))
    }

    const getBestProducts = async () => {
        await api.get('/product/best_products/').then(res => setBestProducts(res?.data))
    }

    useEffect(() => {
        getDailyDeals(query)
    }, []);

    useEffect(() => {
        getBestProducts()
    }, []);

    useEffect(() => {
        getTestimonials()
    }, []);

    var dataPer1 = {
        context: "Best Product",
        info: "Store"
    }
    var dataPer = {
        context: "Daily Deal",
        info: "Store"
    }
    // <img src={bannet1} "./assetes/Bannet1.jpg" alt="" />
    return (
        <div className="FFFFFFFF">

            <Banner/>
            <Filltre getProducts={getDailyDeals} source={"landing"}/>

            <ProductExepmle Per={dataPer} data={dailyDeals}/>
            <Covers/>
            <ForLogo/>
            {/* <NextFroCart/> */}
            <ProductExepmle Per={dataPer1} data={bestProducts}/>
            {/* <!-- the Exepmle of the product /////////////////////////////////////////////////////////--> */}
            {/* <!-- the4 Covers //////////////////////////////////////--> */}

            {/* <!-- our owners seys §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§ --> */}
            <div className="ourOwnersSays">
                <div className="Title">What Owners Says</div>
                <div className="PP">
                    {testimonials?.slice(0, 2).map(testimonial => (
                        <div className="OnePA">
                            <div className="Bulle">
                                <div className="la1">

                                    <div className="Img">
                                        <img src={testimonial?.image} alt=""/>
                                    </div>
                                    <div>
                                        <div className="namee">{testimonial?.name}</div>
                                        <div className="post">{testimonial?.slogan}</div>
                                    </div>
                                </div>
                                <div className="Svgg">
                                    {/* To update */}
                                    {/* <svg fill="#416f97" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#416f97"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64 C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7 c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path> </g></svg> */}
                                    <svg fill="#416f97" height="50px" width="50px" viewBox="0 0 512 512"
                                         xmlns="http://www.w3.org/2000/svg" stroke="#416f97">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <div className="laParalo">
                                {testimonial?.comment}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
// export default LandingPage;