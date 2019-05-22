import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import "../sass/home.scss";

import Logo from "../images/logo.png";
import A from "../images/a.png";
import B from "../images/b.png";
import C from "../images/c.png";

// 轮播图
import M1 from "../images/1m.png";
import M2 from "../images/2m.png";
import M3 from "../images/3m.png";
import M4 from "../images/4m.png";
import M5 from "../images/5m.png";
import M6 from "../images/6m.png";
import M7 from "../images/7m.png";
import M8 from "../images/8m.png";
import M9 from "../images/9m.png";


class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="侯治涛" keywords={[`gatsby`, `application`, `react`]} />
        <div className="wrap home">
          <div className="content">
            <div className="home-turn">
              <Carousel imgArr={[M1, M2, M3, M4, M5, M6, M7, M8, M9]} />
            </div>
            <h2 className="home-h2">Frontend Engineer</h2>
            <div className="home-info">
              <div className="home-info-img">
                <img src={Logo} alt=""/>
              </div>
              <div className="home-info-say">
                <h4 className="h4">前端工程师</h4>
                <h4 className="h4 mb">浙江海洋大学</h4>
                <p>前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。
                  前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且要学会运用各种工具进行辅助开发以及理论层面的知识，包括代码的可维护性、组件的易用性、分层语义模板和浏览器分级支持等。</p>
                <button>更多 &gt;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="ww home">
          <div className="content">
            <div className="home-skill">
              <span>html</span>
              <span>css</span>
              <span>javascript</span>
              <span>React</span>
              <span>webpack</span>
            </div>
            <div className="home-all">
              <div className="home-all-single">
                <img src={A} alt=""/>
                <div className="home-all-single-title">
                  <strong>DOG</strong><br/>
                  <b>2018</b>
                </div>
              </div>
              <div className="home-all-single">
                <img src={B} alt=""/>
                <div className="home-all-single-title">
                  <strong>LIFE</strong><br/>
                  <b>2018</b>
                </div>
              </div>
              <div className="home-all-single">
                <img src={C} alt=""/>
                <div className="home-all-single-title">
                  <strong>WORK</strong><br/>
                  <b>2018</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index
