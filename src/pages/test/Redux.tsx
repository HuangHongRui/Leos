import React from 'react';
import { Layout, Button } from 'antd';
import { connect } from "react-redux";
import * as Action from './action';

/**
 *  Test Page.
 */
class Rxjs extends React.PureComponent<any> {
  state = {};

  oneMethod = (store: any) => {
    store.dispatch({type: 'INCREMENT'})
  };

  render() {
    // store.subscribe(() =>
    //   console.log(store.getState())
    // );
    const {Header, Footer, Sider, Content} = Layout;
    console.log('☞☞☞ 9527 Redux 21', this.props);
    console.log('☞☞☞ 9527 Redux 22', );

    return (
      <Layout>
        <Header>Header</Header>
        <Layout className="content">
          <Content>

            <Button onClick={() => console.log('☞☞☞ 9527 Redux 27', this.props)}>123</Button>
            {/*<Button onClick={() => this.oneMethod(store)}>Redux</Button>*/}
            <br/>
            <Button onClick={this.props.add}>+</Button>
            <span onClick={() => console.log('☞☞☞ 9527 Redux 34', this.props)}>{this.props.value}</span>
            <Button onClick={this.props.delete}>-</Button>

          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

function mapStateToProps(state: any, own: any) {
  console.log('☞☞☞ 9527 Redux 47', state);
  return {
    value: state.test.hehe
  }
}

function mapDispatchToProps(dispatch: any, own: any) {
  return {
    add: () => {
      dispatch(Action.addTodo())
    },
    delete: () => {
      dispatch(Action.deleteTodo())
    }
  }
}

// let cet = connect(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Rxjs)
