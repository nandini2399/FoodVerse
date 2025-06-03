import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ResCategoryAccordion from "./ResCategoryAccordion";


const ResMenu = () => {
    
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId)
    
    if(resInfo===null) return (<Shimmer />)

    const {name,cuisines,costForTwoMessage,cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info; 
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4].card?.card

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((e)=>e.card.card?.['@type']===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )

    // console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-7 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>

            {categories.map((category)=>{
                return <ResCategoryAccordion key={category.card?.card?.categoryId} data={category.card.card}/>
            })}
        </div>
    )
}

export default ResMenu;
