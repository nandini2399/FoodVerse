import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect, use } from "react";


const Header = () => {

    const [btnName,setBtnName] = useState("Login")

    console.log("Component")

    useEffect(()=>{
        console.log("Use effect called!");
    },[btnName]) //will be everytime value of btnName changes  

    return (
        <div className="header">
            <div><img className="logo" src={LOGO_URL}></img></div>
            <div className="nav-items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>🛒</li>
                <li onClick={()=>{
                    btnName==="Login"? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</li>
                </ul> 
        </div>
        </div>
    )
}

export default Header;