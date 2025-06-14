import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";
import image from '../images/selfie.png';

const AboutPage = () => {
    return (
        <main className="pageStyles">
            <Header/>
            <h1 className="headingStyles">
            <span className="headingAccentStyles">About me</span></h1>
            
            <p className="pageParagraphStyles">
            
            
            <span class="halfWidth">
            <img src={image} alt="A selfie of myself"></img>
            </span>
            <span class="halfWidth"> Hi, I'm Branny! <br/><br/> So far, I've built three successful fully remote Support teams in completely different industries - including B2B, B2C, SaaS and service-based businesses.
            <br/><br/>
            
            </span>
            <br/>I managed to shift the business's perspective and reach a wider understanding that Support is not a cost center and should not be treated as such.
            <br/><br/>
            I've also implemented a company-wide initiative where expert staff that's not customer-facing have learned to speak directly with customers. This has decreased resolution time by 10x and increased customer satisfaction by 25%. I've spent the last eight years thinking about excellent support interactions and how to achieve them on a tight budget.
            <br/><br/>
            I enjoy solving puzzles and creating amazing customer experiences.
            <br/><br/>
            Outside of business hours, you'll find me tinkering with technology, indoor swimming (and losing the race against Dutch grandmas), cycling and enjoying good food. I was born and raised in Serbia, but I've lived in the Netherlands for over a decade.
            <br/><br/>
            This website is the space where you can read about my Support philosophy, find tips and tricks, or find out how you could work with me. 
            </p>
            
            <Footer/>
        </main>
    )
}

export default AboutPage

export const Head = () => <title>About me</title>