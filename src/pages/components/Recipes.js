import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const Recipe = ({ recipes = [] }) => {
  return (
    <article className="recipes-container">
      {recipes.map((recipe) => {
        const { id, images, title, cookTime, prepTime } = recipe;

        const pathToImage = getImage(images);

        const slug = slugify(title, { lower: true }); // it compiler % to -

        return (
          <Link key={id} to={`/${slug}`} className="recipe-link">
            <div>
              <GatsbyImage
                image={pathToImage}
                className="recipe-image"
                alt={title}
              />
            </div>
            <div className="recep-info">
              <h3>{title}</h3>
              <div className="recipe-child">
                <p>
                  Prep : {prepTime}min | Cook : {cookTime}min
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default Recipe;
