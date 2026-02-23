import React, { use } from 'react'
import resList from './utils/mockdata'
import ResturantCard from './ResturantCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Body = () => {
  const [resturantList, setResturantList] = useState(resList)
  const [filtered, setFiltered] = useState([])

  const fetchData = async()=>{
    const data = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.653564&lng=88.4450847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    const restaurant = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResturantList(restaurant)
    setFiltered(restaurant)
  }
  useEffect(()=>{
    fetchData()
  },[])

  // const searched = (e)=>{
  //   e.filter

  // }
  const handleSearch = ()=>{
    console.log("searching")
  }

  // always pass in the reference to the function and do not call the function on any event handler 
  return (
    <div className='body'>
      <div className='filter'>
        <div>
          <input
            type="text"
            onChange={handleSearch}
          />
          <button>
            Search
          </button>
        </div>
        <button 
        className='filter-btn'
        onClick={()=>{
          const filtered = resturantList.filter(res => res.info.avgRating >= 4)
          setFiltered(filtered)
        }}
        >
          Rating 4+
          </button>
      </div>
        <div className='res-container'>
          {
            filtered.map(res => 
            <Link to = {"restaurants/" + res.info.id}><ResturantCard key = {res.info.id} resData = {res}/></Link>
          )
          }
        </div>
    </div>
  )
}

export default Body