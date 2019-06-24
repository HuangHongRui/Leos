import * as React from "react";
import { connect } from "react-redux";
import { fetchOnline, fetchRunTime } from "src/request";
import "./index.scss";
import * as moment from "moment";

class FootComponent extends React.Component<{}, StateTypes> {

  constructor(props) {
    super(props);
    this.state = {
      // online: 0,
      runtime: 0,
      intervalID: 0
    };
    this.onTransition = this.onTransition.bind(this);
  }

  componentDidMount() {
    this.initReq();
    let intervalID = setInterval(
      () => this.setState({runtime: this.state.runtime + 1000}),
      1000
    );
    this.setState({
      intervalID: intervalID
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  initReq = async() => {
    // let ONLINE = await fetchOnline();
    let RUNTIME = await fetchRunTime();
    this.setState({
      // online: ONLINE.online,
      runtime: RUNTIME.runtime
    })
  };

  onTransition(runtime: number | string) {
    let result = runtime;
    let calculate = (arg: number, base: number) => {
      return Math.floor(arg) % base;
    };
    let year = calculate(moment.duration(result).as("years"), 1);
    let day = calculate(moment.duration(result).as("days"), 365);
    let hours = calculate(moment.duration(result).as("hours"), 24);
    let minutes = calculate(moment.duration(result).as("minutes"), 60);
    let seconds = calculate(moment.duration(result).as("seconds"), 60);
    return `${year ? year + "年-" : ""}${day}天-${hours}小時-${minutes}分鐘-${seconds}秒`;
  }

  render() {
    let distance = this.onTransition(this.state.runtime);
    return (
      <div className="foot">
        {/* <p className="foot-inline-num">當前在線人數: {this.state.online}</p> */}
        <p className="foot-go-data">
          博客運行時長：
          <span>{distance}</span>
          <span className="am-my-face">(●'◡'●)ﾉ♥</span>
        </p>
        <p className="foot-source">Made with <i>❤</i> by Leo</p>
      </div>
    );
  }
}

export default connect( ({generalData}: PropsTypes) => ({generalData}) )(FootComponent as any);

interface PropsTypes {
  intervalId: Function;
  fetchOnline: Function;
  fetchRunTime: Function;
  setRunTime: Function;
  generalData: {
    // online: number | string
    runtime: number | string
  };
}

interface StateTypes {
  // online: number | string;
  runtime: number;
  intervalID: any;
}
