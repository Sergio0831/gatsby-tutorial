import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const ContactPage = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              similique tempore impedit tenetur iusto ad, cum esse asperiores
              nemo earum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              praesentium alias consequatur at corporis ullam a dolor amet
              repellat doloremque.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mnqllayj"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Amazing pancakes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default ContactPage
