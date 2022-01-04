import React from "react";
import { graphql } from "gatsby";

export default function Teplate({data}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return(
        <div >
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html:html}}></div>
        </div>
    );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
