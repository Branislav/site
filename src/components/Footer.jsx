import * as React from "react";
import "../css/index.css";
import {Helmet} from "react-helmet";

const Footer = () => {
    return (
        <div className="row">
        <Helmet>
        <script>
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1589153');
        `}
         </script>
      </Helmet>     
        
        <div class="ml-embedded footerRowItem" data-form="JHh6HH"></div>  
        <div class="footerRowItem">
        <br/> 
        <p>Meet:</p>
            <a 
            href="https://app.reclaim.ai/m/branny/vent"
            target="_blank"
            className="secondlinkStyle"
            rel="noreferrer">
                Schedule an intro call</a>
        </div>
        <div class="footerRowItem">
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
         </div>  
        </div>
    )
}

export default Footer 