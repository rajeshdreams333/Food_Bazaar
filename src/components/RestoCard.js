import {CDN_URL} from "../utils/constants";
const RestoCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating } = resData.info;
    const { slaString } = resData.info.sla;
    return (
      <div className="restocard" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          alt="resto-image"
          className="resto-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating + " ⭐"}</h4>
        <h4>{slaString}</h4>
      </div>
    );
  };
  export default RestoCard;