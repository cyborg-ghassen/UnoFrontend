// <<<<<<< HEAD
import React, { useState } from "react";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// =======
// import React from "react";
// import {  BrowserRouter as Router } from 'react-router-dom';
// >>>>>>> c014548f0b5cacf04c1bdca5f351077d724097ff
// import "./assetes/uno logo.png" 
import { useSelector } from 'react-redux';
import logo from "./assetes/uno logo.png" 
// const logo="./assetes/uno logo.png"

import "./styling.css"
const NavBar=()=>{
    const [theLinks,setTheLinks]=useState(false)
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
        <div className="navbar">
        <div className="TheLogo">
            <div className="DA3">
            

                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#267676"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   
            </div>
            <div className="LOGO"></div>
            <img src={logo} alt=""/> 
        </div>
        <div className="Links">
            
                <Router>
      		    {/* <Link onClick={() => navigateTo('/home')}>Home</Link> */}

      		    <a href="/home">Home</a>
                <a href="/Products">Products</a>
                <a href="/OurMagazine">Our Magazine</a>
      		    {/* <Link to="/home">Home</Link> */}
                {/* <Link to="/Products">Products</Link> */}
                {/* <Link to={""}>Our Magazine</Link> */}
                </Router>
        		
        </div>
        <div className="Account">

            {!authOrNot && (
                <label htmlFor="">
                <a className="Lin" href="/LogIn">Log In</a>
                <a className="Sup" href="/register">Sign Up</a>
                </label>
            )}
            {authOrNot && (
               
             <a className="panier" href="/Panier">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="rgb(38, 118, 188)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   
                <div className="achatNumber">{props.data}</div>
            </a> 
           
            )}
        </div>
       
        {/* </div> */}
    </div>
    )
}
export default NavBar;