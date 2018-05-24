import React, { Component } from 'react';
import { fetchOnline } from "../../request";
import { Icon } from 'antd';
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh;
  background-color: rgba(0,0,0,.8);
  color: hsla(0,0%,100%,.5);
  p {
    margin: 0;
  }
  .source {
    i { 
      color: #f73f51;
      font-size: 22px;
    }
  }
`;

export default class FootComponent extends Component {
  state = {
    online: 0
  };

  componentDidMount() {
    fetchOnline()
      .then((e) => {
        this.setState({online: e.data.online}as object)
      })
  }

  render() {
    return (
      <Wrap>
        <p>
          <a href="https://www.aliyun.com/"> <Icon type="aliyun"/> </a>
          <a href="https://github.com/HuangHongRui"> <Icon type="github"/> </a>
        </p>
        <p>当前在线人数: {this.state.online}</p>
        <p>
          博客已运行
          <span>365天11小时10分12秒</span>
          <span className="am-my-face">(●'◡'●)ﾉ♥</span>
        </p>
        <p className="source">Made with <i>❤</i> by Rui</p>
      </Wrap>
    )
  }
}
