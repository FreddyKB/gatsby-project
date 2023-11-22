import React from "react";
import setUpTags from "../../utils/setUp";
import { Link } from "gatsby";
import slugify from "slugify";

const Tags = ({ recipes }) => {
  const newTag = setUpTags(recipes);

  return (
    <div className="recipe-list-con">
      <h3>Recipe</h3>
      <div className="tags-list">
        {newTag.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });
          return (
            <Link to={`/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
