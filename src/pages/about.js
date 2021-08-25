import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, expedita corporis? Ducimus cum commodi distinctio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              omnis.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
            
          />
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage
