import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm7jHfvHAZCAuvLki42P4-nHtPpzF-HMeGg&s"/>
            </div>
            <div className="nav">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact us</Link></li>
                <li><Link to = "/cart">Cart</Link></li>
            </ul>
            </div>

        </div>
    )
}
export default Header