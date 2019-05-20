/**
 * @author: houzhitao
 * @since: 2019-05-17 16:10
 */

import React  from "react"
import PropTypes from "prop-types"
import "../sass/layout.scss"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={({site: { siteMetadata}}) => (
      <div className="container">
        <Header siteTitle={siteMetadata.title} />
        { children }
        <Footer />
      </div>
    )}

  />

)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout