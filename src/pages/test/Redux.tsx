import React from 'react';
import { Button } from 'antd';
import { connect } from "react-redux";
import * as Action from './action';
import Menu from '../../component/Menu';
import styled from 'styled-components';

const Wrap = styled.div`

`;

/**
 *  Test Page.
 */
class Rxjs extends React.PureComponent<any> {
  state = {};

  render() {
    return (
      <Wrap>
        <Menu />
        <Button onClick={() => console.log('☞☞☞ 9527 Redux 27', this.props)}>123</Button>
        <br/>
        <Button onClick={this.props.add}>+</Button>
        <span onClick={() => console.log('☞☞☞ 9527 Redux 34', this.props)}>{this.props.value}</span>
        <Button onClick={this.props.delete}>-</Button>
      </Wrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rxjs)
