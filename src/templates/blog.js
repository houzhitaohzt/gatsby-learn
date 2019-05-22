/**
 * @author: houzhitao
 * @since: 2019-05-22 11:50
 * @desc: templates 模板
 */

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../sass/blog.scss";

export default ({ data }) => {
  return (<Layout>
    <div className="ww">
      <div className="content">
        <h2 className="blog-title">{ data.markdownRemark.frontmatter.title }</h2>
        <h4 className="blog-date">{ data.markdownRemark.frontmatter.date }</h4>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  </Layout>)
}

export const query = graphql`
  query($mkd: String!){
    markdownRemark(fields: { mkd: { eq: $mkd } }){
      html
      frontmatter {
        title
        date
      }
    }
  }
`