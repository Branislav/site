import * as React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from "../components/Row";
import "../css/index.css";




//<code className="codeStyles">src/pages/index.js</code>
//<img
//alt="Gatsby G Logo"
//src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
///>



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
        space. <br/><br/>Appreciating excellence and pursuing &nbsp; 
        <a
          href="https://www.britannica.com/topic/eudaimonia"
          target="_blank"
          className="secondlinkStyle"
          rel="noreferrer">
           eudaimonia
        </a>
      , one day at a time. <br/> <br/>I believe that truly excellent support boils down to automating, perfecting and practicing kindness.
      </p>

      <Row/>  
      <Footer/>
    
  </main>
  )
}

export default IndexPage

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



