import React from "react";
import Layout from "./components/Layout";
import AllRecipes from "./components/AllRecipes";
import SEO from "./components/SEO";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="section-center">
        <div className="recipes-contain">
          <AllRecipes />
        </div>
      </main>
    </Layout>
  );
};

export default Recipes;
