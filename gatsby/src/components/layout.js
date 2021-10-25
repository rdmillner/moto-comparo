import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/globalStyles.scss"
import {
  container,
  pageHeader,
  content,
  navLinks,
  navLinkItem,
  siteTitle,
  footer,
} from "../styles/layout.module.scss"

const navbaritems = [
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link to="/" className={[siteTitle + " navbar-brand"]}>{data.site.siteMetadata.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNav" aria-controls="toggleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleNav">
          <div className={["navbar-nav me-auto mb-2 mb-lg-0 " + navLinks]}>
            {navbaritems.map((item, index) => (
              <Link to={item.target} className={["nav-link " + navLinkItem]} key={index}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
    <main className={container}>

      <h1 className={pageHeader}>{pageTitle}</h1>
      <div className={content}>
        {children}
      </div>
    </main>
    <footer className={footer}>
      <Link to="/">Moto Comparo</Link>
    </footer>
    </>
  )
}

export default Layout
