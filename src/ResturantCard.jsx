import resList from "./utils/mockdata";
import React from "react";

const ResturantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
  // console.log(
  //   resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants,
  // );

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{resData?.info?.sla.deliveryTime + "min"}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
