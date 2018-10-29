import * as React from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';

const Wrap = styled.div`
  background: #e8e8e8;
  ul.bMoveTag {
    .topAnimation {
      animation-name: top-animation;
      animation-duration: .5s;
    }
    .downAnimation {
      animation-name: down-animation;
      animation-duration: .5s;
    }
     > li {
      .serial {
        background: #cccccca3;
      }
      .hand {
        opacity: 0;
      }
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    >li{
      background: #fff;
      line-height: 3.5rem;
      height: 3.5rem;
      padding: 0 1rem;
      ::after {
        position: relative;
        display: block;
        content: '';
        top: 0px;
        width: 100vw;
        border-top: solid .5px #ccccccab;
      }
      :last-of-type::after{
        display: none;
      }
      .serial {
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
        font-size: .8rem;
        display: inline-block;
        background: rgb(0, 123, 236);
        color: #fff;
        width: 1.3rem;
        height: 1.3rem;
        line-height: 1.4rem;
        text-align: center;
        pointer-events:none;
      }
      .content {
        margin: 0 1rem;
        font-size: 1rem;
        pointer-events:none;
      }
      .hand {
        float: right;
        font-size: 1.2rem;
        pointer-events:none;
        color: #ccc;
      }
      .test {
        
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
  @keyframes top-animation {
    from {
        z-index: 100;
        //margin-top: 3px;
        box-shadow: 0px 10px 50px 0px rgba(0,0,0,0.75);
    }
    to {
        z-index: auto;
        margin-top: 0;
        box-shadow: none;
    }
  }
  @keyframes down-animation {
    from {
        z-index: 100;
        //margin-bottom: 3px;
        box-shadow: 0px -10px 50px 0px rgba(0,0,0,0.75);
    }
    to {
        z-index: auto;
        margin-bottom: 0;
        box-shadow: none;
    }
  }
`;

class DragComponent extends React.Component<{}> {
  state = {
    targetDrag: false,
    addClassNode: {
      classList: {
        remove: Function
      }
    },
    addClass: ''
  };

  componentDidMount() {
    let tag = document.querySelectorAll('li');
    let that = this;
    if (tag) {
      [].forEach.call(tag, function (item: { addEventListener: Function }) {
        item.addEventListener('touchstart', that.handleStart.bind(that), true);
        item.addEventListener('touchmove', that.handleMove.bind(that), true);
        item.addEventListener('touchend', that.handleEnd.bind(that), true);
      });
    }
  }

  /**
   *  首次触屏
   */
  handleStart(e: EvenTypes) {
    this.setState({ targetDrag: true });
    e.preventDefault();
    e.target.setAttribute(
      'style',
      `top: ${e.touches[0].pageY - e.target.offsetHeight / 2}px;`
    );
    if (e.target.tagName !== 'LI') {
      return;
    }
    let placeholder = e.target.cloneNode(true);
    placeholder.classList.add('placeholder');
    e.target.classList.add('moveTag');
    e.target.parentElement.classList.add('bMoveTag');
    e.target.parentElement.insertBefore(placeholder, e.target);
  }

  /**
   *  拖拽触发（按住拖拽）
   */
  handleMove(e: EvenTypes) {
    // tslint:disable-next-line
    let tagNode: any = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
    e.target.setAttribute(
      'style',
      `top: ${e.touches[0].pageY - e.target.offsetHeight / 2}px;`
    );
    if (tagNode && tagNode.tagName === 'LI') {
      let downNum = tagNode.firstElementChild.innerText;
      let dragNum = e.target.firstElementChild.innerText;
      let toggleNode = document.createElement('li');
      let placeholder = document.querySelector('.placeholder');
      this.state.addClassNode.classList.remove(this.state.addClass);
      this.setState({
        addClassNode: tagNode,
        nowNum: downNum
      });
      toggleNode.classList.add('placeholder');
      if (downNum < dragNum) {
        tagNode.classList.add('downAnimation');
        this.setState({ addClass: 'downAnimation' });
      } else {
        tagNode.classList.add('topAnimation');
        this.setState({ addClass: 'topAnimation' });
      }
      e.target.firstElementChild.innerText = downNum;
      tagNode.firstElementChild.innerText = dragNum;
      e.target.parentElement.insertBefore(toggleNode, tagNode);
      e.target.parentElement.replaceChild(tagNode, placeholder);
    }
  }

  /**
   *  松开
   */
  handleEnd(e: EvenTypes) {
    this.setState({ targetDrag: false });
    // if (e.target.tagName !== 'LI') {
    //   return;
    // }
    this.state.addClassNode.classList.remove(this.state.addClass);
    let placeholder = document.querySelector('.placeholder');
    e.target.classList.add('test');
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
                  <span className="hand">
                    {this.state.targetDrag ? <Icon type="arrows-alt"/> : '☰'}
                  </span>
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
