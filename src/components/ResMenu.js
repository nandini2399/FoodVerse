import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const ResMenu = () => {
    
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId)
    
    if(resInfo===null) return (<Shimmer />)

    const {name,cuisines,costForTwoMessage,cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info; 
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} for Rs {item.card.info.price/100}</li>
            ))}
        </div>
    )
}

export default ResMenu;
