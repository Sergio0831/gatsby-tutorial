import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title, author },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>Site title is: {title}</h2>
      <h2>Site author is: {author}</h2>

      <h2>Complex data:</h2>
    </div>
  )
}

export default FetchData
