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
        <div className="flex justify-between bg-green-100">
            <div><img className="w-20 border-green-950" src={LOGO_URL}></img></div>
            <div className="m-2 px-5">
               <ul className="flex p-4 mx-4">
                <li className="mx-2 p-2 hover:bg-white text-green-900"><Link to="/">Home</Link></li>
                <li className="mx-2 p-2 hover:bg-white text-green-900"><Link to="/about">About Us</Link></li>
                <li className="mx-2 p-2 hover:bg-white text-green-900"><Link to="/contact">Contact Us</Link></li>
                <li className="mx-2 p-2 hover:bg-white text-green-900"><Link to="/groceries">Groceries</Link></li>
                <li className="mx-2 p-2 hover:bg-white text-green-900">🛒</li>
                <li className="mx-2 p-2 hover:bg-white text-green-900" onClick={()=>{
                    btnName==="Login"? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</li>
                <li className="mx-2 p-2">Network: {onlineStatus?"🟢":"🔴"}</li>
                </ul> 
            </div>
        </div>
    )
}

export default Header;