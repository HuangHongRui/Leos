import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  ul.bMoveTag > li {
    .serial {
      background: rgba(0, 123, 236, 0.5);
    }
    .hand {
      opacity: 0;
    }
  }
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
        pointer-events:none;
      }
      .content {
        margin: 0 1rem;
        font-size: 18px;
        pointer-events:none;
      }
      .hand {
        float: right;
        font-size: 1.5rem;
        pointer-events:none;
      }
    }
    .moveTag {
      position: absolute;
      background:#fff;
      width: 100%;
      z-index: 1000;
      border: solid .5px #fff0f6;
      pointer-events:none;
      -webkit-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
      -moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
      box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);
      font-size: 1.5em;
      transition: none;
      .serial {
        background: rgb(0, 123, 236) !important;
      }
      .hand {
        opacity: 1 !important;
      }
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
      [].forEach.call(tag, function (item: { addEventListener: Function }) {
        item.addEventListener('touchstart', that.handleStart, true);
        item.addEventListener('touchmove', that.handleMove, true);
        item.addEventListener('touchend', that.handleEnd, true);
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
    let placeholder = e.target.cloneNode(true);
    placeholder.classList.add('placeholder');
    e.target.classList.add('moveTag');
    e.target.parentElement.classList.add('bMoveTag');
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
    // tslint:disable-next-line
    let tagNode: any = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
    let tagNum = tagNode.firstElementChild.innerText;
    let targetNum = e.target.firstElementChild.innerText;
    e.target.setAttribute(
      'style',
      `top: ${e.touches[0].pageY - e.target.offsetHeight / 2}px;`
    );
    if (tagNode && tagNode.tagName === 'LI') {
      e.target.firstElementChild.innerText = tagNum;
      tagNode.firstElementChild.innerText = targetNum;
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
      e.target.parentElement.classList.remove('bMoveTag');
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
                  <span className="content">内容Content内容{e}</span>
                  <span className="hand">☰</span>
                </li>
              );
            })
          }
        </ul>
        <a href="https://github.com/HuangHongRui/Vocation/blob/dev/src/pages/test/Drag.tsx">
          Code.
        </a>
      </Wrap>
    );
  }
}

export default DragComponent;

interface EvenTypes {
  stopPropagation: Function;
  preventDefault: Function;
  touches: [{
    pageX: number,
    pageY: number,
  }];
  target: {
    firstElementChild: { innerText: string }
    cloneNode: Function;
    tagName: string;
    parentElement: {
      classList: {
        add: Function;
        remove: Function;
      };
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