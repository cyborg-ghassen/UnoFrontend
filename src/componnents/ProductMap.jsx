import React from "react"
import "./Style/ProductMapStyle.css"
import "./styling.css"
import Judy from './assetes/Judy2.jpg';

import { Filltre } from "./filtre";
const ProductMap=()=>{
    const items = [
        { id: 1, name: 'Air Freshener' , promo:0 },
        { id: 2, name: 'Glass Cleaner' , promo:50},
        { id: 3, name: 'Vinegar'  , promo:0},
        { id: 3, name: 'Baking soda' , promo:0},
        { id: 3, name: 'Biological detergent' , promo:20},
        { id: 3, name: 'judy'  , promo:10},
        { id: 3, name: 'judy' , promo:0},
        { id: 3, name: 'judy' , promo:0},
        { id: 3, name: 'judy' , promo:0},
        { id: 3, name: 'judy' , promo:0},
        { id: 3, name: 'judy' , promo:0},
        { id: 3, name: 'judy' , promo:0},
      ];
    //   const checkPromo=(p)=>{
    //     return p!==0;
    //   }
    return(<div className="Am">
        <div className="theImg"></div>
        <Filltre/>
        <div className="theProducts">
            <div className="theTitle">
                <div className="klem">Daily Deals</div>
                <a href="">In Uno</a>
            </div>
            <div className="Products">
            {items.map(item => (    
        // <li key={item.id}>{item.name}</li>
                <div className="TheCart">
                    <div className="ThePic">
                        <img src={Judy} alt=""/>
                        {/* <!-- <div className="offre">-10%</div> --> */}
                        {/* {checkPromo(item.promo) &&( */}
                        { item.promo!=0 &&(

                            
                            <div className="Promo">Promo <label for=""
                            //  style="color: white;"
                            >-{item.promo}%</label> </div>
                            )
                        }

                    </div>
                    <div className="Name">judy</div>
                    <div className="Name UU">Judy Cleaner really cleans everything in the house</div>
                    <div className="Price">
                        <div>Price:</div>
                        <div>20.000 dt</div>
                        {/* <!-- <div className="Promo">Promo <label for="" style="color: white;">-10%</label> </div> --> */}
                    </div>
                <button>Buy</button>

                </div>
                ))}
                
            </div>
        </div>
    </div>

    )
}
export default ProductMap;