import React from "react";
import Layout from "./components/Layout";
import { graphql, Link } from "gatsby";
import setUpTags from "../utils/setUp";
import slugify from "slugify";
import SEO from "./components/SEO";

const Tags = ({ data }) => {
  const newTags = setUpTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <SEO title="Tags" />
      <section className="section-center">
        <div className="tag-con">
          <div className="tags-container">
            {newTags.map((item, index) => {
              const [text, value] = item;
              const slug = slugify(text, { lower: true });
              return (
                <Link to={`/${slug}`} key={index} className="tag-class">
                  <h5>{text}</h5>
                  <p>{value} recipe</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
