"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
class Author extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement("div", { className: "author-info" },
            react_1.default.createElement("div", { className: "author-about-me" },
                react_1.default.createElement("h5", null, "ABOUT ME"),
                react_1.default.createElement("img", { src: "/picture/Avatar.jpg", alt: "HEADER" }),
                react_1.default.createElement("span", { className: "author-mood" }, "EveryThing Will Be Fine."),
                react_1.default.createElement("div", { className: "author-icons" },
                    react_1.default.createElement("a", { href: "https://github.com/HuangHongRui" },
                        react_1.default.createElement("i", { className: "author-git" })),
                    react_1.default.createElement("a", { href: "https://www.zhihu.com/people/HuangHongRui" },
                        react_1.default.createElement("i", { className: "author-zhihu" })),
                    react_1.default.createElement("a", { href: "https://weibo.com/huanghongrui" },
                        react_1.default.createElement("i", { className: "author-weibo" })),
                    react_1.default.createElement("a", { href: "https://twitter.com/HongRui_Huang" },
                        react_1.default.createElement("i", { className: "author-twitter" })))),
            react_1.default.createElement("div", { className: "author-tags" },
                react_1.default.createElement("h5", null, "TAGS"),
                react_1.default.createElement("span", null, "\u817E\u8BAFCDC"),
                react_1.default.createElement("span", null, "\u524D\u7AEF\u5F00\u53D1")),
            react_1.default.createElement("div", { className: "author-friends" },
                react_1.default.createElement("h5", null, "FRIENDS"),
                react_1.default.createElement("span", null,
                    react_1.default.createElement("a", { href: "https://spontaleo.github.io/" }, "SpontaLeo")),
                react_1.default.createElement("span", null,
                    react_1.default.createElement("a", { href: "https://overtrue.me/" }, "Overtrue")),
                react_1.default.createElement("span", null,
                    react_1.default.createElement("a", { href: "https://github.com/incuisting/blogs/issues" }, "Incuisting")))));
    }
}
exports.default = Author;
