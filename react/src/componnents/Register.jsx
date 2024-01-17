import React, { useState } from "react";
import "./Style/LogInStyling.css"
import "./Style/Magazine.css"

export const Register=()=>{
    const [username,setusername] =useState("")
    const [password,setPassword] =useState("")
    const [Email,setEmail] =useState("")
    const [ConfPassword,setConfPassword] =useState("")
    const checkInputs=()=>{

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
                <a  className="Alert">Your password is incorrect</a>
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