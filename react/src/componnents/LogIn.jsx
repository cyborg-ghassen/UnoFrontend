import React, { useState } from "react";
import { api, setAuthToken } from "../utils/api";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { setTrue } from "../reduxStores.js/authSlice";
import "./Style/LogInStyling.css"
export const LogIn=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [LogInAlert,setLogInAlert] =useState("")
    const [username,setusername] =useState("")
    const [password,setPassword] =useState("")
    const getToken=()=>{
        return new Promise(async(resolve, reject) => {
            
            var data=await api.post('/auth/login/',{username:username,password:password})
            .catch((e)=>{
                reject(e.response.data.detail)
                // setLogInAlert
            })
            // console.log("this is the data "+data)
            if (data){
                console.log(data.data.detail)
                if (data.status!==200 ){
                    reject(data.data.detail)
                }
                if (data.data.token==null){
                    reject(data.data.detail)
                }else{
                    resolve(data.data.token)
                }
            }else{
                reject("something want wrong")

            }
        })
    }
    const checkInputs=()=>{
        // console.log(username)
        // console.log(password)
        getToken().then((token)=>{
            setAuthToken(token)
            dispatch(setTrue())
            console.log("we set the ture value")
            // var token
            localStorage.setItem('Token', token);
            navigate("/home")

        }).catch((msg)=>{
            console.log(msg)
            setLogInAlert(msg)
            //handle an alert for the user
        })
        
    }
    
    return(
        <div className="All">
            <div className="Content">
                <div className="Tittre">Log In</div>
                <div className="RR username">
                    <div>Username</div>
                    <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
                </div>
                <div className="RR password">
                    <div >Password</div>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    
                </div>
                <div className="OOO xx">
                    <button className="LOG" onClick={checkInputs} >Log in</button>
                    {/* <button className="LOG">Log in</button> */}
                </div>
                {LogInAlert!=="" &&
                  <a className="Alert" href={"#!"}>
                    <label htmlFor="">
                    {LogInAlert}
                    </label>
                    </a>
                } 
                <div className="OOO xx">
                    <a id="m3" href="/register" className="LOG">
                         Create an account
                        </a>
                    {/* <button className="LOG">Log in</button> */}
                </div>
                <div className="LogInWithGoogle RR">
                <div className="WWWWWWWWWW">Log In With Goolge</div>
                    <button>
                        <div className="GoogleSvg">

                        <svg
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        id="a"
        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11L17 24z" />
    <path clipPath="url(#b)" fill="#EA4335" d="M0 11L17 24l7-6.1L48 14V0H0z" />
    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
  </svg>

                        </div>
                        <div className="Name">Google</div>
                    </button>
                {/* <input type="password" /> */}
                </div>
                {/* <div className="OOO"> */}
                    {/* <button className="LOG">Log in With Google</button> */}
                    {/* <button className="LOG">Log in</button> */}
                {/* </div> */}
               
            </div>
        </div>
    )
}