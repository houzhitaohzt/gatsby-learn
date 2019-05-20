/**
 * @author: houzhitao
 * @since: 2019-05-20 11:08
 * @desc: footer 底部
 */

import React from "react"

const Footer = () => (
  <footer className="footer">
    @ { new Date().getFullYear() } 构建于 <a href="https://houzhitao.netlify.com/">monkey</a>
  </footer>
)

export default Footer