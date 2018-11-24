"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./index.scss");
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let page = this.props.page;
        return (React.createElement("div", { className: "pagination" },
            React.createElement("button", { className: page && page > 0 ? '' : 'v-vanish' }, "NEWER POSTS >"),
            React.createElement("button", null, " ODER POSTS > ")));
    }
}
exports.default = Pagination;
