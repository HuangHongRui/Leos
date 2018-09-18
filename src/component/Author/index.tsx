import React from 'react';
import './index.scss';

class Author extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="author-info">
        <div className="author-about-me">
          <h5>ABOUT ME</h5>
          <img src="/picture/Avatar.jpg" alt="HEADER"/>
          <span className="author-mood">
            EveryThing Will Be Fine.
          </span>
          <div className="author-icons">
            <i className="author-git"/>
            <i className="author-zhihu"/>
            <i className="author-weibo"/>
            <i className="author-twitter"/>
          </div>
        </div>
        <div className="author-friends">
          <h5>FRIENDS</h5>
          <span>Leo</span>
          <span>Jie</span>
          <span>夏夜</span>
        </div>
      </div>
    );
  }
}

export default Author;

interface PropsType {
}

interface StateType {
}