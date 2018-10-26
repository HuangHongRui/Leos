"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// import { Link } from 'react-router-dom';
const react_redux_1 = require("react-redux");
class Info extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement("div", null,
            "Info Works!",
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { onClick: () => {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Info 14', this.props);
                } }, "haha")));
    }
}
// tslint:disable-next-line
function mapStateToProps(state) {
    // tslint:disable-next-line
    console.log(state);
}
// tslint:disable-next-line
let cet = react_redux_1.connect(mapStateToProps);
exports.default = cet(Info);
