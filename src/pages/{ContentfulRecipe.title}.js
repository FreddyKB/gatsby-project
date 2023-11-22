import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "./components/Layout";
import slugify from "slugify";
import SEO from "./components/SEO";

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    descriptioin: { descriptioin },
    prepTime,
    serving,
    images,
  } = data.contentfulRecipe;
  const pathToImage = getImage(images);
  const { tools, tags, ingredients, instructions } = content;
  return (
    <Layout>
      <SEO title="Recipes" description={descriptioin} />
      <main className="section-center">
        <div className="single-recipe">
          <div className="top-recipe">
            <div className="left-img">
              <GatsbyImage
                image={pathToImage}
                className="single-recipe-img"
                alt={title}
              />
            </div>
            <div className="right-recipe-con">
              <h2>{title}</h2>
              <p>{descriptioin}</p>
              <div className="time-con">
                <div className="time-container">
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min.</p>
                </div>
                <div className="time-container">
                  <BsClockHistory />
                  <h5>Cock Time</h5>
                  <p>{cookTime} min.</p>
                </div>
                <div className="time-container">
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{serving}</p>
                </div>
              </div>
              <div className="tag-conn">
                <h5>Tags : </h5>
                {tags.map((item, index) => {
                  const slug = slugify(item, { lower: true });
                  return (
                    <Link to={`/${slug}`} key={index}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bottom-recipe">
            <div className="bottom-left">
              <h2>Instructions</h2>
              {instructions.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>STEP {index + 1}</h3>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="bottom-right">
              <h2>Ingredients</h2>
              <div className="ingre-con">
                {ingredients.map((item, index) => {
                  return <p key={index}> {item}</p>;
                })}
              </div>
              <div className="tool">
                <h2>Tools</h2>
                <div className="tool-con">
                  {tools.map((item, index) => {
                    return <h4 key={index}>{item}</h4>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        tools
        tags
        ingredients
        instructions
      }
      descriptioin {
        descriptioin
      }
      prepTime
      serving
      images {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;
