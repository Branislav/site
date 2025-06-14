import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";

const SupportPage = () => {
    return(
    <main className="pageStyles">
        <Header/>
        <h1 className="headingStyles">
            <span className="headingAccentStyles">Support</span>
        </h1>
        <iframe 
            title="Support"
            width="100%" 
            height="166" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1473120181&color=%232a2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
        <p className="pageParagraphStyles">
        Support is often overlooked as a discipline in the SaaS world. Yet most tools we use in our daily workflows require us to rely on documentation, bots, and humans to use them effectively. The quality of the support available plays a key role in how we perceive the services provided. It can determine whether we continue using a tool or look for alternatives.
        </p>
        <p className="pageParagraphStyles">
        Unfortunately, even reputable tools can have underfunded support operations that struggle to maintain expertise and cope with the volume of requests. This often results in slow and sub-par service. According to Zendesk, it takes an average of 5 hours for a human to respond to a query, and a full day to solve half of all inbound queries. It's no wonder the other half takes even longer.
        </p>
        <p className="pageParagraphStyles">
        Imagine I have a complex ask. Documentation can't help me so I try the bot. The bot does its best to grasp the complexity of my issue offering almost relevant articles. When I do finally find a window towards a fellow human being and summarise my ask, I get a generic response. Expert help arrives days or weeks later, and since my ask was complex, it is unclear when it will be addressed, if at all.
        </p>
        <p className="pageParagraphStyles">
        Now imagine my ask is critical and there's a competitor in the market that can solve it. I would be lazy not to explore switching tools. As I begin to shift to a competitor, the more senior staff gets involved to try and avoid losing a customer. Promises stemming from this, more often than not, are too little and too late. No matter how great the tool or service might be, poor support leads to customer churn. If the support operation is siloed off and treated as a cost center, it only reinforces my decision to decouple.
        </p>
        <p className="pageParagraphStyles">
        Separating the user experience from the experience of interacting with staff opens the doors to friction. This friction deepens existing misalignment in the business behind the service. Different goals and success measures lead to differences in funding and prioritization. It boils down to solving the same problem from two (or more) different perspectives. If either is neglected or underfunded, churn is inevitable.
        </p>
        <p className="pageParagraphStyles">
        Recognising these make up one experience unlocks our growth potential. What a representative of a service knows, does and says solidifies the user's perception of the overall service quality. For better or worse.
        </p>
        <p className="pageParagraphStyles">
        Support is not a cost center. It is a key part of the UX, utilized while the service is being discovered, when it fails or whenever anything unclear causes enough concern to a user, prompting them to reach out. Treat Support otherwise and wonder why users are leaving you. Make it a part of your UX, and watch users become your biggest advocates.    
        </p>
        <Footer/>
    </main>
    )
}

export default SupportPage;

export const Head = () => <title>Support</title>