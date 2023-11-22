import React from "react";
import Layout from "./components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "./components/AllRecipes";
import SEO from "./components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is home page" />
      <main className="section-center">
        <header className="header-con">
          <StaticImage
            src="../assect/images/heroegg.jpg"
            class="hero-image"
            placeholder="blurred"
            alt="hero-image"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-text-con">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <p>No Fluff, Just Recipes</p>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}
