import * as React from "react"
import Header from "../components/Header";
import "../css/index.css";


const listItemStyles = {
  fontWeight: 300,
  fontSize: '2vw',
  maxWidth: 1200,
  marginBottom: 30,
}

//<code className="codeStyles">src/pages/index.js</code>
//<img
//alt="Gatsby G Logo"
//src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
///>

const links = [
  // {
  //   date: "",
  //   text: "Support: Humans",
  //   url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
  //   description: "",
  //   badge: true,
  //   color: "#E95800",
  // },
  {
    date: "",
    text: "Support: Principles",
    url: "/support-principles/",
    description:"",
    color: "#1099A8",
  },
  {
    date: "",
    text: "Support: Role",
    url: "/support-the-role/",
    description: "",
    color: "#BC027F",
  },
  {
    date: "",
    text: "Support",
    url: "/support/",
    description:"",
    color: "#0D96F2",
  },
  {
    date: "",
    text: "Leading people",
    url: "/leading-people/",
    description:"",
    color: "#8EB814",
  },
  {
    date: "",
    text: "What is excellent service?",
    url: "/what-is-excellent-service/",
    description: "",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <Header/>
      <h1 className="headingStyles">
        I'm Branny -
        <span className="headingAccentStyles"> an explorer, thinker and tinkerer.</span>
      </h1>
      <p className="paragraphStyles">
        I design, implement and scale human-friendly systems in the 
        <span className="headingAccentStyles"> customer experience </span>
        space. Appreciating excellence and pursuing &nbsp;
        <a
          href="https://www.britannica.com/topic/eudaimonia"
          target="_blank"
          className="secondlinkStyle"
          rel="noreferrer">
           eudaimonia
        </a>
        &nbsp;, one day at a time.
      </p>
         
      <ul className="listStyles">
        
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              {link.date} &nbsp;&nbsp;
              <a
                className="linkStyle"
                href={`${link.url}?utm_source=homepage&utm_medium=homepage&utm_campaign=weee`}
              >
                {link.text}
              </a>
              
              {link.badge && (
                <span className="badgeStyle" aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p className="descriptionStyle">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Branny's Thoughts</title>
