import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h1>Constrained</h1>
        <StaticImage
          src="../assect/images/beef.jpg"
          alt="food"
          placeholder="tracedSVG"
          width={300}
          height={300}
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h1>Fixed</h1>
        <StaticImage
          src="../assect/images/beef.jpg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={500}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h1>Constrained</h1>
        <StaticImage
          src="../assect/images/beef.jpg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media screen and (min-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
    .example-img {
      height: 200px;
    }
  }
`;

export default Images;
