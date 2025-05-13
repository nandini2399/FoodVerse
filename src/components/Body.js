
import ResCard from "./ResCard";
import resList from "../../utils/mockData";

let filteredListOfRestaurant = resList;
 
const filterClicked = () => {
    console.log("Button clicked")
    filteredListOfRestaurant = resList.filter((res)=>{
        return res.info.avgRating>4.2
    })
}


const Body = () => {
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={filterClicked}>Top Rated</button>
            </div>
            <div className="res-container">
            { filteredListOfRestaurant.map((restaurant)=> (
                <ResCard key={restaurant.info.id} resData={restaurant} />
            ))}
            {/* <ResCard resData={resList[0]} /> */}
            </div>
        </div>
    )
}

export default Body;