import * as React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const RecipesPage = () => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default RecipesPage
