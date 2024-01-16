import React from "react";
import "./styling.css"
import Judy from './assetes/Judy2.jpg';
import bannet1 from "./assetes/Bannet1.jpg";
import Profile from "./assetes/profile.jpg";
import {Filltre ,Covers} from "./filtre";
import { Link } from "react-router-dom";
// const bannet1="./assetes/Bannet1.jpg"

export const Banner=()=>{
    return(
        
        <div className="theLeanding">
        <div className="TheBlurr">
            <div className="theContent">
                <div className="start">The Best Place To</div>
                <div className="Canter">Buy Your cleaner Product</div>
                <div className="paragraphes">your one-stop destination for top-notch cleaning essentials. Explore our curated selection of high-quality products, from powerful cleaners to eco-friendly options.
                     {/* <!-- Simplify your cleaning routine with our cutting-edge tools and accessories. Whether you're a professional or a home enthusiast, discover the key to a sparkling space. Shop now for a cleaner, fresher lifestyle! --> */}
                    </div>
                <div className="Buttons">
                    <button>Store</button>
                    <button>About Us</button>
                </div>

            </div>
        </div>
    </div>
    )
}
export const ForLogo=()=>{

 
    return(
        <div className="TheLO">
            <div className="AA"> 
                <div className="thePhoto">
                {/* To Update        */}
                {/* <svg fill="#000000" height="70px" width="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 470 470" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M393.598,381.335h-72.069c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h72.069c7.903,0,14.333,6.429,14.333,14.332 c0,1.403-0.205,2.779-0.596,4.093c-4.101-2.183-8.776-3.426-13.737-3.426h-97.664c2.433-4.33,3.734-9.23,3.734-14.333 c0-7.835-3.051-15.201-8.591-20.741l-82.656-82.656c-12.008-12.008-34.717-21.414-51.699-21.414H54.569c-4.143,0-7.5,3.358-7.5,7.5 s3.357,7.5,7.5,7.5h102.152c13.049,0,31.866,7.794,41.092,17.021l82.657,82.656c2.707,2.707,4.197,6.306,4.197,10.134 c0,3.828-1.49,7.427-4.197,10.135c-5.587,5.588-14.681,5.589-20.27,0l-67.176-67.177c-2.929-2.928-7.677-2.929-10.607,0 c-2.929,2.929-2.929,7.677,0,10.606l67.176,67.177c5.587,5.586,12.885,8.436,20.221,8.565c0.173,0.012,0.345,0.026,0.521,0.026 h123.262c7.903,0,14.333,6.43,14.333,14.333c0,7.903-6.43,14.333-14.326,14.333l-137.644-0.122 c-3.67-0.003-9.896-1.625-13.168-3.419l-139.902-86.393c-0.087-0.054-0.176-0.106-0.265-0.156 c-5.478-3.08-14.348-5.402-20.632-5.402H54.569c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h27.425 c3.669,0,9.892,1.617,13.162,3.411l139.901,86.393c0.087,0.054,0.176,0.106,0.265,0.156c5.477,3.078,14.344,5.404,20.625,5.41 L393.598,470c16.174,0,29.333-13.158,29.333-29.333c0-5.474-1.511-10.6-4.133-14.99c2.688-4.502,4.133-9.66,4.133-15.01 C422.931,394.494,409.771,381.335,393.598,381.335z"></path> <path d="M284.259,330.994c-4.116,0.459-7.081,4.169-6.622,8.285c0.46,4.116,4.155,7.083,8.286,6.622 c3.02-0.337,6.102-0.508,9.16-0.508c19.27,0,37.979,6.843,52.681,19.268c1.408,1.19,3.127,1.772,4.837,1.772 c2.132,0,4.249-0.904,5.732-2.659c2.674-3.164,2.276-7.896-0.888-10.569c-15.49-13.091-34.737-20.931-54.862-22.502V209.36 l39.316-35.885c3.06-2.792,3.276-7.536,0.483-10.595c-2.791-3.059-7.537-3.276-10.595-0.484l-29.205,26.656v-48.232 c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v48.23l-29.204-26.654c-3.059-2.792-7.802-2.576-10.596,0.484 c-2.792,3.059-2.575,7.803,0.484,10.595l39.315,35.883v121.329C286.47,330.773,285.361,330.871,284.259,330.994z"></path> <path d="M263.22,251.689c0.626,0.16,1.252,0.237,1.869,0.237c3.343,0,6.391-2.251,7.26-5.638c1.029-4.012-1.389-8.099-5.4-9.129 c-49.877-12.797-84.712-57.748-84.712-109.312C182.236,65.623,232.859,15,295.083,15c62.225,0,112.848,50.623,112.848,112.847 c0,51.563-34.834,96.514-84.711,109.312c-4.012,1.03-6.43,5.116-5.4,9.129c1.029,4.011,5.114,6.431,9.129,5.401 c56.513-14.501,95.982-65.427,95.982-123.842C422.931,57.352,365.578,0,295.083,0S167.236,57.352,167.236,127.847 C167.236,186.263,206.706,237.189,263.22,251.689z"></path> </g> </g></svg>     */}
                <svg fill="#000000" height="70px" width="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 470 470" xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M393.598,381.335h-72.069c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h72.069c7.903,0,14.333,6.429,14.333,14.332 c0,1.403-0.205,2.779-0.596,4.093c-4.101-2.183-8.776-3.426-13.737-3.426h-97.664c2.433-4.33,3.734-9.23,3.734-14.333 c0-7.835-3.051-15.201-8.591-20.741l-82.656-82.656c-12.008-12.008-34.717-21.414-51.699-21.414H54.569c-4.143,0-7.5,3.358-7.5,7.5 s3.357,7.5,7.5,7.5h102.152c13.049,0,31.866,7.794,41.092,17.021l82.657,82.656c2.707,2.707,4.197,6.306,4.197,10.134 c0,3.828-1.49,7.427-4.197,10.135c-5.587,5.588-14.681,5.589-20.27,0l-67.176-67.177c-2.929-2.928-7.677-2.929-10.607,0 c-2.929,2.929-2.929,7.677,0,10.606l67.176,67.177c5.587,5.586,12.885,8.436,20.221,8.565c0.173,0.012,0.345,0.026,0.521,0.026 h123.262c7.903,0,14.333,6.43,14.333,14.333c0,7.903-6.43,14.333-14.326,14.333l-137.644-0.122 c-3.67-0.003-9.896-1.625-13.168-3.419l-139.902-86.393c-0.087-0.054-0.176-0.106-0.265-0.156 c-5.478-3.08-14.348-5.402-20.632-5.402H54.569c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h27.425 c3.669,0,9.892,1.617,13.162,3.411l139.901,86.393c0.087,0.054,0.176,0.106,0.265,0.156c5.477,3.078,14.344,5.404,20.625,5.41 L393.598,470c16.174,0,29.333-13.158,29.333-29.333c0-5.474-1.511-10.6-4.133-14.99c2.688-4.502,4.133-9.66,4.133-15.01 C422.931,394.494,409.771,381.335,393.598,381.335z"></path>
          <path d="M284.259,330.994c-4.116,0.459-7.081,4.169-6.622,8.285c0.46,4.116,4.155,7.083,8.286,6.622 c3.02-0.337,6.102-0.508,9.16-0.508c19.27,0,37.979,6.843,52.681,19.268c1.408,1.19,3.127,1.772,4.837,1.772 c2.132,0,4.249-0.904,5.732-2.659c2.674-3.164,2.276-7.896-0.888-10.569c-15.49-13.091-34.737-20.931-54.862-22.502V209.36 l39.316-35.885c3.06-2.792,3.276-7.536,0.483-10.595c-2.791-3.059-7.537-3.276-10.595-0.484l-29.205,26.656v-48.232 c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v48.23l-29.204-26.654c-3.059-2.792-7.802-2.576-10.596,0.484 c-2.792,3.059-2.575,7.803,0.484,10.595l39.315,35.883v121.329C286.47,330.773,285.361,330.871,284.259,330.994z"></path>
          <path d="M263.22,251.689c0.626,0.16,1.252,0.237,1.869,0.237c3.343,0,6.391-2.251,7.26-5.638c1.029-4.012-1.389-8.099-5.4-9.129 c-49.877-12.797-84.712-57.748-84.712-109.312C182.236,65.623,232.859,15,295.083,15c62.225,0,112.848,50.623,112.848,112.847 c0,51.563-34.834,96.514-84.711,109.312c-4.012,1.03-6.43,5.116-5.4,9.129c1.029,4.011,5.114,6.431,9.129,5.401 c56.513-14.501,95.982-65.427,95.982-123.842C422.931,57.352,365.578,0,295.083,0S167.236,57.352,167.236,127.847 C167.236,186.263,206.706,237.189,263.22,251.689z"></path>
        </g>
      </g>
    </svg>
                
                
                
                </div>
                <div className="word">Green Cleaning</div>
            </div>
            <div className="AA">
                <div className="thePhoto">
                    {/* To Update        */}
                    {/* <svg viewBox="0 0 512 512" height="70px" width="70px" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">
                         .st0{display:none;} .st1{fill:#474747;} 
                         </style> <g className="st0" id="Layer_1"></g> <g id="Layer_2"> <g> <path className="st1" d="M362.54,328.74c-0.01-0.01-0.01-0.01-0.02-0.02l-100.71-87.67c-2.63-2.29-6.56-2.29-9.19,0l-98.48,85.73 l-2.23,1.94c-0.01,0.01-0.01,0.01-0.02,0.02l-17.22,14.99l-20.53-23.58l62.23-54.18c2.92-2.54,3.22-6.96,0.68-9.88 c-2.54-2.92-6.96-3.22-9.88-0.68l-67.51,58.78c-2.92,2.54-3.22,6.96-0.68,9.88l29.72,34.14c1.22,1.4,2.94,2.26,4.8,2.39 c1.87,0.13,3.68-0.48,5.08-1.7l118.63-103.27l89.69,78.08l1.8,1.57l2.22,1.93v120.19h-93.62v-91.85c0-3.87-3.13-7-7-7h-50.15 c-3.87,0-7,3.13-7,7v91.85H163.5v-87.74c0-3.87-3.13-7-7-7s-7,3.13-7,7v94.74c0,3.87,3.13,7,7,7h43.66h50.15h107.62 c3.87,0,7-3.13,7-7v-115l10.92,9.5c1.28,1.11,2.91,1.72,4.6,1.72c0.16,0,0.32-0.01,0.48-0.02c1.85-0.13,3.58-0.99,4.8-2.39 l29.72-34.14c2.54-2.92,2.23-7.34-0.68-9.88l-56.25-48.98v-71.83c0-3.87-3.13-7-7-7h-39.83c-3.87,0-7,3.13-7,7v24.96l-42.87-37.33 c-2.63-2.29-6.56-2.29-9.19,0L203,224.22c-2.92,2.54-3.22,6.96-0.68,9.88c2.54,2.92,6.96,3.22,9.88,0.68l45.02-39.2L307.08,239 c2.07,1.8,5,2.23,7.5,1.09c2.5-1.14,4.1-3.63,4.1-6.37v-33.34h25.83v68.01c0,2.02,0.88,3.95,2.4,5.28l53.38,46.47l-20.53,23.58 L362.54,328.74z M207.16,457.38v-84.85h36.15v84.85H207.16z"></path> <path className="st1" d="M196.52,242.1c-0.18-0.42-0.4-0.83-0.65-1.21c-0.25-0.38-0.55-0.74-0.87-1.06c-0.32-0.32-0.68-0.62-1.06-0.87 s-0.79-0.47-1.21-0.64c-0.42-0.18-0.86-0.31-1.31-0.4c-0.9-0.19-1.83-0.19-2.74,0c-0.44,0.09-0.88,0.22-1.31,0.4 c-0.42,0.17-0.82,0.39-1.2,0.64c-0.39,0.25-0.75,0.55-1.07,0.87c-1.3,1.31-2.05,3.11-2.05,4.95s0.75,3.64,2.05,4.95 c0.32,0.32,0.68,0.61,1.07,0.87c0.38,0.25,0.78,0.47,1.2,0.64c0.43,0.18,0.87,0.31,1.31,0.4c0.45,0.09,0.92,0.14,1.37,0.14 c0.46,0,0.92-0.05,1.37-0.14c0.45-0.09,0.89-0.22,1.31-0.4c0.42-0.17,0.83-0.39,1.21-0.64c0.38-0.26,0.74-0.55,1.06-0.87 c1.3-1.3,2.05-3.11,2.05-4.95c0-0.46-0.04-0.92-0.14-1.37C196.82,242.97,196.69,242.52,196.52,242.1z"></path> <path className="st1" d="M314.27,415.11c3.87,0,7-3.13,7-7v-42.58c0-3.87-3.13-7-7-7h-31.84c-3.87,0-7,3.13-7,7v42.58 c0,3.87,3.13,7,7,7H314.27z M289.43,372.53h17.84v28.58h-17.84V372.53z"></path> <path className="st1" d="M358.62,137.95c10.68-5.71,17.56-14.28,20.44-25.45c7.61-29.53-16.44-67.1-17.47-68.68 c-1.58-2.44-4.51-3.68-7.35-3.06c-2.84,0.62-5.01,2.9-5.43,5.78c-0.03,0.15-2.76,15.55-21.29,35.77 c-18.07,19.72-7.02,45.22,3,58.4c-3.95,14.75-2.89,23.85-2.74,24.91c0.48,3.51,3.48,6.04,6.93,6.04c0.32,0,0.64-0.02,0.96-0.07 c3.83-0.53,6.51-4.06,5.98-7.89c-0.01-0.07-0.84-7.24,2.4-19.36C348.3,142.61,355.5,139.62,358.62,137.95z M337.84,91.77 c9.55-10.42,15.48-19.87,19.13-27.25C363,77.36,369.02,95.35,365.5,109c-1.89,7.33-6.3,12.76-13.48,16.6 c-2.08,1.11-7.24,3.3-11.45,5.02C335.23,122.91,325.55,105.18,337.84,91.77z"></path> <path className="st1" d="M94.84,219.94c0,12.24,9.96,22.19,22.19,22.19s22.19-9.95,22.19-22.19s-9.95-22.19-22.19-22.19 S94.84,207.7,94.84,219.94z M125.22,219.94c0,4.52-3.67,8.19-8.19,8.19s-8.19-3.67-8.19-8.19s3.67-8.19,8.19-8.19 S125.22,215.42,125.22,219.94z"></path> <path className="st1" d="M159.78,128.6c-17.84,0-32.35,14.51-32.35,32.35s14.51,32.35,32.35,32.35s32.35-14.51,32.35-32.35 S177.62,128.6,159.78,128.6z M159.78,179.3c-10.12,0-18.35-8.23-18.35-18.35s8.23-18.35,18.35-18.35s18.35,8.23,18.35,18.35 S169.9,179.3,159.78,179.3z"></path> <path className="st1" d="M249.29,142.16c0-11.71-9.53-21.24-21.24-21.24s-21.24,9.53-21.24,21.24c0,11.71,9.53,21.24,21.24,21.24 S249.29,153.87,249.29,142.16z M220.8,142.16c0-3.99,3.25-7.24,7.24-7.24s7.24,3.25,7.24,7.24c0,3.99-3.25,7.24-7.24,7.24 S220.8,146.15,220.8,142.16z"></path> </g> </g> </g></svg>
                */}
                <svg viewBox="0 0 512 512" height="70px" width="70px" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css">
          {`.st0{display:none;} .st1{fill:#474747;}`}
        </style>
        <g className="st0" id="Layer_1"></g>
        <g id="Layer_2">
          <g>
            <path className="st1" d="M362.54,328.74c-0.01-0.01-0.01-0.01-0.02-0.02l-100.71-87.67c-2.63-2.29-6.56-2.29-9.19,0l-98.48,85.73 l-2.23,1.94c-0.01,0.01-0.01,0.01-0.02,0.02l-17.22,14.99l-20.53-23.58l62.23-54.18c2.92-2.54,3.22-6.96,0.68-9.88 c-2.54-2.92-6.96-3.22-9.88-0.68l-67.51,58.78c-2.92,2.54-3.22,6.96-0.68,9.88l29.72,34.14c1.22,1.4,2.94,2.26,4.8,2.39 c1.87,0.13,3.68-0.48,5.08-1.7l118.63-103.27l89.69,78.08l1.8,1.57l2.22,1.93v120.19h-93.62v-91.85c0-3.87-3.13-7-7-7h-50.15 c-3.87,0-7,3.13-7,7v91.85H163.5v-87.74c0-3.87-3.13-7-7-7s-7,3.13-7,7v94.74c0,3.87,3.13,7,7,7h43.66h50.15h107.62 c3.87,0,7-3.13,7-7v-115l10.92,9.5c1.28,1.11,2.91,1.72,4.6,1.72c0.16,0,0.32-0.01,0.48-0.02c1.85-0.13,3.58-0.99,4.8-2.39 l29.72-34.14c2.54-2.92,2.23-7.34-0.68-9.88l-56.25-48.98v-71.83c0-3.87-3.13-7-7-7h-39.83c-3.87,0-7,3.13-7,7v24.96l-42.87-37.33 c-2.63-2.29-6.56-2.29-9.19,0L203,224.22c-2.92,2.54-3.22,6.96-0.68,9.88c2.54,2.92,6.96,3.22,9.88,0.68l45.02-39.2L307.08,239 c2.07,1.8,5,2.23,7.5,1.09c2.5-1.14,4.1-3.63,4.1-6.37v-33.34h25.83v68.01c0,2.02,0.88,3.95,2.4,5.28l53.38,46.47l-20.53,23.58 L362.54,328.74z M207.16,457.38v-84.85h36.15v84.85H207.16z"></path>
            <path className="st1" d="M196.52,242.1c-0.18-0.42-0.4-0.83-0.65-1.21c-0.25-0.38-0.55-0.74-0.87-1.06c-0.32-0.32-0.68-0.62-1.06-0.87 s-0.79-0.47-1.21-0.64c-0.42-0.18-0.86-0.31-1.31-0.4c-0.9-0.19-1.83-0.19-2.74,0c-0.44,0.09-0.88,0.22-1.31,0.4 c-0.42,0.17-0.82,0.39-1.2,0.64c-0.39,0.25-0.75,0.55-1.07,0.87c-1.3,1.31-2.05,3.11-2.05,4.95s0.75,3.64,2.05,4.95 c0.32,0.32,0.68,0.61,1.07,0.87c0.38,0.25,0.78,0.47,1.2,0.64c0.43,0.18,0.87,0.31,1.31,0.4c0.45,0.09,0.92,0.14,1.37,0.14 c0.46,0,0.92-0.05,1.37-0.14c0.45-0.09,0.89-0.22,1.31-0.4c0.42-0.17,0.83-0.39,1.21-0.64c0.38-0.26,0.74-0.55,1.06-0.87 c1.3-1.3,2.05-3.11,2.05-4.95c0-0.46-0.04-0.92-0.14-1.37C196.82,242.97,196.69,242.52,196.52,242.1z"></path>
            <path className="st1" d="M314.27,415.11c3.87,0,7-3.13,7-7v-42.58c0-3.87-3.13-7-7-7h-31.84c-3.87,0-7,3.13-7,7v42.58 c0,3.87,3.13,7,7,7H314.27z M289.43,372.53h17.84v28.58h-17.84V372.53z"></path>
            <path className="st1" d="M358.62,137.95c10.68-5.71,17.56-14.28,20.44-25.45c7.61-29.53-16.44-67.1-17.47-68.68 c-1.58-2.44-4.51-3.68-7.35-3.06c-2.84,0.62-5.01,2.9-5.43,5.78c-0.03,0.15-2.76,15.55-21.29,35.77 c-18.07,19.72-7.02,45.22,3,58.4c-3.95,14.75-2.89,23.85-2.74,24.91c0.48,3.51,3.48,6.04,6.93,6.04c0.32,0,0.64-0.02,0.96-0.07 c3.83-0.53,6.51-4.06,5.98-7.89c-0.01-0.07-0.84-7.24,2.4-19.36C348.3,142.61,355.5,139.62,358.62,137.95z M337.84,91.77 c9.55-10.42,15.48-19.87,19.13-27.25C363,77.36,369.02,95.35,365.5,109c-1.89,7.33-6.3,12.76-13.48,16.6 c-2.08,1.11-7.24,3.3-11.45,5.02C335.23,122.91,325.55,105.18,337.84,91.77z"></path>
            <path className="st1" d="M94.84,219.94c0,12.24,9.96,22.19,22.19,22.19s22.19-9.95,22.19-22.19s-9.95-22.19-22.19-22.19 S94.84,207.7,94.84,219.94z M125.22,219.94c0,4.52-3.67,8.19-8.19,8.19s-8.19-3.67-8.19-8.19s3.67-8.19,8.19-8.19 S125.22,215.42,125.22,219.94z"></path>
            <path className="st1" d="M159.78,128.6c-17.84,0-32.35,14.51-32.35,32.35s14.51,32.35,32.35,32.35s32.35-14.51,32.35-32.35 S177.62,128.6,159.78,128.6z M159.78,179.3c-10.12,0-18.35-8.23-18.35-18.35s8.23-18.35,18.35-18.35s18.35,8.23,18.35,18.35 S169.9,179.3,159.78,179.3z"></path>
            <path className="st1" d="M249.29,142.16c0-11.71-9.53-21.24-21.24-21.24s-21.24,9.53-21.24,21.24c0,11.71,9.53,21.24,21.24,21.24 S249.29,153.87,249.29,142.16z M220.8,142.16c0-3.99,3.25-7.24,7.24-7.24s7.24,3.25,7.24,7.24c0,3.99-3.25,7.24-7.24,7.24 S220.8,146.15,220.8,142.16z"></path>
          </g>
        </g>
      </g>
    </svg>
     
                    

                </div>
                <div className="word">Eco-Friendly </div>
                
            </div>
            <div className="AA">
                <div className="thePhoto">
                    <svg fill="#000000" width="70px" height="70px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M230.627,25.37207a32.03909,32.03909,0,0,0-45.2539,0c-.10254.10156-.20117.207-.29785.31348L130.17383,86.85938l-9.20313-9.20313a24.00066,24.00066,0,0,0-33.9414,0L10.34277,154.34277a8.00122,8.00122,0,0,0,0,11.31446l80,80a8.00181,8.00181,0,0,0,11.31446,0l76.68652-76.68653a24.00066,24.00066,0,0,0,0-33.9414l-9.20313-9.20215L230.31445,70.9248c.10645-.09668.21192-.19531.31348-.29785A32.03761,32.03761,0,0,0,230.627,25.37207ZM96,228.68652,81.87842,214.56494l25.53467-25.53369A8.00053,8.00053,0,0,0,96.09863,177.7168L70.564,203.25049,53.87842,186.56494l25.53467-25.53369A8.00053,8.00053,0,0,0,68.09863,149.7168L42.564,175.25049,27.31348,160,72,115.31445,140.68555,184Z"></path> </g></svg>
                </div>
                <div className="word">Stain Removal</div>
                
            </div>
            <div className="AA">
                <div className="thePhoto">
                    <svg width="70px" height="70px" viewBox="0 -2 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="consultation" d="M440.618,340.924A.994.994,0,0,1,440,340V308a5.005,5.005,0,0,1,5-5h1v-1a5.005,5.005,0,0,1,5-5h32a5.005,5.005,0,0,1,5,5v22a5.005,5.005,0,0,1-5,5h-1v1a5.005,5.005,0,0,1-5,5H447.414l-5.707,5.707A.994.994,0,0,1,441,341,.981.981,0,0,1,440.618,340.924ZM442,308v29.586l4.293-4.292A1,1,0,0,1,447,333h30a3,3,0,0,0,3-3V308a3,3,0,0,0-3-3H445A3,3,0,0,0,442,308Zm5-6v1h30a5.005,5.005,0,0,1,5,5v20h1a4,4,0,0,0,4-4V302a4,4,0,0,0-4-4H451A4,4,0,0,0,447,302Zm4,21a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2Zm0-6a1,1,0,1,1,0-2h20a1,1,0,0,1,0,2Z" transform="translate(-440 -297)" fill="#494949"></path> </g></svg>   
                </div>
                <div className="word">Consultation</div>
                
            </div>
            <div className="AA">
                <div className="thePhoto">
                <svg width="70px" height="70px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M678.5 446.8h79.1c7 0 13.7 2.8 18.6 7.7l79.3 79c5 5 7.8 11.7 7.8 18.7v92.5c0 14.7-11.8 26.5-26.4 26.5H678.5c-14.6 0-26.4-11.8-26.4-26.4V473.2c0-14.5 11.9-26.4 26.4-26.4z" fill="#FFFFFF"></path><path d="M836.9 697.6H678.5c-29.2 0-52.8-23.6-52.8-52.8V473.2c0-29.2 23.6-52.8 52.8-52.8h79.1c14.1 0 27.3 5.5 37.3 15.4l79.2 79c9.9 9.9 15.5 23.4 15.5 37.4v92.5c0.1 29.3-23.5 52.9-52.7 52.9zM678.5 473.2v171.6h158.4v-92.5l-79.2-79h-79.2z" fill="#333333"></path><path d="M209.2 275.3H686c32.3 0 58.5 26.2 58.5 58.5V639c0 32.3-26.2 58.5-58.5 58.5H209.2c-32.3 0-58.5-26.2-58.5-58.5V333.8c-0.1-32.3 26.1-58.5 58.5-58.5z" fill="#FFFFFF"></path><path d="M691.7 697.6H203.4c-29.2 0-52.8-23.6-52.8-52.8V328.1c0-29.2 23.6-52.8 52.8-52.8h488.3c29.2 0 52.8 23.6 52.8 52.8v316.7c0 29.2-23.6 52.8-52.8 52.8zM203.4 328.1v316.7h488.3V328.1H203.4z" fill="#333333"></path><path d="M293.6 618.4c38.2-1.2 69.3 30 68.1 68.1-1.1 34.6-29.2 62.7-63.8 63.8-38.2 1.2-69.3-30-68.1-68.1 1.2-34.5 29.3-62.7 63.8-63.8z" fill="#FFFFFF"></path><path d="M300.1 776.7c-54.4 2.5-99.1-42.3-96.6-96.6 2.2-47.4 40.6-85.8 87.9-87.9 54.4-2.5 99.1 42.3 96.6 96.6-2.1 47.3-40.5 85.7-87.9 87.9z m-0.7-131.7c-24.7-2.2-45.2 18.4-43 43 1.7 18.9 16.9 34.1 35.8 35.8 24.7 2.2 45.2-18.4 43-43-1.6-18.9-16.9-34.2-35.8-35.8z" fill="#333333"></path><path d="M663.2 631.6c38.2-1.2 69.3 30 68.1 68.1-1.1 34.6-29.2 62.7-63.8 63.8-38.2 1.2-69.3-30-68.1-68.1 1.1-34.5 29.2-62.7 63.8-63.8z" fill="#FFFFFF"></path><path d="M669.7 789.9c-54.4 2.5-99.1-42.3-96.6-96.6 2.2-47.4 40.6-85.8 87.9-87.9 54.4-2.5 99.1 42.3 96.6 96.6-2.2 47.3-40.5 85.7-87.9 87.9z m-0.8-131.7c-24.7-2.2-45.2 18.4-43 43 1.7 18.9 16.9 34.1 35.8 35.8 24.7 2.2 45.2-18.4 43-43-1.6-18.9-16.8-34.2-35.8-35.8z" fill="#333333"></path><path d="M203.4 407.2h488.3V460H203.4z" fill="#333333"></path><path d="M203.4 328.1h488.3v79.1H203.4z" fill="#ffffff"></path><path d="M691.7 526h158.4v52.8H691.7z" fill="#333333"></path></g></svg>    
                </div>
                <div className="word">Transportation</div>
                
            </div>
        </div>

    )
}
export const ProductExepmle=(prop)=>{
    var per1=prop.per || ""
    console.log(prop.Per)
    const itmes=[

      { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0 ,price:20},
      { id: 2, name: 'Glass Cleaner' ,describtion:"Judy Cleaner really cleans everything in the house", promo:50 ,price:20},
      { id: 3, name: 'Vinegar'  ,describtion:"Judy Cleaner really cleans everything in the house", promo:0 ,price:20},
      { id: 3, name: 'Baking soda' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0 ,price:20}
     ]
    const Jugy="./assetes/Judy2.jpg"
    return(
        <div className="theProducts">
            <div className="theTitle">
                <div className="klem">{prop.Per.context}</div>
                <a href="">{prop.Per.info}</a>
            </div>
            <div className="Products">
              {itmes.map(item => 
                // {{console.log("lsmslm")}}
                <div className="TheCart">
                    <div className="ThePic">
                        <img src={Judy} alt=""/>
                        {/* <!-- <div className="offre">-10%</div> --> */}
                        {item.promo!=0 &&(

                          <div className="Promo">Promo <label for=""
                          //  style="color: white;"
                          >-10%</label> </div>
                          )
                          
                        }

                    </div>
                    <div className="Name">{item.name}</div>
                    <div className="Name UU">{item.describtion}</div>
                    <div className="Price">
                        <div>Price:</div>
                        <div>{item.price}.000 dt</div>
                        {/* <!-- <div className="Promo">Promo <label for="" style="color: white;">-10%</label> </div> --> */}
                    </div>
                    <Link to={"/Product/"+item.id}>

                    <button>Buy</button>
                      </Link>

                </div>
                )}
                            </div>
        </div>

    )
}
export const NextFroCart=()=>{
    // const bannet1="./assetes/Bannet1.jpg"    

    return(
        <div>
        <div className="Title">
          <div className="theG">Our Best Product.</div>
          <button>
            <div className="theT">see more</div>
            <div className="thesvg">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 12H20M20 12L16 8M20 12L16 16"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
        <div className="all">
          <div className="laCar">
            <img src={bannet1} alt="" />
            <div className="theTxcadre">
              <div className="title">All-Purpose Cleaner</div>
              <div className="DD">
                Powerful, sustainable cleaner for a spotless, environmentally conscious home.
              </div>
              <button>Buy</button>
            </div>
          </div>
          <div className="laCar">
            <img src={bannet1} alt="" />
            <div className="theTxcadre">
              <div className="title">All-Purpose Cleaner</div>
              <div className="DD">
                Powerful, sustainable cleaner for a spotless, environmentally conscious home.
              </div>
              <button>Buy</button>
            </div>
          </div>
          <div className="laCar">
            <img src={bannet1} alt="" />
            <div className="theTxcadre">
              <div className="title">All-Purpose Cleaner</div>
              <div className="DD">
                Powerful, sustainable cleaner for a spotless, environmentally conscious home.
              </div>
              <button>Buy</button>
            </div>
          </div>
          <div className="laCar">
            <img src={bannet1} alt="" />
            <div className="theTxcadre">
              <div className="title">All-Purpose Cleaner</div>
              <div className="DD">
                Powerful, sustainable cleaner for a spotless, environmentally conscious home.
              </div>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
  

    
    )

}
export const LandingPage=()=>{
  var dataPer1={
    context:"Best Product",
        info:"Store"
  }
  var dataPer={
    context:"Daily Deal",
        info:"Store"
  }
    // <img src={bannet1} "./assetes/Bannet1.jpg" alt="" />
    const bannet1="./assetes/Bannet1.jpg"
  return ( 
    <div className="FFFFFFFF">
        
        <Banner/>
        <Filltre/>
        
        <ProductExepmle Per={dataPer} />
        <Covers/>
        <ForLogo/>
        {/* <NextFroCart/> */}
        <ProductExepmle Per={dataPer1} />
    {/* <!-- the Exepmle of the product /////////////////////////////////////////////////////////--> */}
    {/* <!-- the4 Covers //////////////////////////////////////--> */}
      
      {/* <!-- our owners seys §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§ --> */}
      <div className="ourOwnersSays">
        <div className="Title">What Owners Says</div>
        <div className="PP">
            <div className="OnePA">
                <div className="Bulle">
                    <div className="la1">

                        <div className="Img">
                            <img src={Profile} alt=""/>
                        </div>
                        <div>
                            <div className="namee">Melek Ben Jemiaa</div>
                            <div className="post">Comunity Manager</div>
                        </div>
                    </div>
                    <div className="Svgg">
                       {/* To update */}
                        {/* <svg fill="#416f97" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#416f97"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64 C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7 c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path> </g></svg> */}
                        <svg fill="#416f97" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#416f97">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path>
  </g>
</svg>

                    </div>
                </div>
                <div className="laParalo">
                    Step into a world of cleanliness and order with our premium cleaning solutions. Elevate your space, simplify your routine. Your journey to a sparkling home begins here.
                </div>
            </div>
            <div className="OnePA">
                <div className="Bulle">
                    <div className="la1">

                        <div className="Img">
                            <img src={Profile} alt=""/>

                        </div>
                        <div>
                            <div className="namee">Melek Ben Jemiaa</div>
                            <div className="post">Comunity Manager</div>
                        </div>
                    </div>
                    <div className="Svgg">
                        {/* To Update */}
                        {/* <svg fill="#416f97" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#416f97"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64 C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7 c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path> </g></svg> */}
                        <svg fill="#416f97" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#416f97">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path>
  </g>
</svg>

                    </div>
                </div>
                <div className="laParalo">
                    Step into a world of cleanliness and order with our premium cleaning solutions. Elevate your space, simplify your routine. Your journey to a sparkling home begins here.
                </div>
            </div>
            {/* <!-- <div></div> --> */}
        </div>
        
      </div>
      
    </div>
  )
}
// export default LandingPage;