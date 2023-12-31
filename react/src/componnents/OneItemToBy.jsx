import React from "react";
import "./Style/oneItemStyle.css"
import Judy from './assetes/Judy2.jpg';
import { ProductExepmle } from "./landingPage";
// import 

export const TheItemRendring=()=>{
    var data={
        Slogon:"Unleash the Power of Cleanliness",
        Name:"Judy Clean",
        Price:"20.000",
        promo:18,
        Stars:4,
        Description:"Discover the exceptional cleaning experience with Judy Clean Products. Engineered with precision and designed for efficacy, our line of cleaning solutions redefines the standards of cleanliness in every home. From cutting-edge formulations to eco-friendly ingredients, Judy Clean Products offer a comprehensive solution for maintaining a pristine living environment.",
        Category: ["Cat1","Cat2"]

    }
    const BlueStars = Array.from({ length: data.Stars }, (_, index) => index);
    const GrayStars = Array.from({ length: 5-data.Stars }, (_, index) => index);
    return(
        <div className="AllTheItemDetail">
            <div className="theImg">
            <img src={Judy} alt=""/>
                
            </div>
            <div className="thedetail">
                <div className="TheTxt">{data.Slogon}</div>
                <div className="TheName">{data.Name}</div>
                <div className="Rating">
                {BlueStars.map((item) => (
                    
                    <label >

                    <svg version="1.0" width="25px" height="25px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#2f5fd0">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path>
                                        </g>
                                        </svg>
                    </label>
                ))}
                {GrayStars.map((item) => (
                    
                    
                    <label htmlFor="">
                                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#c6d0e7" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path>
                        </g>
                        </svg>

                    </label>
                    ))}
                    
                    <label htmlFor="">(expert review)</label>
                </div>
                <div className="Price"><label htmlFor="" className="Prix">Price:  </label> {data.Price} DT 
                <label htmlFor="" className="ENPROMO">En Promo -{data.promo}%</label>
                </div>
                <div className="Decprition">
                Discover the exceptional cleaning experience with Judy Clean Products. Engineered with precision and designed for efficacy, our line of cleaning solutions redefines the standards of cleanliness in every home. From cutting-edge formulations to eco-friendly ingredients, Judy Clean Products offer a comprehensive solution for maintaining a pristine living environment.
                </div>
                <div className="Add">
                    <input type="number" value={1} />
                    <button>Add To Cart</button>
                </div>
                <div className="Price AA2"><label htmlFor="" className="Prix AA1">Category:  </label> 
                <label htmlFor="" className="AA2">
                {data.Category.map((item) => (
                    // {item} 
                    <label htmlFor="" className="AA2"> {item} |</label>
                    
                    ))}

                {/* Cat1 | Cat2  */}
                </label>
                </div>

            </div>

        </div>
    )
}
export const AllthePage=()=>{
    console.log("slmslmslmslm")
    const dataPer={
        context:"Related Product",
        info:"More"
    }
    return(
        <div className="MMMMMMMMMMMMMMM">

        <TheItemRendring />

        <ProductExepmle Per={dataPer}/>
        </div>
    )
}
// export default {TheItemRendring}