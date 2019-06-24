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


const dropdownBtn = [
  { name: "前端", path: { pathname: "article", search: "type=web" } },
  { name: "理财", path: { pathname: "article", search: "type=money" } }
]

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

  dropdown = (val) => {
    this.setState({
      dropdownSwitch: val
    })
  }

  render() {
    const { dropdownSwitch } = this.state;
    return (
      <div className="menu">

        <div className="menu_logo">
          <img src={Logo} alt="logo"/>
        </div>

        <div className="menu_btn">
          <span className={this.isSelect("home")}>
            <Link to='/home'>主页</Link>
          </span>
          <span
            className={this.isSelect("article")}
            onClick={() => this.dropdown(!dropdownSwitch)}
            onMouseEnter={() => this.dropdown(true)}
            onMouseLeave={() => this.dropdown(false)}
          >
            <Link to='/article'>文章</Link>
            {Dropdown(dropdownBtn, () => this.dropdown(false))}
          </span>
          <span className={this.isSelect("signin")}>
            <Link to='/signin'>登录</Link>
          </span>
          <span className={this.isSelect("write")}>
            <Link to='/write'>创作</Link>
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
