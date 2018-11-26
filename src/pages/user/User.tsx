import * as React from 'react';
import styled from 'styled-components';
import WrappedNormalLoginForm from 'src/component/Login';

const Wrap = styled.div`
  height: 100vh;
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
`;

export default class UserComponent extends React.Component {
  state = {};

  render() {
    return (
      <Wrap>
        <WrappedNormalLoginForm/>
      </Wrap>
    );
  }
}