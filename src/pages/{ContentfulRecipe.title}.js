import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClock, BsPeople, BsClockHistory } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"

const RecipeTemplate = ({ data }) => {
  const {
    cooktime,
    title,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathTo = getImage(image)
  const { tags, instructions, ingredients, tools } =
    data.contentfulRecipe.content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage image={pathTo} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cooktime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings} min.</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <h4>instructions</h4>
            {instructions.map((item, index) => {
              return (
                <div className="single-instruction" key={index}>
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              )
            })}
            <article>
              <article className="second-column">
                <div>
                  <h4>ingridients</h4>
                  {ingredients.map((item, index) => {
                    return (
                      <p key={index} className="single-ingridient">
                        {item}
                      </p>
                    )
                  })}
                </div>
                <div>
                  <h4>tools</h4>
                  {tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    )
                  })}
                </div>
              </article>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleVariable($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      cookTime
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
