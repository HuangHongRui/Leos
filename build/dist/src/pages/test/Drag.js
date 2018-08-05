var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #e8e8e8;\n  ul.bMoveTag {\n    .topAnimation {\n      animation-name: top-animation;\n      animation-duration: .5s;\n    }\n    .downAnimation {\n      animation-name: down-animation;\n      animation-duration: .5s;\n    }\n     > li {\n      .serial {\n        background: #cccccca3;\n      }\n      .hand {\n        opacity: 0;\n      }\n    }\n  }\n  ul {\n    list-style-type: none;\n    padding: 0;\n    >li{\n      background: #fff;\n      line-height: 3.5rem;\n      height: 3.5rem;\n      padding: 0 1rem;\n      ::after {\n        position: relative;\n        display: block;\n        content: '';\n        top: 0px;\n        width: 100vw;\n        border-top: solid .5px #ccccccab;\n      }\n      :last-of-type::after{\n        display: none;\n      }\n      .serial {\n        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;\n        font-size: .8rem;\n        display: inline-block;\n        background: rgb(0, 123, 236);\n        color: #fff;\n        width: 1.3rem;\n        height: 1.3rem;\n        line-height: 1.4rem;\n        text-align: center;\n        pointer-events:none;\n      }\n      .content {\n        margin: 0 1rem;\n        font-size: 1rem;\n        pointer-events:none;\n      }\n      .hand {\n        float: right;\n        font-size: 1.2rem;\n        pointer-events:none;\n        color: #ccc;\n      }\n      .test {\n        \n      }\n    }\n    .moveTag {\n      position: absolute;\n      background:#fff;\n      width: 100%;\n      z-index: 1000;\n      border: solid .5px #fff0f6;\n      pointer-events:none;\n      -webkit-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      -moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      font-size: 1.5em;\n      transition: none;\n      .serial {\n        background: rgb(0, 123, 236) !important;\n      }\n      .hand {\n        opacity: 1 !important;\n      }\n    }\n    .placeholder {\n      visibility: hidden;\n    }\n    \n  }\n  @keyframes top-animation {\n    from {\n        z-index: 100;\n        //margin-top: 3px;\n        box-shadow: 0px 10px 50px 0px rgba(0,0,0,0.75);\n    }\n    to {\n        z-index: auto;\n        margin-top: 0;\n        box-shadow: none;\n    }\n  }\n  @keyframes down-animation {\n    from {\n        z-index: 100;\n        //margin-bottom: 3px;\n        box-shadow: 0px -10px 50px 0px rgba(0,0,0,0.75);\n    }\n    to {\n        z-index: auto;\n        margin-bottom: 0;\n        box-shadow: none;\n    }\n  }\n"], ["\n  background: #e8e8e8;\n  ul.bMoveTag {\n    .topAnimation {\n      animation-name: top-animation;\n      animation-duration: .5s;\n    }\n    .downAnimation {\n      animation-name: down-animation;\n      animation-duration: .5s;\n    }\n     > li {\n      .serial {\n        background: #cccccca3;\n      }\n      .hand {\n        opacity: 0;\n      }\n    }\n  }\n  ul {\n    list-style-type: none;\n    padding: 0;\n    >li{\n      background: #fff;\n      line-height: 3.5rem;\n      height: 3.5rem;\n      padding: 0 1rem;\n      ::after {\n        position: relative;\n        display: block;\n        content: '';\n        top: 0px;\n        width: 100vw;\n        border-top: solid .5px #ccccccab;\n      }\n      :last-of-type::after{\n        display: none;\n      }\n      .serial {\n        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;\n        font-size: .8rem;\n        display: inline-block;\n        background: rgb(0, 123, 236);\n        color: #fff;\n        width: 1.3rem;\n        height: 1.3rem;\n        line-height: 1.4rem;\n        text-align: center;\n        pointer-events:none;\n      }\n      .content {\n        margin: 0 1rem;\n        font-size: 1rem;\n        pointer-events:none;\n      }\n      .hand {\n        float: right;\n        font-size: 1.2rem;\n        pointer-events:none;\n        color: #ccc;\n      }\n      .test {\n        \n      }\n    }\n    .moveTag {\n      position: absolute;\n      background:#fff;\n      width: 100%;\n      z-index: 1000;\n      border: solid .5px #fff0f6;\n      pointer-events:none;\n      -webkit-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      -moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.7);\n      font-size: 1.5em;\n      transition: none;\n      .serial {\n        background: rgb(0, 123, 236) !important;\n      }\n      .hand {\n        opacity: 1 !important;\n      }\n    }\n    .placeholder {\n      visibility: hidden;\n    }\n    \n  }\n  @keyframes top-animation {\n    from {\n        z-index: 100;\n        //margin-top: 3px;\n        box-shadow: 0px 10px 50px 0px rgba(0,0,0,0.75);\n    }\n    to {\n        z-index: auto;\n        margin-top: 0;\n        box-shadow: none;\n    }\n  }\n  @keyframes down-animation {\n    from {\n        z-index: 100;\n        //margin-bottom: 3px;\n        box-shadow: 0px -10px 50px 0px rgba(0,0,0,0.75);\n    }\n    to {\n        z-index: auto;\n        margin-bottom: 0;\n        box-shadow: none;\n    }\n  }\n"])));
var DragComponent = /** @class */ (function (_super) {
    __extends(DragComponent, _super);
    function DragComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            targetDrag: false,
            addClassNode: {
                classList: {
                    remove: Function
                }
            },
            addClass: ''
        };
        return _this;
    }
    DragComponent.prototype.componentDidMount = function () {
        var tag = document.querySelectorAll('li');
        var that = this;
        if (tag) {
            [].forEach.call(tag, function (item) {
                item.addEventListener('touchstart', that.handleStart.bind(that), true);
                item.addEventListener('touchmove', that.handleMove.bind(that), true);
                item.addEventListener('touchend', that.handleEnd.bind(that), true);
            });
        }
    };
    /**
     *  首次触屏
     */
    DragComponent.prototype.handleStart = function (e) {
        this.setState({ targetDrag: true });
        e.preventDefault();
        e.target.setAttribute('style', "top: " + (e.touches[0].pageY - e.target.offsetHeight / 2) + "px;");
        if (e.target.tagName !== 'LI') {
            return;
        }
        var placeholder = e.target.cloneNode(true);
        placeholder.classList.add('placeholder');
        e.target.classList.add('moveTag');
        e.target.parentElement.classList.add('bMoveTag');
        e.target.parentElement.insertBefore(placeholder, e.target);
    };
    /**
     *  拖拽触发（按住拖拽）
     */
    DragComponent.prototype.handleMove = function (e) {
        // tslint:disable-next-line
        var tagNode = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
        e.target.setAttribute('style', "top: " + (e.touches[0].pageY - e.target.offsetHeight / 2) + "px;");
        if (tagNode && tagNode.tagName === 'LI') {
            var downNum = tagNode.firstElementChild.innerText;
            var dragNum = e.target.firstElementChild.innerText;
            var toggleNode = document.createElement('li');
            var placeholder = document.querySelector('.placeholder');
            this.state.addClassNode.classList.remove(this.state.addClass);
            this.setState({
                addClassNode: tagNode,
                nowNum: downNum
            });
            toggleNode.classList.add('placeholder');
            if (downNum < dragNum) {
                tagNode.classList.add('downAnimation');
                this.setState({ addClass: 'downAnimation' });
            }
            else {
                tagNode.classList.add('topAnimation');
                this.setState({ addClass: 'topAnimation' });
            }
            e.target.firstElementChild.innerText = downNum;
            tagNode.firstElementChild.innerText = dragNum;
            e.target.parentElement.insertBefore(toggleNode, tagNode);
            e.target.parentElement.replaceChild(tagNode, placeholder);
        }
    };
    /**
     *  松开
     */
    DragComponent.prototype.handleEnd = function (e) {
        this.setState({ targetDrag: false });
        // if (e.target.tagName !== 'LI') {
        //   return;
        // }
        this.state.addClassNode.classList.remove(this.state.addClass);
        var placeholder = document.querySelector('.placeholder');
        e.target.classList.add('test');
        if (placeholder) {
            e.target.classList.remove('moveTag');
            e.target.parentElement.classList.remove('bMoveTag');
            e.target.parentElement.replaceChild(e.target, placeholder);
        }
    };
    DragComponent.prototype.render = function () {
        var _this = this;
        var renderDom = [1, 2, 3, 4, 5, 6];
        return (React.createElement(Wrap, null,
            React.createElement("ul", null, renderDom.map(function (e, i) {
                return (React.createElement("li", { key: i, draggable: true },
                    React.createElement("span", { className: "serial" }, e),
                    React.createElement("span", { className: "content" },
                        "\u5185\u5BB9Content\u5185\u5BB9",
                        e),
                    React.createElement("span", { className: "hand" }, _this.state.targetDrag ? React.createElement(Icon, { type: "arrows-alt" }) : '☰')));
            }))));
    };
    return DragComponent;
}(React.Component));
export default DragComponent;
var templateObject_1;
//# sourceMappingURL=Drag.js.map