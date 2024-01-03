import RestoCard from "./Restocard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [restoList, setRestoList] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filterResto=restoList.filter(
            (res)=>res.info.avgRating===4.1
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
