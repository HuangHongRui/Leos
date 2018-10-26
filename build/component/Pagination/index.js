"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
class Pagination extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let page = this.props.page;
        return (react_1.default.createElement("div", { className: "pagination" },
            react_1.default.createElement("button", { className: page && page > 0 ? '' : 'v-vanish' }, "NEWER POSTS >"),
            react_1.default.createElement("button", null, " ODER POSTS > ")));
    }
}
exports.default = Pagination;
