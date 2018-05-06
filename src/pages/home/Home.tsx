import React from 'react';
import { Layout } from 'antd';
import { Link } from "react-router-dom";
import './Home.scss';

export default class Home extends React.PureComponent {
  state = {
    messages: [],
    count : 0
  };

  render() {
    const {Header, Footer, Sider, Content} = Layout;
    return (
      <Layout>
        <Header>Header</Header>
        <Layout className="content">
          <Content>
            <button> <Link to='/test'>Route Jump To Test/Rxjs </Link> </button>
          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}