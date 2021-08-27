import * as React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
