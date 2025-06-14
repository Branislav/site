import * as React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
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

const ThoughtsPage = () => {
  return (
    <main className="pageStyles">
      <Header/>
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
      <Footer/>  
    </main>
  )
}

export default ThoughtsPage

let description = 'This is the place Branislav (Branny) records his thoughts on customer service, support and other relevant or irrelevant topics.'

const SEO = ({ children }) => (
  <>
    <title>Branny's Thoughts</title>
    <meta name="description" content={description}></meta>
    {children}
  </>
)

export const Head = () => (
  <SEO>
  </SEO>
)
