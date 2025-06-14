import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";

const ContactPage = () => {
    return (
        <main className="pageStyles">
            <Header/>
            <h1 className="headingStyles">
            <span className="headingAccentStyles">Get in touch</span></h1>
            <p className="pageParagraphStyles">
            
            <p>Connect:</p>      
        <a 
            href="https://linkedin.com/in/brannyb"
            target="_blank"
            className="secondlinkStyle"
            rel="noreferrer">
                linkedin.com/in/brannyb</a> <br/>
        <a 
            href="mailto:branislav@balazevic.com"
            target="_blank"
            className="secondlinkStyle"
            rel="noreferrer">
                branislav@balazevic.com</a>



            </p>
        </main>
    )
}

export default ContactPage

export const Head = () => <title>Contact</title>