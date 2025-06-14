import * as React from "react";
import "../css/index.css";
import icon1 from '../images/icon.png';

const Row = () => {
    return (
        <div className="row">
            <div className="rowItem"><a href="/thoughts"> <img className="rowIcon" src={icon1} alt="icon"></img> <br/>  Read the blog </a></div>
            <div className="rowItem"><a href="/mentorships"><img className="rowIcon" src={icon1} alt="icon"></img><br/> Work with me</a></div>
            <div className="rowItem"><a href="/contact"><img className="rowIcon" src={icon1} alt="icon"></img><br/> Get in touch</a></div>
        </div>
    )
}

export default Row 