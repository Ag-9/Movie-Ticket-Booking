import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <ul className="nav-ul">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/Cart">Cart</Link></li>

            </ul>
        </div>
    )
}




export default Nav