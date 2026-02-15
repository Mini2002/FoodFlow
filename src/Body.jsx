import React from 'react'
import resList from './utils/mockdata'
import ResturantCard from './ResturantCard'

const Body = () => {
  return (
    <div>
        <div className='res-container'>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]}/>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]}/>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]}/>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]}/>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[4]}/>
          <ResturantCard resData = {resList?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[5]}/>
       
        </div>
    </div>
  )
}

export default Body