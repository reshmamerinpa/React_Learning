import React, { useState } from 'react';
import './loginSignup.scss'
import password_icon from '../Assets/email.png'
import email_icon from '../Assets/pwd.png'
import user_icon from '../Assets/user.png'

const LoginSignup = () => {
    const [action ,setAction] = useState("Sign Up")
  return (
    <>
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>    
        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Username'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" name="" id="" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" name="" id="" placeholder='Password'/>
            </div>
        </div>
         {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password? 
            <span>Click here</span>
        </div>}
        
           
        <div className="sumit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    </>
  )
}

export default LoginSignup;
