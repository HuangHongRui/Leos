"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
// import { fetchOnline, fetchRunTime, setRunTime } from '../../redux/action';
const action_1 = require("../../redux/action");
require("./index.scss");
const moment = require("moment");
// tslint:disable-next-line
class FootComponent extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return {
                online: nextProps.generalData.online,
                runtime: nextProps.generalData.runtime
            };
        }
    }
    // tslint:disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            online: 0,
            runtime: 0,
            onRockon: null
        };
        this.onTransition = this.onTransition.bind(this);
    }
    componentDidMount() {
        this.props.fetchOnline();
        this.props.fetchRunTime();
        let onRockon = setInterval(() => this.props.setRunTime({ runtime: this.state.runtime + 1000 }), 1000);
        this.setState({
            intervalId: onRockon
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    // onRockon() {
    //   setInterval(
    //     () => this.props.setRunTime({runtime: this.state.runtime + 1000}),
    //     1000
    //   );
    // }
    onTransition(runtime) {
        let result = runtime;
        let calculate = (arg, base) => {
            return Math.floor(arg) % base;
        };
        let year = calculate(moment.duration(result).as('years'), 1);
        let day = calculate(moment.duration(result).as('days'), 365);
        let hours = calculate(moment.duration(result).as('hours'), 24);
        let minutes = calculate(moment.duration(result).as('minutes'), 60);
        let seconds = calculate(moment.duration(result).as('seconds'), 60);
        return `${year ? year + '年-' : ''}${day}天-${hours}小時-${minutes}分鐘-${seconds}秒`;
    }
    render() {
        let distance = this.onTransition(this.state.runtime);
        return (React.createElement("div", { className: "foot" },
            React.createElement("p", { className: "foot-inline-num" },
                "\u7576\u524D\u5728\u7DDA\u4EBA\u6578: ",
                this.state.online),
            React.createElement("p", { className: "foot-go-data" },
                "\u535A\u5BA2\u904B\u884C\u6642\u9577\uFF1A",
                React.createElement("span", null, distance),
                React.createElement("span", { className: "am-my-face" }, "(\u25CF'\u25E1'\u25CF)\uFF89\u2665")),
            React.createElement("p", { className: "foot-source" },
                "Made with ",
                React.createElement("i", null, "\u2764"),
                " by Leo")));
    }
}
// tslint:disable-next-line
const mapDispatchToProps = (dispatch) => {
    return {
        fetchOnline: () => dispatch(action_1.fetchOnline()),
        fetchRunTime: () => dispatch(action_1.fetchRunTime()),
        setRunTime: (arg) => dispatch(action_1.setRunTime(arg))
    };
};
exports.default = react_redux_1.connect(
// {fetchOnline, fetchRunTime, setRunTime}
({ generalData }) => ({ generalData }), mapDispatchToProps
// tslint:disable-next-line
)(FootComponent);
// interface StateTypes {
//   online: number | string;
//   runtime: number;
// // tslint:disable-next-line
//   intervalId: any;
// }
