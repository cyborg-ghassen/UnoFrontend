import React , { useState }from "react";
import  {useNavigate , useLocation}  from 'react-router-dom';
import "./styling.css"
import cover1 from "./assetes/Cover1.jpg"
import cover2 from "./assetes/Cover2.jpg"
import cover3 from "./assetes/Cover3.jpg"

export const Filltre=({getProducts})=>{
    const [CategoryValue, setCategoryValue] = useState('Category');
    const [MarqueValue, setMarqueValue] = useState('Marque');
    const [PriceValue, setPriceValue] = useState('Price');
    const [TextValue, setTextValue] = useState('');
    
    const getQuerys=()=>{
        let marque=''
        let category=''
        let price=''
        let text=''
        if (TextValue!=""){
            text="&searsh="+TextValue
        }
        if (CategoryValue!="Category"){
            category="&category="+CategoryValue
        }
        if (MarqueValue!="Marque"){
                marque="&Marque="+MarqueValue
        }
        if (PriceValue!="Price"){
            price="&Price="+PriceValue
        }
        return "?page=1"+text+category+marque+price
    }
    const navigate = useNavigate();
    const location = useLocation();
    const handleButtonClick = () => {
        const querys=getQuerys()
        const currentUrl = location.pathname;
        console.log(currentUrl)
        console.log(querys)
        // Navigate to another page
        navigate(currentUrl+querys);
        getProducts(querys)
      };
    const ChackBoxs= ['Glass', 'Wood', 'Metal', 'Plastic', 'Ceramic','Leather',
    'Fabric',
    'Paper',
    'Electronics',
    'Organic',]
    return(
        <div className="Filltre">
            <div className="Title2">Find Your Product</div>
            <div className="Blocks">
            
            <select value={CategoryValue} onChange={(event)=>{setCategoryValue(event.target.value)}} className="Selection" aria-label="Default select example">
                <option selected value="Category">Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select value={MarqueValue} onChange={(event)=>{setMarqueValue(event.target.value)}} className="Selection" aria-label="Default select example">
                <option selected value="Marquee">Marquee</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select value={PriceValue} onChange={(event)=>{setPriceValue(event.target.value)}} className="Selection" aria-label="Default select example">
                <option selected value="Price">Price</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <input type="text" value={TextValue} onChange={(event)=>{setTextValue(event.target.value)}} className="Boton" placeholder="Search"/>
            <button onClick={handleButtonClick} className="AffectSerch">Find Products</button>
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