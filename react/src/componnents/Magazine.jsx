import React, {Fragment, useEffect, useState} from "react";
import "./Style/Magazine.css"
import useQuery from "../utils/useQuery";
import {api} from "../utils/api";
export const Magazine=()=>{
    const [testimonials, setTestimonials] = useState([])
    const query = useQuery()

    const getTestimonials = async () => {
        query.set("site", process.env.REACT_APP_SITE_ID)
        await api.get(`/setting/testimonial/?${query.toString()}`).then(res => setTestimonials(res?.data?.results))
    }

    useEffect(() => {
        getTestimonials()
    }, []);

    return(
        <Fragment>
            <div className="Allz">
                <div className="Cadre121">
                    <div className="Text555">
                        <div className="Title">
                            Uno Market
                        </div>

                        <div className="Paraghe">
                            Welcome to Uno Cleaner Market,<br/>your go-to destination for a comprehensive range<br/>of
                            cleaning solutions designed to meet the diverse<br/>needs of households and businesses.
                            <br/>At Uno, we understand the importance of cleanliness<br/>and hygiene in creating a
                            healthy and vibrant environment.
                        </div>
                    </div>
                    <div className="ThePhoto"></div>
                </div>
                <div className="Cadre121">
                    <div id="LMLM87" className="LMLM87 ThePhoto1"></div>
                    <div className="Text555">
                        <div className="Title">
                            Uno Market
                        </div>

                        <div className="Paraghe">
                            Welcome to Uno Cleaner Market,<br/>your go-to destination for a comprehensive range<br/>of
                            cleaning solutions designed to meet the diverse<br/>needs of households and businesses.
                            <br/>At Uno, we understand the importance of cleanliness<br/>and hygiene in creating a
                            healthy and vibrant environment.
                        </div>
                    </div>
                </div>
                {/* <div> */}

                {/* </div> */}
            </div>
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
        </Fragment>

    )
}