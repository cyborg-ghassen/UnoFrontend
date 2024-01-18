import React, { useState } from "react";
import "./Style/LogInStyling.css"
import "./Style/Magazine.css"

export const Register=()=>{
    const [username,setusername] =useState("")
    const [password,setPassword] =useState("")
    const [Email,setEmail] =useState("")
    const [ConfPassword,setConfPassword] =useState("")
    const [Alert,setAlert] =useState("")
    const checkInputs=()=>{
        if (username.length=="" || password=="" || ConfPassword==""){

            setAlert("You should complete the form.")
            return 0
        }
        if (username.length<5){
            setAlert("Username must have more than 5 characters.")
            return 0
        }
        if (Email.length!=0){
            // if the email not exist
            if (false){
                setAlert("Email not Found.")
                return 0
            }
        }
        if (password.length<5){
            setAlert("Password must have more than 5 characters.")
            return 0
        }
        if (password!=ConfPassword){
            setAlert("Password Confirmation is incorrect")
            return 0
        }
        // send a request to register the new client
        // redirect to logIn Page

    }
    return (
<div className="All">
            <div id="PPPPPPPPPPPPPPO" className="Content">
                <div className="Tittre">Create Account</div>
                <div className="RR username">
                    <div>Username*</div>
                    <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
                </div>
                <div className="RR username">
                    <div>Email</div>
                    <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="RR password">
                    <div >Password*</div>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    
                </div>
                <div className="RR password">
                    <div >Confirm Password*</div>
                    <input type="password" value={ConfPassword} onChange={(e)=>setConfPassword(e.target.value)} />
                    
                </div>
                <div className="OOO xx">
                    <button className="LOG" onClick={checkInputs} >Create Account</button>
                    {/* <button className="LOG">Log in</button> */}
                </div>

                {Alert!="" &&

                    <a  className="Alert">{Alert}</a>
                }
                
                
                <div className="OOO xx">
                    <a id="m3" href="/LogIn" className="LOG">Go to login page</a>
                    {/* <button className="LOG">Log in</button> */}
                </div>
                {/* <div className="OOO"> */}
                    {/* <button className="LOG">Log in With Google</button> */}
                    {/* <button className="LOG">Log in</button> */}
                {/* </div> */}
               
            </div>
        </div>
    )
}