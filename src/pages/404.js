import * as React from "react"
import Layout from "../components/Layout"

const ErrorPage = () => {
  return (
    <Layout title="404 ERROR">
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default ErrorPage