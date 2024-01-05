import RestoCard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  
  const [restoList, setRestoList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.8089863&lng=83.3455422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log(json);
    setRestoList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return restoList.length===0 ?<Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
              <input type="text" className="search-box" />
              <button className="search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          const filterResto=restoList.filter(
            (res)=>res.info.avgRating>4
          );
          setRestoList(filterResto)
        }}>Top Rated Resto</button>
      </div>
      <div className="res-container">
        {restoList.map((resto) => (
          <RestoCard key={resto.info.id} resData={resto} />
        ))}
      </div>
    </div>
  );
};

export default Body;
