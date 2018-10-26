"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
const react_router_dom_1 = require("react-router-dom");
const Pagination_1 = require("../../component/Pagination");
const Author_1 = require("../../component/Author");
// tslint:disable-next-line
class Article extends react_1.default.Component {
    // tslint:disable-next-line
    constructor(props) {
        super(props);
        this.mokeData = [
            {
                caption: '主题',
                title: '副题',
                intro: '很很多字很多字很多字很多字很多字很多字很多字很多字很多字多字',
                date: '2018/2/2',
                address: '/'
            },
            {
                caption: '饿了么的 PWA 升级实践',
                title: 'Upgrading Ele.me to Progressive Web App',
                // tslint:disable-next-line
                intro: '很荣幸在今年 2 月到 5 月的时间里，以顾问的身份加入饿了么，参与 PWA 的相关工作。这篇文章其实最初是在以英文写作发表在 medium 上的：Upgrading Ele.me to Progressive Web Apps，获得了一定的关注。所以也决定改写为中文版本再次分享出来，希望能对你有所帮助 ;) 本文首发于 CSDN 与《程序员》2017 年 7...',
                date: '2018/2/2',
                address: '/'
            }
        ];
        this.state = {
            hoverTitleColor: false,
            hoverArticleColor: false
        };
        this.onHoverTitle = this.onHoverTitle.bind(this);
        this.onHoverArticle = this.onHoverArticle.bind(this);
    }
    // tslint:disable-next-line
    onHoverTitle(i) {
        if (!isNaN(i)) {
            this.setState({
                hoverTitleColor: i
            });
        }
        else {
            this.setState({
                hoverTitleColor: false
            });
        }
    }
    // tslint:disable-next-line
    onHoverArticle(i) {
        if (!isNaN(i)) {
            this.setState({
                hoverArticleColor: i
            });
        }
        else {
            this.setState({
                hoverArticleColor: false
            });
        }
    }
    render() {
        let { hoverTitleColor, hoverArticleColor } = this.state;
        return (react_1.default.createElement("div", { className: "article-content content" },
            react_1.default.createElement("div", { className: "article-list" },
                this.mokeData && this.mokeData.map((data, i) => (react_1.default.createElement("div", { key: i, className: "article-item" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: data.address },
                        react_1.default.createElement("h4", { onMouseEnter: () => this.onHoverTitle(i), onMouseLeave: this.onHoverTitle, className: hoverTitleColor === i || hoverArticleColor === i ? 'hover-select' : '' }, data.caption),
                        react_1.default.createElement("h6", { onMouseEnter: () => this.onHoverTitle(i), onMouseLeave: this.onHoverTitle, className: hoverTitleColor === i || hoverArticleColor === i ? 'hover-select' : '' }, data.title),
                        react_1.default.createElement("p", { onMouseEnter: () => this.onHoverArticle(i), onMouseLeave: this.onHoverArticle, className: hoverArticleColor === i ? 'hover-select' : '' }, data.intro)),
                    react_1.default.createElement("span", null, data.date)))),
                react_1.default.createElement(Pagination_1.default, null)),
            react_1.default.createElement(Author_1.default, null)));
    }
}
exports.default = Article;
