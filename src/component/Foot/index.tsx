import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnline } from '../../redux/action';
import './index.scss';

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
      <div className="foot">
        {/*<p className="foot-hot-link">*/}
          {/*<a href="https://www.aliyun.com/"> ALiYun </a>*/}
          {/*<a href="https://github.com/HuangHongRui"> GitHub </a>*/}
        {/*</p>*/}
        <p className="foot-inline-num">当前在线人数: {this.state.online}</p>
        <p className="foot-go-data">
          博客已运行
          <span>1329天18小时29分06秒</span>
          <span className="am-my-face">(●'◡'●)ﾉ♥</span>
        </p>
        <p className="foot-source">Made with <i>❤</i> by Leo</p>
      </div>
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
