import * as React from "react";
import "../css/index.css";

const Header = () => {
    return (
        <ul className="menu">
            <li className="menuItem"><a href="/">home</a></li>
            <li className="menuItem"><a href="/thoughts">thoughts</a></li>
            <li className="menuItem"><a href="/about">about</a></li>
            <li className="menuItem"><a href="/mentorships">work with me</a></li>
            
            
        </ul>
    )
}

export default Header 