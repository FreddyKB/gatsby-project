import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        title
        simplyData
        person {
          age
          name
        }
        conplexData {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  //   const data = useStaticQuery(getData);
  //   console.log(data);
  // const {
  //   site: {
  //     info: { title },
  //   },
  // } = useStaticQuery(getData);
  // return (
  //   <div>
  //     <h1>Title is : {title}</h1>
  //   </div>
  // );
};

export default FetchData;
