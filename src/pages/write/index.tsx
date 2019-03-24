import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Editor from "../../component/Editor";

class Write extends React.Component <any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="write-wrap">
        <Editor/>
      </div>
    );
  }
}

export default withRouter(Write);
