import React from "react"
import Layout from "../components/layout"
import Gallery from "../examples/Gallery"

const TestingPage = ({ data }) => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default TestingPage
