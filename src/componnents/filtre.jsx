import React from "react";
import "./styling.css"
import cover1 from "./assetes/Cover1.jpg"
import cover2 from "./assetes/Cover2.jpg"
import cover3 from "./assetes/Cover3.jpg"

export const Filltre=()=>{
    const ChackBoxs= ['Glass', 'Wood', 'Metal', 'Plastic', 'Ceramic','Leather',
    'Fabric',
    'Paper',
    'Electronics',
    'Organic',]
    return(
        <div className="Filltre">
            <div className="Title2">Find Your Product</div>
            <div className="Blocks">
            
            <select className="Selection" aria-label="Default select example">
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="Selection" aria-label="Default select example">
                <option selected>Marquee</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="Selection" aria-label="Default select example">
                <option selected>Price</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <input type="text" className="Boton" placeholder="Search"/>
            <button className="AffectSerch">Find Products</button>
            </div>
            <div className="Index">
                {ChackBoxs.map(item=>(

                    <div>
                    <label >{item}</label>
                    <input type="checkbox" />
                </div>
                    ))}
                
                
            </div>
        </div>
    )
}
export const Covers=()=>{
    return(
        <div className="Cover">
            <a className="the1 all">
                <img src={cover1} alt="" />
            </a>
            <a className="the2 all">

                <img src={cover2} alt="" />
            </a>
            <a className="the3 all">
                <img src={cover3} alt="" />

            </a>
        </div>
    )
}
// export default {
//     Filltre,
//     Covers
// } ;