import React from "react";
import { graphql } from "gatsby";
import Recipes from "../pages/components/Recipes";
import Layout from "../pages/components/Layout";
import SEO from "../pages/components/SEO";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <div className="section-center">
        <h2>{pageContext.tag}</h2>
        <div>
          <Recipes recipes={recipes} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipes($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        cookTime
        prepTime
        title
      }
    }
  }
`;

export default TagTemplate;
