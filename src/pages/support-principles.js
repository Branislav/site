import * as React from "react";
import Header from "../components/Header";
import "../css/index.css";

const SupportPrinciplesPage = () => {
    return(
    <main className="pageStyles">
        <Header/>
        <h1 className="headingStyles">
            <span className="headingAccentStyles">Support: The Principles</span>
        </h1>
        <iframe 
            title="Support: The Principles"
            width="100%" 
            height="166" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1519730107&color=%232a2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
        <p className="pageParagraphStyles">
        The principles of excellent support can be boiled down to automating, perfecting and being a decent human being. 99% of negatively rated interactions with support stem from a lack of understanding or investment in one or more of these principles. Let's venture into exploring each one:
        </p>
        <p className="pageParagraphStyles"> 
        The first principle of Support.<br/>
        What can be automated should carefully be automated, minding the ongoing maintenance needs and automation intertwining. What is feasible should be built into the platform via interactions and feedback flows set up with the platform builders. What can't be built into the platform should be organized into automation sets centred around 3rd party tools and treated as separate products. Continuous iteration must be applied similarly to how the platform is being built - these automation sets aren't adjacent to our user's experience - they are an integral part of it, even if the tool is internal!
        </p>
        <p className="pageParagraphStyles">
        Support data, or user feedback and challenges users face - are a treasure trove for product teams deciding the direction of the platform's development. Funneling this intelligence towards builders in a seamless yet highly consumable way is critical to the overall success of the platform. The higher the consumption rate of this data flow, the faster it becomes clear what can and can't be built into the platform. Anything that can't be built into our platform and is a real and frequent user need is a valid target for automation within Support.
        </p>
        <p className="pageParagraphStyles">
        In the era of artificial intelligence, deterministic chatbots and advanced ticketing solutions, Support systems have evolved into highly technical environments chronically lacking engineering and product management resources. When sophisticated tooling is implemented partially, poorly and with little concern for long-term maintenance, damage to the user experience is guaranteed. Investing in these systems early and ensuring they evolve alongside the platform is one of the pillars of preserving service quality whilst scaling.
        </p>
        <p className="pageParagraphStyles">
        Ultimately, a well-engineered deflection and self-serve system allow humans within Support to grow, specialise and develop the critical experience needed to make the second principle of Support possible.
        </p>
        <p className="pageParagraphStyles"> 
        The second principle of Support:<br/>
        What can't be automated should be perfected, to a point where interactions with the user are instinctive and flow naturally, regardless of the channel in use. When our users are forced to interact with a human, their experience matters more than the UX of the platform. This experience must be treated as a product - otherwise scaling it while preserving quality is painstakingly linear and costly.
        </p>
        <p className="pageParagraphStyles">
        Edge cases and accidents are inevitable. Moments in which a user has a need so specific, no amount of automation or artificial intelligence is capable of assisting them and so humans must intervene. When this happens, our agent, equipped with the expertise and eloquence befitting our industry, promptly follows guidelines that are in no way designed to hinder their humanity or emotional intelligence. These two fundamental qualities distinguish between an excellent and flawed interaction. If our agent's basic need is to blindly hit a number or two, they will naturally gravitate towards rushing; and away from genuinely expressing themselves while helping their end user.
        </p>
        <p className="pageParagraphStyles">
        Guidelines should be fluent and prone to frequent iterations as the needs and challenges of users and agents shift. We have no business telling our agents exactly what to say in every case - the ongoing maintenance cost of this approach is stupidly large and its quality is highly disputable. We should give the do's, and don'ts, arm them with access to the data they need to understand and ideally solve the query. When unable to, agents must have a clear support system they rely on to navigate or hand off the user's journey towards a solution.
        </p>
        <p className="pageParagraphStyles">
        Changes that occur in such a fluent system must echo seamlessly throughout the staff via frequent and light enablement. The goal isn't to cram all this knowledge into their heads, but to alert them to the existence of new information, what this information replaces, as well as where to find it when needed. Dynamically exposing critical information when the agent needs it exponentially increases effectiveness.
        </p>
        <p className="pageParagraphStyles">
        Numbers should be treated as an indicator of not performance, but the environment in which agents deliver support. How many queries an agent resolves, how fast a first response is sent or how quickly a solution is found all depend on the process quality and staffing dynamics present in the support system. You are better off chasing windmills than attributing poor performance to individuals or staff alone. Any deviation in numbers reflects changes previously made, fuelling a continuous feedback loop that shapes guidelines. When an agent is found in the wrong, they are met with coaching and guidance while their experience is used to further shape guidelines and how to adapt to changes.
        </p>
        <p className="pageParagraphStyles">
        Performance should be measured through the complexity of the work required to solve the issue and provide a delightful experience. Quality is shaped by the reactions of users, giving negative ones attention beyond only the scope of the individual who received it. It often contains crucial intelligence - how the user felt after an interaction. Allowing negative emotions to go unchecked or worse, pile up, is a recipe for churn. Acting on these swiftly and gently boosts user confidence.
        </p>
        <p className="pageParagraphStyles">
        An excellent support system is based on trust an ample amount of…
        </p>
        <p className="pageParagraphStyles">
        The third and most important principle of Support:<br/>
        Kindness.
        </p>
        <p className="pageParagraphStyles">
        The moment in which human support is requested is when a need isn't being met. The effort needed to get in touch, no matter how minuscule, is still an effort consciously taken by a user seeking help. Recognising this and giving assistance quickly and with kindness greatly increases the chances for a positive outcome. To earn the kindness of the user in need, our agent must embody it and be met with kindness on every step towards the solution. Failure to earn it sets the agent on a slippery slope to attempt to regain it, wasting resources in the process. Chronic failure to earn user kindness indicates deep and potentially systemic issues which must be addressed as they have already damaged the perception of the platform and led to churn.
        </p>
        <p className="pageParagraphStyles">
        Designing and nourishing an environment in which kindness can flourish takes a very different leadership approach in and out of support. Led by kindness and a genuine desire to grow both user satisfaction and individuals providing support, these leaders influence teams to do their best work by ensuring paths agents take daily towards solutions are paved with kindness and free of friction.  
        </p>
    </main>
    )
}

export default SupportPrinciplesPage;

export const Head = () => <title>Support: The Principles</title>