"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const react_redux_1 = require("react-redux");
const Action = require("./action");
const Menu_1 = require("../../component/Menu");
const styled_components_1 = require("styled-components");
const Wrap = styled_components_1.default.div `

`;
/**
 *  Test Page.
 */
// tslint:disable-next-line
class Rxjs extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement(Wrap, null,
            react_1.default.createElement(Menu_1.default, null),
            react_1.default.createElement(antd_1.Button, { onClick: () => {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Redux 27', this.props);
                } }, "123"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(antd_1.Button, { onClick: this.props.add }, "+"),
            react_1.default.createElement("span", { onClick: () => {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Redux 34', this.props);
                } }, this.props.value),
            react_1.default.createElement(antd_1.Button, { onClick: this.props.delete }, "-")));
    }
}
// tslint:disable-next-line
function mapStateToProps(state, own) {
    // tslint:disable-next-line
    console.log('☞☞☞ 9527 Redux 47', state);
    return {
        value: state.test.hehe
    };
}
// tslint:disable-next-line
function mapDispatchToProps(dispatch, own) {
    return {
        add: () => {
            dispatch(Action.addTodo());
        },
        delete: () => {
            dispatch(Action.deleteTodo());
        }
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Rxjs);
