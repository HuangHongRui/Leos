import React from "react";
import { Avatar } from "src/style/pic";
import "./index.scss";

class Author extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }

  render() {
    const { classNames } = this.props;
    return (
      <div className={`author-info ${classNames}`}>
        <div className="author-about-me">
          <h5>ABOUT ME</h5>
          <img src={Avatar} alt="HEADER"/>
          <span className="author-mood">
            EveryThing Will Be Fine.
          </span>
          <div className="author-icons">
            <a href="https://github.com/HuangHongRui"><i className="author-git"/></a>
            <a href="https://www.zhihu.com/people/HuangHongRui"><i className="author-zhihu"/></a>
            <a href="https://weibo.com/huanghongrui"><i className="author-weibo"/></a>
            <a href="https://twitter.com/HongRui_Huang"><i className="author-twitter"/></a>
          </div>
        </div>
        <div className="author-tags">
          <h5>TAGS</h5>
          <span>腾讯CDC</span>
          <span>前端开发</span>
        </div>
        <div className="author-friends">
          <h5>FRIENDS</h5>
          <span><a href="https://overtrue.me/">Overtrue</a></span>
          <span><a href="https://www.tangshuang.net/">Frustigor</a></span>
          <span><a href="http://cdc.tencent.com/">腾讯CDC</a></span>
        </div>
      </div>
    );
  }
}

export default Author;

interface PropsType {
  classNames: String
}

interface StateType {
}