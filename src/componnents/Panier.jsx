import React  , { useState } from "react";
import "./Style/Panier.css"
import Judy from './assetes/Judy2.jpg';

const TITLE=()=>{
    return(
        <div className="JJ">

            <div>Purchase Cart</div>
        </div>
    )
}
export const PanierData=()=>{
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
    const itemsToBy=[
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8},
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans", promo:0 ,price:20,Quantity:8}
    ]
    return(
        <div className="ALLP">
             {isPopupOpen && (

                 <div className="Confirmation">
                <div className="TIO">Purchase Confirmation</div>
                <div className="LALA">FName & LName:</div>
                <input type="text" />
                <div className="LALA">Email:</div>
                <input type="email" />
                <div className="LALA">Phone Number:</div>
                <input type="text" />
                <div className="LALA">Remark:</div>
                <input type="text" />
                <div className="THEB">

                <button  onClick={closePopup}   >Confirm</button>
                <button className="A1"  onClick={closePopup}>Cansel</button>
                <button className="A2"  onClick={closePopup}>Cansel All The Command</button>
                </div>

            </div>
                )}
        <div   className="All1">
        <div className="theProduct">
            {/* <div className="TheTITLES">
                <div className="widde">
                </div>
                <div className="QQ">

                <div>Product</div>
                <div className="QQQQ">Quantity</div>
                <div className="WWWW">Price</div>

                </div>
            </div> */}
            {itemsToBy.map(item => (  
                

            <div className="oneProduct">
                <div className="MMM">

                <div className="ThePhoto">
                    <img src={Judy} alt="" />
                </div>
                <div className="Titre">
                    <label htmlFor="" className="Slogan">{item.describtion}</label><br />
                    <label htmlFor="" className="Tito">{item.name}</label>

                </div>
                </div>
                <div className="MMM">

                <div className="number XX">
                    <label htmlFor="">Quantity</label>
                    <br />
                    x{item.Quantity}
                </div>
                <div className="PPRIX XX">
                    <label htmlFor="">Price</label>
                    <br />
                    {item.price}.000dt
                </div>
                <div className="Buttons1">
                    <button className="Edit">Edit</button>
                    <button id="YY" className="Cancel">Cancel</button>
                </div>
                </div>

            </div>
            ))}  

        </div>
        <div className="ThePrice">
                <div className="theTicket">The Ticket</div>
                <div className="theDes">Discover the exceptional cleaning experience with Judy Clean Products. Engineered with precision and designed for efficacy, our line of cleaning solutions redefines the standards of cleanliness in every home.</div>
                <div className="PRIE">800.000dt</div>
                <div className="LL"> 
                    <button onClick={openPopup}> confirm</button>
                    <button id="YY" className="YY">Reset</button>
                </div>
        </div>
        </div>

    </div>
    )
}
export const Panier=()=>{
    return(
        <div className="PP">
            <TITLE />
            <PanierData />
            
        </div>
    )
}