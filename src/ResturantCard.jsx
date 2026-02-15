
import resList from './utils/mockdata'
import React from 'react'

const ResturantCard = (props) => {
  const {resData} = props;
  console.log(resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  return (
    <div className='res-card'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+  resData?.info?.cloudinaryImageId
}/>


       
        <h4>{resData?.info?.name}</h4>
        <h4>{resData?.info?.avgRating}</h4>

        <h4>{resData?.info?.sla.deliveryTime + "min"}</h4>

        <h4>{resData?.info?.costForTwo}</h4>



    </div>
  )
}

export default ResturantCard