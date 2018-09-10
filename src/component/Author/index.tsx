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
        <div className="about-me">
          <h5>ABOUT ME</h5>
          <img src="/picture/Avatar.jpg" alt="HEADER"/>
          <span className="author-mood">
            EveryThing Will Be Fine.
          </span>
          {/*<div>*/}
            {/*<a href=""> GitHub </a>*/}
            {/*<a href=""> Twitter </a>*/}
          {/*</div>*/}
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