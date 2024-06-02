import { Link } from "react-router-dom";
import "./header.css"

export default function Header(){
    return(
        <div className="header-tab">
            <img src="./src/assets/E-Cell_RGPV_logo.png" alt="logo" id="header-logo"/>
            <div className="nav">
                <ul>
                <Link to= "/">
                    <span>Home</span></Link>
                <Link to="/register"><span>Register</span></Link>  
                </ul>
            </div>
        </div>
    )
}