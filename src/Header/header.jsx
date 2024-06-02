import { Link } from "react-router-dom";
import "./header.css"

export default function Header(){
    return(
        <div className="header-tab">
            <img src="https://i.pinimg.com/736x/ac/7d/f1/ac7df10ba8f83908c027c0b559ba4078.jpg" alt="logo" id="header-logo"/>
            <div className="nav">
                <ul>
                <Link to= "/">
                    <button id="home-link">Home</button></Link>
                <Link to="/register"><button className="bt1">Register</button></Link>  
                </ul>
            </div>
        </div>
    )
}