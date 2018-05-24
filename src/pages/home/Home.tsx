import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Menu from '../../component/Menu'
import './Home.scss';
import ListComponent from "../../component/List";

const Wrap = styled.div`
  .card {
    border: none;
    .ant-card-body {
      padding: 0 !important;
    }
    .cover_pic {
      min-height: 59vw;
    }
    .avatar {
      position: absolute;
      top: 10%;
      display: grid;
      justify-content: center;
      img {
        width: 20vw;
        min-height: 20vw;
        border-radius: 50%;
        border: solid 1vw rgba(0,0,0,.3);
        justify-self: center;
        :hover {
          border-color: rgba(0,0,0,.5);
          cursor: pointer;
        }
      }
      span.name {
        background: linear-gradient(90deg,#3183f9,#dc3023,#057748,#f35336);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 8vw;
        font-weight: 800;
        font-family: HanWangT0007f2331b96e1b622;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      span.description {
        font-size: 5vw;
        letter-spacing: .5vw;
        background: linear-gradient(90deg,#dc3023,#3183f9,#057748,#f35336);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 800;
      }
    }
  }
`;
export default class Home extends React.PureComponent<any> {
  render() {
    return (
      <Wrap>
        <Card
          className="card"
          cover={
            <div className="ant-card-cover">
              <img className="cover_pic" alt="Cover" src="picture/001.jpeg"/>
              <div className="avatar">
                <img src="picture/000.jpeg"/>
                <span className="name">HongRui.</span>
                <span className="description">Follow Your Heart..</span>
              </div>
            </div>
          }
        >
          <Menu/>
        </Card>
        <ListComponent />
      </Wrap>
    );
  }
}
