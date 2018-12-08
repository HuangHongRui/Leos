/**
 *  作者: leo
 *  功能: 顶部导航
 *  日期：2018/8/3
 *  文件：index
 *  參數：
 */
import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { Link } from 'react-router-dom';

class MenuComponent extends React.Component {
  state = {
    tag: 'home'
  };

  static getDerivedStateFromProps(nextProps: StateTypes, prevState: StateTypes): void | {} {
    if (nextProps !== prevState) {
      return {tag: nextProps.tag};
    }
  }

  handleClick = (e: { key: string }) => {
    this.setState({
      tag: e.key
    });
  }

  isSelect(path: string) {
    let result;
    if (this.state.tag === path) {
      result = 'select';
    }
    return result;
  }

  render() {
    return (
      <div className="menu">

        <div className="menu_logo">
          <img src="picture/logo.png" alt="logo"/>
        </div>

        <div className="menu_btn">
          <span>
            <Link to="/" className={this.isSelect('home')}>Home</Link>
          </span>
          <span>
            <Link to="article" className={this.isSelect('article')}>Article</Link>
          </span>
          <span>
            <Link to="signin" className={this.isSelect('signin')}>Sign in</Link>
          </span>
          <span>
            <Link to="signup" className={this.isSelect('signup')}>Sign up</Link>
          </span>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state: StateTypes) => {
  const value = state.router.location.pathname.substr(1)
    ? state.router.location.pathname.substr(1)
    : 'home';
  return {
    tag: value
  };
};

// tslint:disable-next-line
export default connect(mapStateToProps)(MenuComponent as any);

interface StateTypes {
  tag?: string;
  router: {
    location: {
      pathname: string;
    }
  };
}