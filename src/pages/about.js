import * as React from "react";
import Header from "../components/Header";
import "../css/index.css";

const AboutPage = () => {
    return (
        <main className="pageStyles">
            <Header/>
            <h1 className="headingStyles">
            <span className="headingAccentStyles">About me</span></h1>
            <p className="pageParagraphStyles">
            With over 7 years of experience designing and building support systems 
            across multiple industries, I've seen and successfully 
            navigated through all stages of startup and scaleup development. 
            I'm based in Hilversum, heading the lovely support team at Omnipresent.
            <br/>
            <br/> 
            Currently tinkering with my home server running local network services, 
            including but not limited to, a voice powered shopping list, offline wiki, 
            storage, home automations and a whole lot more. 
            </p>
            <p className="pageParagraphStyles"> Connect:&nbsp;  
            <a 
            href="https://linkedin.com/in/brannyb"
            target="_blank"
            className="secondlinkStyle"
            rel="noreferrer">
                linkedin.com/in/brannyb</a>
            </p>
        </main>
    )
}

export default AboutPage

export const Head = () => <title>About me</title>