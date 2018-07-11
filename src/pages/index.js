import React from "react";
import Card from "../components/TOCCard";
import Link from "gatsby-link";

import "./index.css";

const IndexPage = props =>
  console.log(props) || (
    <div className="index">
      <div className="jumbotron gradient">
        <h1>4 Semesters of CS in 5 Hours</h1>
        <h2>Part II - View the <a href="https://frontendmasters.com/courses/computer-science-2/">Videos on Frontend Masters</a></h2>
      </div>

      <Card
        title="Table of Contents"
        content={props.data.allMarkdownRemark.edges}
      />
    </div>
  );

export const pageQuery = graphql`
  query HomepageTOC {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
