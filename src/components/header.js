/**
 * @author: houzhitao
 * @since: 2019-05-17 15:42
 * @desc: 头部信息
 */

import React  from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-content">
      <h1 className="h1">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className="nav">
        <Link to="/">首页</Link>
        <Link to="/life">生活</Link>
        <Link to="/work">工作</Link>
        <Link to="/contact">联系方式</Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header