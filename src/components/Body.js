import ResCard from "./ResCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useNetworkStatus from "../../utils/useNetworkStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRest] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRest] = useState([]);

  const [searchValue,setSearchValue] = useState("")

  const onlineStatus = useNetworkStatus();

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
    //listOfRestaurant=[]
    try {
      const data =await fetch(
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

  if(!onlineStatus){
    return <h1>You're offline. Please check your internet connection.</h1>
  }

  return listOfRestaurant.length===0? <Shimmer /> :(
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="flex m-2">
        <div className="m-2">
          <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="border-2 rounded-2xl px-5" />
          <button onClick={searchData} className="p-1 m-1 hover:bg-green-100">Search</button>
        </div>
        <button className="p-1 m-1 hover:bg-green-100" onClick={filterList}>
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><ResCard resData={restaurant} /></Link>
        ))}
        {/* <ResCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
