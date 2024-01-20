import React  , { useEffect, useState } from "react";
import "./Style/Panier.css"
import Judy from './assetes/Judy2.jpg';
import { resetBasket ,deleteOneItem } from "../reduxStores.js/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

const TITLE=()=>{
    return(
        <div className="JJ">

            <div>Purchase Cart</div>
        </div>
    )
}
export const PanierData=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const [totlaPrice, settotlaPrice] = useState(0);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [itemsToBy, setItemsToBy] = useState([]);
   
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [FullName, setFullName] = useState("");
    const [Remark, setRemark] = useState("");
    const [Alert, setAlert] = useState("");
    const [AlertSucces, setAlertSucces] = useState("");
    const bas = useSelector((state) => state.Auth.basket);
    const deleteOneItemFromTheList=(id)=>{
        // console.log("in the dispatch")
        dispatch(deleteOneItem({id:id}))
        getItems()
        .then(()=>{})
        .catch(()=>{})
    }
   
    const restTheBasket=()=>{
        dispatch(resetBasket())
    }
    const openPopup = () => {
      setPopupOpen(true);
    };
    // to fetsh the product selected
    // const getProductSelected=()=>{
    //     return new Promise((resolve,reject)=>{
    //
    //     })
    // }
    const validateEmail=(email)=> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const  validatePhoneNumber=(phoneNumber)=> {
        const phoneRegex = /^\d{8}$/;
        return phoneRegex.test(phoneNumber);
    }
    const validateFullName=(fullName)=> {
        if (fullName.length < 5) {
            return false;
        }
        const digitRegex = /\d/;
        if (digitRegex.test(fullName)) {
            return false;
        }
        return true;
    }
    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    const checkInputsAndSendCommend=()=>{

        if (!validateFullName(FullName)){
            setAlert("Invalid Full Name.")  
            return 0
        }
        if(!validateEmail(Email)){
            setAlert("Invalid email.")
            return 0
        }
        if  (!validatePhoneNumber(PhoneNumber)){
            setAlert("Invalid phone number.")
            return 0
        }
        setAlert("")
        /// the code to send the request

        sendCommend().then(()=>{

            // is the case of code staus==200
            setAlertSucces("Order sended with succes we will contact you as soon as possible.")
            setEmail("")
            setFullName("")
            setPhoneNumber("")
            setRemark("")
            delay(3000).then(() => {
                restTheBasket()
                navigate("/home")
            });
        }).catch((e)=>{
            setAlert("Something went wrong.")

        })
        

    }
    const closePopup = () => {
        setPopupOpen(false);
    };
    const resetBasketAndclosePopup = () => {
        restTheBasket();
        setPopupOpen(false);
    };
    const dataTosend=()=>{
        return bas.map(item => ({
            product: item.id,
            quantity: item.Quantity
          }));          
    }
    
    useEffect(()=>{
        getItems().then((data)=>{

        }).catch((e)=>{

        })
    },[])
    const headers = {
        'Authorization':"Bearer "+localStorage.getItem("Token")  ,
          
    };
    const axiosConfig = {
        headers: headers,
        
      };
    const getItems=()=>{
        return new Promise(async(resolve,reject)=>{

            var data=await api.post("/order/items/",dataTosend()
            ,
            axiosConfig).then((res)=>{
                
                settotlaPrice(res?.data?.total_price)
                setItemsToBy(res?.data?.products)
                resolve(res?.data)
                
            }).catch((e)=>{
               
                reject(e)
            })
        })
    }
    const sendCommend=()=>{
        return new Promise(async(resolve,reject)=>{
            var data=await api.post("/order/order/",
            {
                items: dataTosend(),
                type: "passenger",
                status: "draft",
                full_name: FullName,
                email: Email,
                address: Address,
                phone: PhoneNumber,
                notes: Remark,
            },axiosConfig
            
            ).then((data)=>{
                resolve(data)
            }).catch((e)=>{
                reject(e)
            })
        })
    }
    
    return(
        <div className="ALLP">
             {isPopupOpen && (

                 <div className="Confirmation">
                <div className="TIO">Purchase Confirmation</div>
                <div className="LALA">Full Name:</div>
                <input type="text" value={FullName} onChange={(event)=>{setFullName(event.target.value)}}/>
                <div className="LALA">Email:</div>
                <input type="email" value={Email} onChange={(event)=>{setEmail(event.target.value)}} />
                <div className="LALA">Phone Number:</div>
                <input type="text"  value={PhoneNumber} onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
                <div className="LALA">Address:</div>
                <input type="text"  value={Address} onChange={(event)=>{setAddress(event.target.value)}}/>
                <div className="LALA">Remark:</div>
                <input type="text"value={Remark} onChange={(event)=>setRemark(event.target.value)} />
                {Alert!=="" &&

                <div className="LALA1">{Alert}</div>
                }
                {AlertSucces!=="" &&

                <div className="LALA2">{AlertSucces}</div>
                }
                <div className="THEB">

                <button  onClick={checkInputsAndSendCommend}>Confirm</button>
                <button className="A1"  onClick={closePopup}>Cancel</button>
                <button className="A2"  onClick={resetBasketAndclosePopup}>Cancel All The Command</button>
                </div>

            </div>
                )}
        <div   className="All1">
        <div className="theProduct">
            
            {bas.length===0 && (
                <div className="thyt">There is no product selected.</div> 
                )}
            {bas.length!==0 && (

            itemsToBy.map(item => (  
                

            <div className="oneProduct">
                <div className="MMM">

                <div className="ThePhoto">
                    <img src={Judy} alt="" />
                    {/* <img src={item?.product?.image} alt="" /> */}
                </div>
                <div className="Titre">
                    <label htmlFor="" className="Slogan">{item?.product?.slogan}</label><br />
                    <label htmlFor="" className="Tito">{item?.product?.name}</label>

                </div>
                </div>
                <div className="MMM">

                <div className="number XX">
                    <label htmlFor="">Quantity</label>
                    <br />
                    x{item?.quantity}
                </div>
                <div className="PPRIX XX">
                    <label htmlFor="">Price</label>
                    <br />
                    {item?.individual_price}dt
                </div>
                <div className="Buttons1">
                    <button className="Edit">Edit</button>
                    <button id="YY" className="Cancel" onClick={()=>{
                        deleteOneItemFromTheList(item?.product?.id)}}>Cancel</button>
                </div>
                </div>

            </div>
            )) 
            )}

        </div>
        <div className="ThePrice">
                <div className="theTicket">The Ticket</div>
                <div className="theDes">Discover the exceptional cleaning experience with Judy Clean Products. Engineered with precision and designed for efficacy, our line of cleaning solutions redefines the standards of cleanliness in every home.</div>
                <div className="PRIE">{totlaPrice}dt</div>
                <div className="LL"> 
                    <button onClick={()=>{
                        if(bas.length!==0){
                            openPopup()
                        }
                        }}> confirm</button>
                    <button id="YY" className="YY" onClick={restTheBasket}>Reset</button>
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