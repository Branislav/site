import * as React from "react";
import Header from "../components/Header";
import "../css/index.css";

const WhatIsExcellentServicePage = () => {
    return (
        <main className="pageStyles">
            <Header/>
            <h1 className="headingStyles">
                <span className="headingAccentStyles">What is excellent service?</span>
            </h1>
            <iframe 
                title="What is excellent service?"
                width="100%" 
                height="166" 
                scrolling="no" 
                frameborder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1777376052&color=%232a2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            
            <p className="pageParagraphStyles">
            Imagine you're a product builder. You play a role in solving customer's
             issues in a small team or a huge organisation - where ever you feel more 
             comfortable. Ready? Let's go on a stroll. 
            </p>
            <h2 className="heading2Styles">The stroll</h2>
            <p className="pageParagraphStyles">
            From the first interaction a user has with our product, 
            to implementing their ideas and goals through it, the simplicity 
            and meaningfulness of each user action is what determines success. 
            </p>
            <p className="pageParagraphStyles">
            Building SaaS products means helping users solve some of their problems
             through designed and mainly pre-determined human experiences. Clicking 
             on a button, pointing a mouse over a specific part of the screen, chatting 
             with a bot or jumping on a qualifying call with SDR… the better these 
             experiences are individually and as a whole, the more likely it is for 
             our service to be used.    
            </p>
            <p className="pageParagraphStyles">
            If they are collectively amazing enough, word of mouth kicks in and the rest is history. 
            (see Google Search) The same is true in reverse - the more friction and obstacles are added, 
            the lower the chance our experience is used. If they are collectively horrible enough, 
            word of mouth kicks in and again, history!
            </p>
            <p className="pageParagraphStyles">
            Friction-less experiences are of course imaginary and some obstacles are unavoidable. 
            Finding balance is an art form. With this, the notion of product building, shrouded 
            in technicalities can easily be projected onto that of organising events, parties and 
            other human-centred and chaotic activities. Ensuring our end-user has the best experience 
            is key - the way towards isn't always clear.
            </p>
            
            <p className="pageParagraphStyles">
            To tip the scales in our favor, it is immensely useful to acknowledge, understand and document 
            obstacles that exist in the user experience. It is also important to understand that each 
            unavoidable obstacle requires some kind of action, elsewhere in the user experience. 
            Because once the magical threshold of tolerance is crossed, wherever it may be, recovery 
            means regaining trust. We can all agree that regaining trust is a hell of a lot more expensive 
            than building it in the first place, right?
            </p>
            
            <p className="pageParagraphStyles">
            Good - here, we'll pause our stroll for a moment and recap on what is important to us all:
            </p>
            <ul className="pageParagraphStyles">
                <li>Avoid creating obstacles where and when possible.</li>
                <li>Document and communicate unavoidable obstacles (chores) using simple language.</li>
                <li>Plot them onto experience timelines to achieve a deeper understanding of how obstacles compound.</li>
                <li>Optimise and streamline where possible.</li>
                <li>Compensate for everything remaining</li>
            </ul>
            <p className="pageParagraphStyles">Moving on…</p>

            <p className="pageParagraphStyles">
                Pinpointing the magical threshold is often futile in contrast to 
                overcoming and eliminating individual or groups of obstacles. These are 
                real, finite and most importantly - something that can be identified, studied 
                and controlled. This is where excellent service comes in.
            </p>
            <p className="pageParagraphStyles">
            Whether we are converting a click to a paying customer, selling an annual deal, 
            renewing that huge contract or preparing an anniversary celebration with a loyal 
            client - knowing, controlling and compensating for the obstacles in the user experience 
            organically drives the bottom line.
            </p>
            <p className="pageParagraphStyles">
            Let me be very clear on what excellent service isn't - it is not a cost of running 
            and/or operating our experience. It is an integral part of the user experience and 
            a contributor to the revenue it generates. Excellent service is merely a consequence 
            of the obstacles introduced whilst designing, building and iterating our experience. 
            Treating it otherwise will, through a thousand cuts, damage the experience, its perception 
            and ultimately, our bottom line.
            </p>
            <p className="pageParagraphStyles">
            Excellent service is an intelligence gathering mission wrapped in a helpful, 
            calming and friendly experience that takes action before, during and after a user 
            stumbles on an obstacle.
            </p>
            <p className="pageParagraphStyles">
            Time for another pause and breather. Let's recap what excellent service does:
            </p>
            <ul className="pageParagraphStyles">
                <li>Helps users navigate through known obstacles.</li>
                <li>Responds to and communicates newly discovered obstacles.</li>
                <li>Finds meaningful ways of continuously increasing the quality of 
                    support given as well as the quality of life of the people delivering it.</li>
                <li>Most importantly, discovers, implements and iterates on ways of building 
                    trust through each interaction; with the goal of making users feel as if 
                    they are visiting their childhood home.<br/>Or, in other words, Delivering the ideal.</li>
                
            </ul>
            <h2 className="heading2Styles">The ideal</h2>
            
            <p className="pageParagraphStyles">
            When we are at our childhood home, we are heard and our needs are met. 
            There is little to no friction. Chores are done out of respect and love for 
            our caregivers. When a change occurs it is thoughtful and careful, often in our 
            best interest. When it isn’t in our best interest, we are loved, supported and cared 
            for every step of the way through those difficult times.
            </p>
            
            <h2 className="heading2Styles">Conclusion</h2>

            <p className="pageParagraphStyles">
            The fundamental mission of excellent service and really product building in general, 
            is to continuously strive towards delivering a version of this ideal relevant to the 
            problem we're solving.
            </p>
            <p className="pageParagraphStyles">
            No one should go around compassionately hugging customers, unless they are in the business 
            of hugging - in which case they should be delicate and warm. Forming a ticket reply that lands 
            like a hug, on the other hand is something many organisations can greatly benefit from.
            </p>
        </main>
    )
}

export default WhatIsExcellentServicePage;

export const Head = () => <title>What is excellent service</title>