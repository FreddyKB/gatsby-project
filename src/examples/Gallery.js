import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              width: 200
              height: 200
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `);
  const nodes = data.allFile.nodes;
  return (
    <div className="gallery-container">
      {nodes.map((image, index) => {
        const { name } = image;
        const pathToImage = getImage(image);

        return (
          <article key={index}>
            <h2>{name}</h2>
            <GatsbyImage
              //   image={image.childImageSharp.gatsbyImageData}
              image={pathToImage}
              alt="image-prop"
              className="gallery-img"
            />
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
