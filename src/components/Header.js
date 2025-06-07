import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useNetworkStatus from "../../utils/useNetworkStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {

    const [btnName,setBtnName] = useState("Login")

    const onlineStatus = useNetworkStatus();

    const {loggedInUser,mode,setCurrentMode} = useContext(UserContext)
    

    const toggleMode = () =>{
        setCurrentMode(!mode)
    }

    useEffect(()=>{
        console.log("Use effect called!");
    },[btnName]) //will be everytime value of btnName changes  

    return (
      <div
        className={`flex justify-between ${
          mode ? "bg-black text-amber-50" : "bg-green-100"
        } `}
      >
        <div>
          <img className="w-20 border-green-950" src={LOGO_URL}></img>
        </div>
        <div className="m-2 px-5">
          <ul className="flex p-4 mx-4">
            <li
              className={`mx-2 p-2  ${
                mode ? "text-amber-50" : "text-green-900 hover:bg-white"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`mx-2 p-2  ${
                mode ? "text-amber-50" : "text-green-900 hover:bg-white"
              }`}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className={`mx-2 p-2  ${
                mode ? "text-amber-50" : "text-green-900 hover:bg-white"
              }`}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
            <li
              className={`mx-2 p-2  ${
                mode ? "text-amber-50" : "text-green-900 hover:bg-white"
              }`}
            >
              <Link to="/groceries">Groceries</Link>
            </li>
            <li className="mx-2 p-2  text-green-900 hover:bg-white">🛒</li>
            <li
              className={`mx-2 p-2  ${
                mode ? "text-amber-50" : "text-green-900 hover:bg-white"
              }`}
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </li>
            {/* <li className="mx-2 p-2">{loggedInUser}</li> */}
            <li className="mx-2 p-2">
              Mode
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" onChange={toggleMode} />
                <div className="
                bg-green-300 peer-checked:bg-gray-400 w-full h-full rounded-full transition-colors
                "></div>
                <div className="
                absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-6 transform
                "></div>
              </label>
            </li>
            <li className="mx-2 p-2">Network: {onlineStatus ? "🟢" : "🔴"}</li>
          </ul>
        </div>
      </div>
    );
}

export default Header;