import React from "react";
import Layout from "./components/Layout";
import SEO from "./components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <main className="error-container">
        <section>
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </section>
      </main>
    </Layout>
  );
};

export default Error;
