import { CDN_URL } from "../../utils/constants";



const ResCard = (props) => {
    const {resData} = props
    const {name,cloudinaryImageId,cuisines,avgRating,sla,costForTwo} = resData?.info;
   
    return (
        <div className="p-2 m-2 w-[280px] bg-green-50 hover:bg-green-200">         
            <img className="w-3xs" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold">{name}</h3>
            <h4 className="text-wrap">{cuisines.join(", ")}</h4>
            <h4 className="text-wrap">{avgRating}⭐</h4>
            <h4 className="text-wrap">{sla.deliveryTime} mins</h4>
            <h4 className="text-wrap">{costForTwo}</h4>
        </div>
    );
}

export default ResCard;