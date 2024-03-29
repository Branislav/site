import * as React from "react";
import "../css/index.css";

const Header = () => {
    return (
        <ul className="menu">
            <li className="menuItem"><a href="/">Thoughts</a></li>
            <li className="menuItem"><a href="/about">About</a></li>
            <li className="menuItem"><a href="https://app.reclaim.ai/m/branny/vent" target="_blank" rel="noreferrer">Chat</a></li>
        </ul>
    )
}

export default Header