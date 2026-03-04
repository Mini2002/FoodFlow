import React from 'react'
import { useEffect } from 'react'
import mockMenuData from './utils/mockMenuData'
import { addItem } from './utils/cartSlice'
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {

    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(addItem("Pizza"))
    }
    useEffect(()=>{
        fetchData()
    },[])
    // const fetchData = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5759942&lng=88.48806689999999&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")
    //     // const data = await fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5759942&lng=88.48806689999999&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")}`)
    //     // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5759942&lng=88.48806689999999&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")
    //     //   const data = await fetch(`https://corsproxy.io/?${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5759942&lng=88.48806689999999&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")}`)
    //     const json = await data.json()
    //     // const json = mockMenuData 
    //     console.log(json)

    // }

    // const fetchData = async ()=>{
    //     try {
    //         // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5759942&lng=88.48806689999999&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")
    //         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.653564&lng=88.4450847&restaurantId=169017&catalog_qa=undefined")
    //         const json = await data.json()
    //         console.log(json)
    //     } catch (error) {
    //         console.error("Error fetching menu:", error)
    //     }
    // }

    const fetchData = async ()=>{
    try {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.653564&lng=88.4450847&restaurantId=73859&catalog_qa=undefined&submitAction=ENTER")
        
        // Check if response is ok
        if (!data.ok) {
            console.error("HTTP Error:", data.status);
            return;
        }
        
        // Check if response has content
        const text = await data.text();
        if (!text) {
            console.error("Empty response from server");
            return;
        }
        
        const json = JSON.parse(text);
        console.log(json)
    } catch (error) {
        console.error("Error fetching menu:", error)
    }
}
  return (
    <div>
        <h1>Restaurant Menu</h1>
        <h3>Menu</h3>
        <ul>
            <li>Pizza
                <button onClick={handleClick}>add+</button>
            </li>
            <li>Burger</li>
            <li>Pasta</li>
            <li>Salad</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu