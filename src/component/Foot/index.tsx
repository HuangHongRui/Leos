import * as React from 'react';
import { connect } from 'react-redux';
// import { fetchOnline, fetchRunTime, setRunTime } from '../../redux/action';
import { fetchOnline, fetchRunTime, setRunTime } from '../../redux/action';
import './index.scss';
import * as moment from 'moment';

// tslint:disable-next-line
class FootComponent extends React.Component <PropsTypes, any > {

  static getDerivedStateFromProps(nextProps: PropsTypes, prevState: PropsTypes): void | {} {
    if (nextProps !== prevState) {
      return {
        online: nextProps.generalData.online,
        runtime: nextProps.generalData.runtime
      };
    }
  }

// tslint:disable-next-line
  constructor(props: any) {
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
    let onRockon = setInterval(
      () => this.props.setRunTime({runtime: this.state.runtime + 1000}),
      1000
    );
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

  onTransition(runtime: number | string) {
    let result = runtime;
    let calculate = (arg: number, base: number) => {
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
    return (
      <div className="foot">
        <p className="foot-inline-num">當前在線人數: {this.state.online}</p>
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

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchOnline: () => dispatch(fetchOnline()),
    fetchRunTime: () => dispatch(fetchRunTime()),
    setRunTime: (arg: {}) => dispatch(setRunTime(arg))
  };
};

export default connect(
  // {fetchOnline, fetchRunTime, setRunTime}
  ({generalData}: PropsTypes) => ({generalData}),
  mapDispatchToProps
// tslint:disable-next-line
)(FootComponent as any);

interface PropsTypes {
  fetchOnline: Function;
  fetchRunTime: Function;
  setRunTime: Function;
  generalData: {
    online: number | string
    runtime: number | string
  };
}

// interface StateTypes {
//   online: number | string;
//   runtime: number;
// // tslint:disable-next-line
//   intervalId: any;
// }
