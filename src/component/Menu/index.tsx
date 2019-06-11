/**
 *  作者: leo
 *  功能: 顶部导航
 *  日期：2018/8/3
 *  文件：index
 *  參數：
 */
import React from "react";
import { connect } from "react-redux";
import { Logo } from "src/style/pic";
import classname from "classnames";
import vs from "vconsole";
import { withRouter, Link } from "react-router-dom";
import { action_isLogin, action_Logout } from "../../redux/action";
import Dropdown from './Dropdown';
import "./index.scss";

class MenuComponent extends React.Component <PropsTypes, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      dropdown: false,
      dropdownSwitch: false
    };
  }

  static getDerivedStateFromProps(nextProps: PropsTypes, prevState: PropsTypes): void | {} {
    if (nextProps !== prevState) {
      return {...nextProps};
    }
  }

  componentDidMount(): void | {} {
    this.props.action_isLogin();
  }

  isSelect(path: string) {

    let {isLogin, dropdownSwitch} = this.state;
    let pathname = location.pathname.substr(1) || 'home';
    if (isLogin && /sign/.test(pathname)) {
      this.props.history.push("/home");
    }

    if (isLogin && isLogin.email === '464362353@qq.com') {
      new vs();
    }

    return classname({
      "select": pathname === path,
      "close": !dropdownSwitch,
      "d-vanish": isLogin && /sign/.test(path) ||
        !isLogin && /logout/.test(path) ||
        /write/.test(path) && !(isLogin && isLogin.email === '464362353@qq.com')
    });

  }

  onLogout = () => {
    this.props.action_Logout();
  };

  dropdown = () => {
    this.setState({
      dropdownSwitch: !this.state.dropdownSwitch
    })
  }

  render() {
    return (
      <div className="menu">

        <div className="menu_logo">
          <img src={Logo} alt="logo"/>
        </div>

        <div className="menu_btn">
          <span className={this.isSelect("home")}>
            <Link to='/home'>Home</Link>
          </span>
          <span
            className={this.isSelect("article")}
            onMouseEnter={this.dropdown}
            onMouseLeave={this.dropdown}
          >
            <Link to='/article'>Article</Link>
            {Dropdown([{ name: "F&I", path: "article" }])}
          </span>
          <span className={this.isSelect("signin")}>
            <Link to='/signin'>Sign in</Link>
          </span>
          <span className={this.isSelect("write")}>
            <Link to='/write'>Write</Link>
          </span>
          <span
          className={this.isSelect("logout")}
          onClick={this.onLogout}
          >
            Logout
          </span>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({generalData, router}: PropsTypes) => {
  return {
    isLogin: generalData.isLogin,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    action_isLogin: () => dispatch(action_isLogin()),
    action_Logout: () => dispatch(action_Logout()),
  };
};

// tslint:disable-next-line
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuComponent as any));

interface PropsTypes {
  action_isLogin: Function;
  action_Logout: Function;
  history: any;
  generalData: { isLogin: number; };
  router: {
    location: { pathname: string; }
  };
}
