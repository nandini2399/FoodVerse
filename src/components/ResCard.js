import { CDN_URL } from "../../utils/constants";

const resCardStyle = {
    backgroundColor : "#f0f0f0"
}

const ResCard = (props) => {
    const {resData} = props
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;
    return (
        <div className="res-card" style={resCardStyle}>         
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default ResCard;