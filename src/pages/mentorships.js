import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";

const MentorshipsPage = () => {
    return (
        <main className="pageStyles">
            <Header/>
            <h1 className="headingStyles">
            <span className="headingAccentStyles">Mentorships</span></h1>
            <p className="pageParagraphStyles">
            As the first line of defence, a Customer Support team can make or break
the customer experience, satisfaction, and with that - your overal retention
rate. It's as much about implementing a set of well-thought-out processes
as it is about having agents who feel empowered to escalate the right
problems and turn an unhappy customer into a 5-star review.
A pretty important function in the grand scale of things, right?
<br/><br/>
Well, for how important they are - Support teams rarely get the time they
need (and deserve) to establish an effective system, regularly improve
processes and the knowledge base, and especially to work on self-
development for each of the agents or people managers. We get stuck in a
cycle of responding to urgent tickets, putting out fires, and submitting
feature requests to the product team. All very important tasks, but not
ones that bring progress in the long run.
<br/><br/>
Bringing in a mentor helps create that space - there's someone who will
be able to look at the full picture from the outside, help identify the areas
that need the most attention, and have a tailored approach to each
individual.
<br/><br/>
The best part is you don't have to wait for the end of the mentorship
period to see the results! After every session, the mentee has a new set of
questions, suggestions, and ideas to start implementing or develop further.
            </p>
            <h3 className="headingStyles">
            <span className="headingAccentStyles">The Deets</span></h3>
            <p className="pageParagraphStyles">
                Package: Nudge / Steer / Drive <br/>
                Duration: One quarter / Two quarters / Longer  <br/>
                Sessions: Two per month / Two per month / more if needed  <br/>
                Financials: Get in touch <br/> 


            </p>
            <h3 className="headingStyles">
            <span className="headingAccentStyles">The Process</span></h3>
            <p className="pageParagraphStyles"> 
                <b>One - Intro call</b><br/><br/>
                First things first, I want to get to know you, hear about your challenges and what you're hoping to get from the mentorship. 
                Provided we're a good match and my expertise can be of help, we can choose the track that makes the most sense for your specific situation. <br/><br/>
                <b>Two - Data Gathering</b><br/><br/>
                Before our first session, you'll receive a detailed questionnaire where you can share relevant details. 
                This includes more about you, the goals you want to work on, and how you prefer to learn. This helps me prepare the most useful resources and plot our course.<br/><br/>
                <b>Three - Recurring sessions</b><br/><br/>
                With a pre-shared agenda, clearly defined goals, timelines and an AI note-taker, we dive right in - getting from a pain-point to the desired outcome via discussions, anecdotes, constructive arguments, and advice. 
                With each passing session, we monitor our approach towards the desired outcome.<br/><br/>
                <b>Four - Async check-ins</b><br/><br/>
                If you have any burning questions that can't wait for our next mentorship session, you can always message me via the defined asynchronous communications channel.<br/><br/>
                <b>Five - Final session</b><br/><br/>
                During the final session, we'll reflect on our entire journey. I will also share the final recommendations to set you up for success and ensure you stick to the planned actions.
            </p>
            <h3 className="headingStyles">
            <a href="https://app.reclaim.ai/m/branny/intro" target="_blank">Schedule an intro call</a></h3><br/><br/>
            <Footer/>
        </main>
    )
}

export default MentorshipsPage

export const Head = () => <title>Mentorships</title>