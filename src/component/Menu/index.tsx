import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import { connect } from "react-redux";

const Wrap = styled.div`
  .menu_ui {
    padding: 0 2rem;
    .user{
      //float: right !important;
    }
  }
`;

class MenuComponent extends React.PureComponent {
  static getDerivedStateFromProps(nextProps: StateTypes, prevState: StateTypes): void | {} {
    if (nextProps !== prevState) {
      return {tag: nextProps.tag}
    }
  }

  state = {
    tag: 'home'
  };

  handleClick = (e: { key: string }) => {
    this.setState({
      tag: e.key,
    });
  };

  render() {
    return (
      <Wrap>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.tag]}
          mode="horizontal"
          className="menu_ui"
        >
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home"/>
              主页
            </Link>
          </Menu.Item>

          <Menu.Item key="save">
            <Link to="/save">
              <Icon type="hdd"/>
              归档
            </Link>
          </Menu.Item>

          <Menu.Item key="test">
            <Link to='/test'>
              <Icon type="setting"/>
              实验室
            </Link>
          </Menu.Item>

          <Menu.Item key="gift">
            <Link to='/gift'>
              <Icon type="gift"/>
              投喂
            </Link>
          </Menu.Item>

          <Menu.Item key="team">
            <Link to='/team'>
              <Icon type="team"/>
              后宫
            </Link>
          </Menu.Item>

          <Menu.Item key="message">
            <Link to='/message'>
              <Icon type="message"/>
              留言板
            </Link>
          </Menu.Item>

          <Menu.Item key="about">
            <Link to='/about'>
              <Icon type="notification"/>
              关于
            </Link>
          </Menu.Item>

          <Menu.SubMenu
            key="user"
            className="user"
            title={<span><Icon type="user"/>用户</span>}
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1"><Link to='/login'>登录</Link></Menu.Item>
              <Menu.Item key="setting:2"><Link to='/sign'>注册</Link></Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </Wrap>
    );
  }
}

const mapStateToProps = (state: StateTypes) => {
  const value = state.router.location.pathname.substr(1)
    ? state.router.location.pathname.substr(1)
    : 'home'
  return {
    tag: value
  }
};

export default connect(mapStateToProps)(MenuComponent as any)

interface StateTypes {
  tag?: string;
  router: {
    location: {
      pathname: string;
    }
  }
}