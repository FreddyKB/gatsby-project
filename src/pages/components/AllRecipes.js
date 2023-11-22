import React from "react";
import Tags from "./Tags";
import Recipes from "./Recipes";
import { graphql, useStaticQuery } from "gatsby";

const AllRecipes = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRecipe(sort: { title: ASC }) {
        nodes {
          id
          title
          prepTime
          cookTime
          content {
            tags
          }
          images {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="tag-rec-container">
      <Tags recipes={recipes} />
      <Recipes recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
