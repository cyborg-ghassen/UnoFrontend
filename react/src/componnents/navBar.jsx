// <<<<<<< HEAD
import React, { useState } from "react";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// =======
// import React from "react";
// import {  BrowserRouter as Router } from 'react-router-dom';
// >>>>>>> c014548f0b5cacf04c1bdca5f351077d724097ff
// import "./assetes/uno_logo.png" 
import { useDispatch,useSelector } from 'react-redux';
import logo from "./assetes/uno_logo.png" 
// const logo="./assetes/uno logo.png"
import { setFalse ,resetBasket } from "../reduxStores.js/authSlice";

import "./styling.css"
const NavBar=()=>{
    const [theLinks,setTheLinks]=useState(false)
    const dispatch=useDispatch()
  const LogOut=async()=>{
    setTheLinks(false)
    localStorage.removeItem("Token")
    await dispatch(setFalse())
    await dispatch(resetBasket())
    // navigate('/home')
    window.location.href = '/home';
  }
    const toggleState=()=>{
        // console.log("in the toggle")
                setTheLinks(!theLinks)
    }
    const authOrNot = useSelector((state) => state.Auth.value);
    const bas = useSelector((state) => state.Auth.basket);
    // console.log(bas)
    var n=bas.length
    if (bas.length>9){
        n="+9"
    }
    // console.log(achatNumber)
    // console.log(authOrNot)
    return(

        <div className="NAVNAV">
            {theLinks &&(

                <div className="propUpForMobile">
                <div className="Links66">
                <input type="text" id="IPIPI" />
                <a href="/Home">Home</a>
                <a href="/Products?page=1">Products</a>
                <a href="/OurMagazine">Our Magazine</a>
                
                </div>
                {!authOrNot && 

                <div className="Links67">
                <a href="/LogIn" className="p9">Log In</a>
                <a href="/Register">Sign Up</a>
                </div>
                }
                {authOrNot &&
                <div className="Links67">
                <a href="/Panier" className="p9">Basket</a>
                {/* <a href="/Products?page=1">Sign Up</a> */}
                </div>
                
            } 
                {authOrNot &&
                <button className="LogOut" onClick={LogOut}>Log out</button>
                    
            }
            </div>
            )}
        <div className="NN">
            <div className="MObile">
        <div className="Object1">

            
        <div className="DA33" onClick={()=>{
            toggleState()}}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="#416f97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>


            {/* <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#267676"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    */}
</div>
<div className="LOGO">

<img src={logo} alt=""/> 
        </div>
</div>
        <div className="Object2">
        {authOrNot && (
            <a className="panier" href="/Panier">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   
                <div className="achatNumber">{n}</div>
            </a>                
        )}
            </div>
            </div>
            </div>
            <NavBar1 data={n} />
        </div>
    
    )
}
const NavBar1=(props)=>{
    
    

    const authOrNot = useSelector((state) => state.Auth.value);
    // console.log(authOrNot)
    return (
        // <div className="P99">
            // {/* <div className="ForMobile">
            //     <div>zlrjbgorz</div>
            // </div> */}
        <div id="navbar" className="navbar">
        <div id="TheLogo" className="TheLogo">
            <div className="DA3">
            

                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#267676"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   
            </div>
            <div id="LOGO" className="LOGO"></div>
            <img src={logo} alt=""/> 
        </div>
        <div id="Links" className="Links">
            <div id="ddd">

                <input id="OPOPOPOPOPOPOPOPO" type="text"  placeholder="Search"/>            
                <button id="III">
                <svg width="40px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#528bcd"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
                </button>
            </div>
                {/* <Router> */}
      		    {/* <Link onClick={() => navigateTo('/home')}>Home</Link> */}

      		    {/* <a href="/home">Home</a> */}
                {/* <a href="/Products">Products</a> */}
                {/* <a href="/OurMagazine">Our Magazine</a> */}
      		    {/* <Link to="/home">Home</Link> */}
                {/* <Link to="/Products">Products</Link> */}
                {/* <Link to={""}>Our Magazine</Link> */}
                {/* </Router> */}
        		
        </div>
        {/* <div id="Account" className="Account"> */}
        <div className="OOOOOOOOO">
            <a className="Panier">Login</a>
            {/* <a className="Panier">Logout</a> */}
          <a className="LOLGO">
            {/* Cleaner Products */}
            </a>
            <a className="Panier">
            <svg fill="#396093" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.5597563,4.06047595 C5.72244345,4.02226023 5.89364684,4.00215745 6.07124705,4.0025413 L20.0407059,5.00035979 C21.2924207,5.02246314 22.5170562,6.06045128 21.9125093,7.4090559 C21.7947892,7.67166232 21.2632108,8.74107307 20.4179792,10.4238018 C20.0728954,11.1107569 19.7187748,11.8139176 19.3646624,12.5158735 C19.1640115,12.9135242 19.1640115,12.9135242 19.0223623,13.1940179 C18.9575266,13.3223602 18.9322538,13.3723877 18.9170252,13.4025252 C18.6296457,14.1416265 18.0226743,14.7125666 17.2644564,14.9531632 L17.1168546,15 L7.038,15 L7.0236919,14.9992614 L5.04955452,14.9987714 C4.48131071,15.0269651 4.02696511,15.4813107 4,16 L3.99820546,16.9401179 C4.0325365,17.5123999 4.49000831,17.9693908 5,18 L5.17070571,18 C5.58254212,16.8348076 6.69378117,16 8,16 C9.30621883,16 10.4174579,16 10.8292943,18 L13.1707057,18 C13.5825421,16.8348076 14.6937812,16 16,16 C17.6568542,16 19,17.3431458 19,19 C19,20.6568542 17.6568542,22 16,22 C14.6937812,22 13.5825421,21.1651924 13.1707057,20 L10.8292943,20 C10.4174579,21.1651924 9.30621883,22 8,22 C6.6933082,22 5.58173739,21.1645877 5.17025861,19.9987341 L4.94323901,19.9983878 C3.36275342,19.908533 2.09682123,18.6439315 2,17 L2.00122858,15.9504455 C2.08019762,14.3588245 3.3503557,13.0855742 4.98992,13.0005078 L4.01005051,6.14142136 L4,6 C4,5.35306206 3.67086363,4.58507719 3.29289322,4.20710678 C3.1948992,4.10911276 2.75844815,4 2,4 L2,2 C3.24155185,2 4.13843413,2.22422057 4.70710678,2.79289322 C5.0421564,3.12794284 5.33673938,3.56893407 5.5597563,4.06047595 Z M7.11287151,13 L16.7694281,13 C16.9028277,12.9273528 17.0065461,12.8077563 17.0587744,12.6622214 L17.1075574,12.548839 C17.131074,12.5023208 17.131074,12.5023208 17.2371473,12.2923487 C17.3785994,12.0122452 17.3785994,12.0122452 17.5790088,11.6150733 C17.9326498,10.9140516 18.2862826,10.2118596 18.6162844,9.55492931 L18.6307708,9.52609021 C19.2088812,8.37515943 19.6504574,7.49032194 19.8933745,6.9949252 L6.01025746,6.00073455 L6.99015389,12.8600168 C6.99973088,12.9277585 7.0486615,12.9821505 7.11287151,13 Z M16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 C15.4477153,18 15,18.4477153 15,19 C15,19.5522847 15.4477153,20 16,20 Z M8,20 C8.55228475,20 9,19.5522847 9,19 C9,18.4477153 8.55228475,18 8,18 C7.44771525,18 7,18.4477153 7,19 C7,19.5522847 7.44771525,20 8,20 Z" />
    </svg>
            {authOrNot && (
                <div className="NNNN">+9</div>
                )}
            </a>
            </div> 
            {/* {!authOrNot && ( */}
                {/* <label htmlFor=""> */}
                {/* <a className="Lin" href="/LogIn">Log In</a> */}
                {/* <a className="Sup" href="/register">Sign Up</a> */}
                {/* </label> */}
            {/* )} */}
            {/* {authOrNot && ( */}
               {/*  */}
             {/* <a className="panier" href="/Panier"> */}
                {/* <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    */}
                {/* <div className="achatNumber">{props.data}</div> */}
            {/* </a>  */}
           
            {/* )} */}
        {/* </div> */}
       
        {/* </div> */}
    </div>
    )
}
export default NavBar;