/**
 * @author: houzhitao
 * @since: 2019-05-21 20:33
 * @desc: 轮播图组件
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import "../sass/carousel.scss";

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


class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = this.initialState(props);
    this.timer = null;
    this.timer1 = null;
    this.timer2 = null;
    this.timer3 = null;
    this.timer4 = null;
  }

  initialState = (props) => {
    return {
      left: 0, //图片左边偏移量
      zIndex: 2, // zIndex 量
      opacity: 1, //透明度
      rotate: 0, // 旋转
      index: 0, // 哪一个
      hiddenIndex: props.imgArr.length - 1, //前面隐藏的那一个
      hiddenZIndex: 1, // 前面隐藏的那个的zIndex
      hiddenOpacity: 0 // 前面隐藏的那个的opacity
    }
  }

  // 小圆圈转起来
  circleTurn = () => {
    let a = 0;
    this.timer4 = setInterval(() => {
      a += 3.6;
      if (a >= 360){
        clearInterval(this.timer4)
      }
      this.setState({ rotate: a})
    }, 50);
  };

  // 设置图片向左移动
  turnLeftPicture = () => {
    let left = 30;
    this.timer3 = setInterval(() => {
      left --;
      if (left === 0){
        clearInterval(this.timer3);
      }
      this.setState({ left })
    }, 20);
  }

  // 显示
  showValue = () => {
    let showValue = 0;
    this.timer1 = setInterval(() => {
      showValue += 0.01;
      this.setState({opacity: showValue, zIndex: 2})
      if (showValue >= 1){
        clearInterval(this.timer1);
      }
    })
  }

  // 隐藏
  hiddenValue = () => {
    let hiddenValue = 1;
    this.timer2 = setInterval(() => {
      hiddenValue -= 0.01;
      this.setState({hiddenOpacity: hiddenValue, hiddenZIndex: 1})
      if (hiddenValue <= 0){
        clearInterval(this.timer2)
        this.setState({hiddenOpacity: 0, hiddenZIndex: 0})
      }
    })
  }

  // 动画开始
  start = index => {
    const { imgArr } = this.props;
    this.timer && clearInterval(this.timer);
    this.timer1 && clearInterval(this.timer1);
    this.timer2 && clearInterval(this.timer2);
    this.timer3 && clearInterval(this.timer3);
    this.timer4 && clearInterval(this.timer4);
    this.showValue();
    this.hiddenValue();
    this.circleTurn();
    this.turnLeftPicture();
    this.timer = setInterval(() => {
      index ++;
      if (index > imgArr.length - 1) index = 0;
      this.showValue();
      let hiddenIndex = index - 1;
      if (hiddenIndex < 0) hiddenIndex = imgArr.length - 1;
      this.hiddenValue();
      this.setState({ index, hiddenIndex },() => {
        this.circleTurn();
        this.turnLeftPicture();
      })
    }, 5300)
  };

  // 点击下面圆圈 左右
  onPageClick = index => {
    const { imgArr } = this.props;
    if (index > imgArr.length - 1) index = 0;
    if (index < 0) index = imgArr.length - 1;
    let hiddenIndex = index - 1;
    if (hiddenIndex < 0) hiddenIndex = imgArr.length - 1;
    this.setState(prev => Object.assign({}, prev, { index, hiddenIndex}), () => this.start(index))
  }

  componentDidMount() {
    let { index } = this.state;
    this.start(index);
  }

  componentWillUnmount() {
    this.setState(this.initialState(this.props));
    this.timer && clearInterval(this.timer);
    this.timer1 && clearInterval(this.timer1);
    this.timer2 && clearInterval(this.timer2);
    this.timer3 && clearInterval(this.timer3);
    this.timer4 && clearInterval(this.timer4);
    this.timer = this.timer1 = this.timer2 = this.timer3 = this.timer4 = null;
  }


  render() {
    const { imgArr, width, height } = this.props;
    const { index, left, zIndex, opacity, rotate, hiddenIndex, hiddenZIndex, hiddenOpacity } = this.state;
    return (<div className="carousel-img" style={{ width: `${parseFloat(width)}px`, height: `${parseFloat(height)}px` }}>
                <div className="carousel-img-con">
                  { imgArr.map((da, di) =>
                    (<img key={di} src={da} alt=""
                          style={Object.assign({},
                            { width: `${parseFloat(width)}px`, height: `${parseFloat(height)}px` },
                            di === index ? { zIndex, left, opacity } : (di === hiddenIndex ? {left, zIndex:hiddenZIndex, opacity: hiddenOpacity} : { zIndex: 0, opacity: 0 }) )}
                    />))
                  }
                </div>
                <ul className="carousel-img-bt">
                  <li className="last" onClick={this.onPageClick.bind(this, index - 1)}>&lt;</li>
                  <li className="next" onClick={this.onPageClick.bind(this, index + 1)}>&gt;</li>
                </ul>
                <div className="carousel-img-nav" style={{ width: imgArr.length * 26 + 10 + "px", marginLeft: - (imgArr.length * 13 + 5) + "px" }}>
                  { imgArr.map((ea, ei) => (<p
                    key={ei}
                    className={ei === index ? "show" : ""}
                    style={ei === index ? { transform: `rotate(${rotate}deg)` } : {}}
                    onClick={this.onPageClick.bind(this, ei)}
                  ><span /></p>)) }
                </div>
              </div>)
  }
}

Carousel.propTypes = {
  imgArr: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Carousel.defaultProps = {
  imgArr: [M1, M2, M3, M4, M5, M6, M7, M8, M9],
  width: "715px",
  height: "530px"
}

export default Carousel