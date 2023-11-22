import React from "react";
import Layout from "./components/Layout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Recipes from "./components/Recipes";
import SEO from "./components/SEO";

const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <SEO title="About" />
      <main className="section-center">
        <article className="about-container">
          <div className="about-text">
            <h2>I'm baby doloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probablu haven't heard of them banh mi biodiessel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch,aesthetic salvia
              retro.
            </p>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="about-img">
            <StaticImage
              src="../assect/images/salt.jpg"
              alt="salt"
              className="about-image"
              placeholder="blurred"
            />
          </div>
        </article>
        <section className="about-recipe">
          <h5>Look At This Awsomesouce!</h5>
          <Recipes recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { features: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          id
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default About;
