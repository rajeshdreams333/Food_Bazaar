import RestoCard from "./Restocard";
import { restAPi } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restoList, setRestoList] = useState([]);
  const [filterResto, setFilterResto] = useState([]);

  const [searchvalue, setSearchvalue] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(restAPi);
    const json = await data.json();
    console.log(json);
    setRestoList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants||
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setFilterResto(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restoList == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
          className="search-box"
          value={searchvalue}
          onChange={(e)=>{
            setSearchvalue(e.target.value)
          }} />
          <button className="search-btn" onClick={()=>{
            const filterdata=restoList.filter((res)=>
             res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
            );
            setFilterResto(filterdata)
          }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterResto = restoList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestoList(filterResto);
          }}
        >
          Top Rated Resto
        </button>
      </div>
      <div className="res-container">
        {filterResto.map((resto) => (
          <RestoCard key={resto.info.id} resData={resto} />
        ))}
      </div>
    </div>
  );
};

export default Body;
