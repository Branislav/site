import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";
import image from '../images/literate-and-illiterate-world-population.webp'

const LeadingPeoplePage = () => {
    return (
    <main className="pageStyles">
        <Header/>
        <h1 className="headingStyles">
            <span className="headingAccentStyles">Leading people</span>
        </h1>
        <iframe 
            title="Leading people"
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1787491705&color=%232a2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
        <p className="pageParagraphStyles">
        Roughly a hundred years ago, an industrial engineer named Frederick W. Taylor established and advocated for what is known as <a href="https://www.britannica.com/science/Taylorism" target="_blank" rel="noreferrer">Taylorism. </a> 
         He said that to mass-produce efficiently, the operation needs some people (the few) who think and other people (the many) who do. 
        While Mr Taylor may no longer be actively quoted, his thoughts and ideas are still deeply rooted in society.
        </p>
        <img className="pageParagraphStyles" src={image} alt="Graph showing how over the past 100 years, the ratio of literate and illiterate people has reversed in favour of literate people"></img>
        <p className="pageParagraphStyles">
        If we look at world literacy around and before the 1900s, the logic behind Taylorism is somewhat sound. The few literate people led the illiterate masses to optimization and effectiveness, often with immense success. That success, in turn, led to massive improvements in literacy rates and education overall and yet Taylorism is still around. Weird, isn't it?
        </p>
        <p className="pageParagraphStyles">
        Today, the majority of people on Earth are literate. They still have hopes, heroes and dreams, but also personal development goals and ideas on how to improve the world around them. Most are capable of critical thinking, problem-solving and juggling priorities (judging by all the job postings out there). All want to live better than they have yesterday. This has lately been reinforced by the 'Great Resignation', a raise in popularity of /r/AntiWork as well as the push-back to return to the office. Confusing grown and capable individuals with numbers (or worse, toddlers) is an error only beginning to charge it's toll.
        </p>
        <p className="pageParagraphStyles">
        Yet, decision making is heavily gated and available to the select few that have made it far enough on the corporate ladder. Being one, I have nothing but respect for these leaders and yet, we are human and fallible like everyone else. Simultaneously, the intelligent masses below are left to the mercy of ineffective and tedious feedback cycles, provided these work or even exist. To makes matters worse - it is tougher to be heard and drive change the further down the ladder you are.
        </p>
        <p className="pageParagraphStyles">
        Bridging this gap without trust is impossible. Building trust and habits around nurturing it are easily the largest challenges leaders face. To overcome them, empathy is key.
        </p>
        <p className="pageParagraphStyles">A leader dedicated to building trust is humble enough to:</p>
        <ul className="pageParagraphStyles">
                <li>empathize with and experience each level below them;</li>
                <li>weigh and assign appropriate autonomy to each level;</li>
                <li>see issues and guide teams to solutions;</li>
                <li>through guidance, grow those reporting to you towards their goals;</li>
                <li>work on getting better at each point above;</li>
        </ul>
        <p className="pageParagraphStyles">
        Apart from practicing these values ourselves, we should ensure leadership teams under our guidance do the same. This allows us to build and continuously nurture trust within our team, through which every layer of our organization is heard, valued and cared for. Trust acquired through empathy makes leadership practical.
        </p>
        <p className="pageParagraphStyles">
        There is only so much a single leader can do, especially compared to the output a village of people is capable of producing. Leaders have families and need time off like everyone else. Then there is of course the dreaded bus factor. What happens if you are hit by a bus and you don't have trust built within your team?
        </p>
        <p className="pageParagraphStyles">
        Each individual that reports to us holds a piece of the puzzle we need to succeed as a team and therefore a leader. While these individuals are working toward shaping their puzzle pieces, they will have ideas, conflicts and doubts about their AND other pieces that affect them or they are curious about. This stream of information, when monitored closely, offers perspective-shifting insights into how work is perceived and should evolve. It also gives a clear direction to developing these individuals.
        </p>
        <p className="pageParagraphStyles">
        Creating dedicated streams of feedback that are regularly acted upon for each decision tree present within the workload gives a clear signal that bottom-up change is welcome.
        </p>
        <p className="pageParagraphStyles">
        Ignoring or suppressing this information sends a signal that Taylorism is alive and well.
        </p>
        <Footer/>
    </main>
    )
}

export default LeadingPeoplePage;

export const Head = () => <title>Leading people</title>


