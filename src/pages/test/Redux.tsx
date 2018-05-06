import React from 'react';
import { Layout, Button } from 'antd';

/**
 *  Test Page.
 */
export default class Rxjs extends React.PureComponent {
  state = {};


  oneMethod = (store: any) => {
    store.dispatch({type: 'INCREMENT'})
  };

  render() {
    // store.subscribe(() =>
    //   console.log(store.getState())
    // );
    const {Header, Footer, Sider, Content} = Layout;

    return (
      <Layout>
        <Header>Header</Header>
        <Layout className="content">
          <Content>

            <Button onClick={() => console.log('☞☞☞ 9527 Redux 27', this.props)}>123</Button>
            {/*<Button onClick={() => this.oneMethod(store)}>Redux</Button>*/}
            <br/>
            {/*<Button onClick={() => console.log(store.getState())}>state</Button>*/}

          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
