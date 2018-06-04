import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchOnline } from '../../redux/action';

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

// tslint:disable-next-line
class FootComponent extends Component <any> {
  state = {
    online: '0'
  };

  static getDerivedStateFromProps(nextProps: StatePropsTypes, prevState: StatePropsTypes): void | {} {
    if (nextProps !== prevState) {
      return { online: nextProps.generalData.online };
    }
  }

  componentDidMount() {
    this.props.fetchOnline();
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
          <span>xxx天xx小时xx分xx秒</span>
          <span className="am-my-face">(●'◡'●)ﾉ♥</span>
        </p>
        <p className="source">Made with <i>❤</i> by Rui</p>
      </Wrap>
    );
  }
}

export default connect(
  // tslint:disable
  ({generalData}: any) => ({generalData}),
  {fetchOnline}
)(FootComponent as any);

interface StatePropsTypes {
  generalData: {
    online: string
  };
}
