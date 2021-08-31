import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/globalStyles.scss"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  siteTitle,
  footer,
} from "../styles/layout.module.scss"

const navbaritems = [
  { text: "Home", target: "/" },
  { text: "Manufacturers", target: "/manufacturers" },
  { text: "Categories", target: "/categories" },
  { text: "About", target: "/about" }
]

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
    <Helmet>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
    </Helmet>
    <main className={container}>
    <nav className="navbar navbar-expand-lg sticky-top justify-content-center">
    <Link to="/" className={[siteTitle + " navbar-brand"]}>{data.site.siteMetadata.title}</Link>
      <div className={["navbar-nav " + navLinks]}>
        {navbaritems.map((item, index) => (
          <Link to={item.target} className={["nav-link " + navLinkItem]} key={index}>
            {item.text}
          </Link>
        ))}
      </div>
    </nav>

      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    <footer className={footer}>
      <Link to="/">MotoComparo</Link>
    </footer>
    </>
  )
}

export default Layout
