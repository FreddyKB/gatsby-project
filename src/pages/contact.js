import React from "react";
import Layout from "./components/Layout";
import { graphql } from "gatsby";
import Recipes from "./components/Recipes";
import SEO from "./components/SEO";

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact" />

      <main className="section-center">
        <section className="contact-container">
          <article className="contact-text">
            <div className="contact-text-con">
              <h2>Want To Get In Touch?</h2>
              <p>
                Four dollar toast biodiesel plaid salvia actually pickled banjo
                bespoke mlkshk intelligentsia endison bulb synth.
              </p>
              <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
              <p>
                Hashtag swag health goth air plant, raclette listicle
                fingerstache cold-pressed fanny pack bicycle rights cardigan
                poke.
              </p>
            </div>
          </article>
          <article className="contact-form">
            <form action="https://formspree.io/f/mknlabpq" method="POST">
              <div className="input">
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="userName"
                  className="input-text"
                  required
                ></input>
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  name="userEmail"
                  className="input-text"
                  required
                ></input>
              </div>
              <div className="input">
                <textarea
                  placeholder="Message"
                  className="contact-textarea"
                  name="userMessage"
                ></textarea>
              </div>
              <div className="contact-btn-con">
                <button className="contact-btn">Submit</button>
              </div>
            </form>
          </article>
        </section>
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

export default contact;
