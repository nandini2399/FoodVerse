import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div><img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/10/1/f6d6503d-bfbe-49ad-97bc-1a63a1f520c6_8378db10-8513-466a-8500-9548593934fe.jpg"></img></div>
            <div className="nav-items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>🛒</li>
                </ul> 
        </div>
        </div>
    )
}

const resCardStyle = {
    backgroundColor : "#f0f0f0"
}

const ResCard = () => {
    return (
        <div className="res-card" style={resCardStyle}>         
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/kf9bbtt8to6ceel0zyxp" />
            <h3>Desi Vibes</h3>
            <h4>North Indian, Asian</h4>
            <h4>4.7 ⭐</h4>
            <h4>24 minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            <ResCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (    
        <div className="app">
            <Header />
            <Body />
            
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //This is the syntax that babel understands
