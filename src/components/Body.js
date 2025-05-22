import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurant, setListOfRest] = useState([]);
  let [filteredListOfRestaurant, setFilteredListOfRest] = useState([]);

  let [searchValue,setSearchValue] = useState("")

  const filterList = () => {
    let filteredList = listOfRestaurant.filter((currRes) => {
      if (currRes.info.avgRating > 4.5) return true;
    });
    setFilteredListOfRest(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    listOfRestaurant=[]
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6407512&lng=77.3396964&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (e) {
      console.log(e);
    }
  };

  const searchData = () =>{
    const filteredRes = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredListOfRest(filteredRes)
  }


  //conditional rendering
  // if(listOfRestaurant.length===0){
  //   return <Shimmer />
  // }

  return listOfRestaurant.length===0? <Shimmer /> :(
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="search-box" />
          <button onClick={searchData} className="search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={filterList}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <ResCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
