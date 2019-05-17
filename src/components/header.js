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
    <div>头部信息</div>
    <p>{siteTitle}</p>
    <Link to="/">第二页</Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header