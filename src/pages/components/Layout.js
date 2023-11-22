import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

import "normalize.css";
import "../../assect/css/main.css";

const Layout = ({ children }) => {
  //   const { children } = prop;  we can also use this line if we are not family with distrueture;
  //   console.log(children);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
