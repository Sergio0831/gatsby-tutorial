import * as React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
