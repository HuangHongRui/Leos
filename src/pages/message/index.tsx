import React from 'react';
import styled from 'styled-components';
import NameComponent from '../../component/Svg/Name_Svg';

const Wrap = styled.div`
  height: 100vh;
`;

export default class UserComponent extends React.Component {
  state = {};

  render() {
    return (
      <Wrap>
        <NameComponent/>
      </Wrap>
    );
  }
}
