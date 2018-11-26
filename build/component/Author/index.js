"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./index.scss");
class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "author-info" },
            React.createElement("div", { className: "author-about-me" },
                React.createElement("h5", null, "ABOUT ME"),
                React.createElement("img", { src: "/picture/Avatar.jpg", alt: "HEADER" }),
                React.createElement("span", { className: "author-mood" }, "EveryThing Will Be Fine."),
                React.createElement("div", { className: "author-icons" },
                    React.createElement("a", { href: "https://github.com/HuangHongRui" },
                        React.createElement("i", { className: "author-git" })),
                    React.createElement("a", { href: "https://www.zhihu.com/people/HuangHongRui" },
                        React.createElement("i", { className: "author-zhihu" })),
                    React.createElement("a", { href: "https://weibo.com/huanghongrui" },
                        React.createElement("i", { className: "author-weibo" })),
                    React.createElement("a", { href: "https://twitter.com/HongRui_Huang" },
                        React.createElement("i", { className: "author-twitter" })))),
            React.createElement("div", { className: "author-tags" },
                React.createElement("h5", null, "TAGS"),
                React.createElement("span", null, "\u817E\u8BAFCDC"),
                React.createElement("span", null, "\u524D\u7AEF\u5F00\u53D1")),
            React.createElement("div", { className: "author-friends" },
                React.createElement("h5", null, "FRIENDS"),
                React.createElement("span", null,
                    React.createElement("a", { href: "https://spontaleo.github.io/" }, "SpontaLeo")),
                React.createElement("span", null,
                    React.createElement("a", { href: "https://overtrue.me/" }, "Overtrue")),
                React.createElement("span", null,
                    React.createElement("a", { href: "https://github.com/incuisting/blogs/issues" }, "Incuisting")))));
    }
}
exports.default = Author;
