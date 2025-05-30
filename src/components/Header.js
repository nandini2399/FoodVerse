import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect, use } from "react";
import { Link } from "react-router";
import useNetworkStatus from "../../utils/useNetworkStatus";

const Header = () => {

    const [btnName,setBtnName] = useState("Login")

    const onlineStatus = useNetworkStatus();

    console.log("Component")

    useEffect(()=>{
        console.log("Use effect called!");
    },[btnName]) //will be everytime value of btnName changes  

    return (
        <div className="header">
            <div><img className="logo" src={LOGO_URL}></img></div>
            <div className="nav-items">
               <div style={{float:"right"}}>Network : {onlineStatus?"🟢":"🔴"}</div>
               <ul>
                
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
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