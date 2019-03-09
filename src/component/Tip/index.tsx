import * as React from "react";
import "./index.scss";
import classnames from "classnames";

/**
 *  功能: 提示
 *  日期：2019-03-09
 *  參數：text string
 */
class Tip extends React.Component <PropsType, StateType> {

  static getDerivedStateFromProps(nextProps: PropsType, prevState: PropsType): void | {} {
    if (nextProps !== prevState) {
      return {...nextProps};
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let {text} = this.state;
    let style = classnames("tip", {show: text});

    return (
      <div className={style}>
        <h4>{text ? "提示:" : ""}</h4>
        <p>{text}</p>
      </div>
    );
  }

}

export default Tip;

interface PropsType {
  text?: string;
}

interface StateType {
  text?: string
}
