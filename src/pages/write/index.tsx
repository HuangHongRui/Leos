import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown/with-html";
import CodeMirror from "node_modules/codemirror/lib/codemirror";
import "node_modules/codemirror/keymap/vim";
import "node_modules/codemirror/mode/markdown/markdown";

import "./index.scss";
import "node_modules/codemirror/theme/monokai.css";
import "node_modules/codemirror/lib/codemirror.css";


class Write extends React.Component <{}, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    const {markdown} = this.state;
    const textarea: any = this.refs.textarea;

    const editor = CodeMirror.fromTextArea(textarea, {
      value: markdown,
      theme: "monokai",
      keyMap: "vim",
      mode: "markdown",
      lineNumbers: true,
      lineWrapping: true,
    });

    editor.on("change", () => {
      this.setState({
        markdown: editor.getValue()
      });
    });
  }

  onEdit = (e) => {
    console.log("☞☞☞ index 22", e.target.value);
    this.setState({
      markdown: e.target.value
    });
  };

  render() {
    let {markdown} = this.state;

    return (
      <div className="write-wrap content">
        <div className="editor-pane" ref="editorPane">
          <textarea
            ref="textarea"
            value={markdown}
            onChange={this.onEdit}
          />

        </div>
        <ReactMarkdown
          className={"result-pane rely-bag"}
          source={markdown}
          escapeHtml={false}
        />
      </div>
    );
  }
}

export default withRouter(Write);

interface StateType {
  markdown: string;
}