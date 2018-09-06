import React from 'react';
import './Home.scss';
import BirdSvg from '../../component/Svg/Bird_Svg';

// import Menu from '../../component/Menu';
// import Foot from '../../component/Foot';
// import styled from 'styled-components';
// import ListComponent from '../../component/List';
// import { Card } from 'antd';
// import NameSvg from '../../component/Svg/Name_Svg';

// tslint:disable-next-line
export default class Home extends React.PureComponent<any> {

  render() {
    return (
      <div className="home content">
        <BirdSvg/>
        {/*<Card*/}
        {/*className="card"*/}
        {/*cover={*/}
        {/*<div className="ant-card-cover">*/}
        {/*<img className="cover_pic" alt="Cover" src="picture/001.jpeg"/>*/}
        {/*<div className="avatar">*/}
        {/*<img src="picture/000.jpeg"/>*/}
        {/*<NameSvg/>*/}
        {/*<span className="description">Follow Your Heart..</span>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*}*/}
        {/*>*/}
        {/*</Card>*/}
        {/*<Menu/>*/}
        {/*<ListComponent/>*/}
        {/*<Foot/>*/}
      </div>
    );
  }
}
