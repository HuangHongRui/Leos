import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    >li{
      background: #fff;
      line-height: 5rem;
      height: 5rem;
      padding: 0 1rem;
      .serial {
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
        display: inline-block;
        background: rgb(0, 123, 236);
        color: #fff;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
      }
      .content {
        margin: 0 1rem;
        font-size: 18px;
      }
      .hand {
        float: right;
        font-size: 1.5rem;
      }
    }
    .moveTag {
      transition: border .5s;
      position: absolute;
      background:#fff;
      box-shadow: #cccccc;
      width: 100%;
      z-index: 1000;
      border: solid .5px #fff0f6;
      pointer-events:none;
      -webkit-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
      -moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
      box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
    }
    .placeholder {
      visibility: hidden;
    }
  }
`;

class DragComponent extends React.Component {
  componentDidMount() {
    let tag = document.querySelectorAll('li');
    let that = this;
    if (tag) {
      // tslint:disable-next-line
      [].forEach.call(tag, function (item: any) {
        // tslint:disable-next-line
        console.log('☞☞☞ 9527 Drag 48', item);
        item.addEventListener('touchstart', that.handleStart, false);
        item.addEventListener('touchmove', that.handleMove, false);
        item.addEventListener('touchend', that.handleEnd, false);
      });
    }
  }

  /**
   *  首次触屏
   */
  handleStart(e: EvenTypes) {
    e.preventDefault();
    if (e.target.tagName !== 'LI') {
      return;
    }
    // 创建一个占位符
    let placeholder = document.createElement('li');
    placeholder.classList.add('placeholder');
    e.target.classList.add('moveTag');
    e.target.setAttribute(
      'style',
      `top: ${e.touches[0].pageY - e.target.offsetHeight / 2}px;`
    );
    e.target.parentElement.insertBefore(placeholder, e.target);
  }

  /**
   *  拖拽触发（按住拖拽）
   */
  handleMove(e: EvenTypes) {
    if (e.target.tagName !== 'LI') {
      return;
    }
    let toggleNode = document.createElement('li');
    toggleNode.classList.add('placeholder');
    let placeholder = document.querySelector('.placeholder');
    let tagNode = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
    e.target.classList.add('moveTag');
    e.target.setAttribute(
      'style',
      `top: ${e.touches[0].pageY - e.target.offsetHeight / 2}px;`
    );
    if (tagNode && tagNode.tagName === 'LI') {
      e.target.parentElement.insertBefore(toggleNode, tagNode);
      e.target.parentElement.replaceChild(tagNode, placeholder);
    }
  }

  /**
   *  松开
   */
  handleEnd(e: EvenTypes) {
    if (e.target.tagName !== 'LI') {
      return;
    }
    let placeholder = document.querySelector('.placeholder');
    if (placeholder) {
      e.target.classList.remove('moveTag');
      e.target.parentElement.replaceChild(e.target, placeholder);
    }
  }

  render() {

    let renderDom = [1, 2, 3, 4, 5, 6];
    return (
      <Wrap>
        <ul>
          {
            renderDom.map((e, i) => {
              return (
                <li key={i} draggable={true}>
                  <span className="serial">{e}</span>
                  <span className="content">内容Content内容</span>
                  <span className="hand">☰</span>
                </li>
              );
            })
          }
        </ul>
      </Wrap>
    );
  }
}

export default DragComponent;

interface EvenTypes {
  preventDefault: Function;
  touches: [{
    pageX: number,
    pageY: number,
  }];
  target: {
    tagName: string;
    parentElement: {
      insertBefore: Function;
      replaceChild: Function;
    };
    offsetHeight: number;
    offsetWidth: number;
    setAttribute: Function;
    classList: {
      add: Function;
      remove: Function;
    }
  };
}