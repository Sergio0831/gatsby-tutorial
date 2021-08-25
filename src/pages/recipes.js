import * as React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/layout"

const RecipesPage = () => {
  return (
    <Layout pageTitle="Recipes">
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default RecipesPage
