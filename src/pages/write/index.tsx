import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown/with-html";
import CodeMirror from "node_modules/codemirror/lib/codemirror";
import CodeBlock from "./code-block";
import "node_modules/codemirror/keymap/vim";
import "node_modules/codemirror/mode/markdown/markdown";
import "src/utils/placeholder.min";

import "./index.scss";
import "node_modules/codemirror/theme/monokai.css";
import "node_modules/codemirror/lib/codemirror.css";

const placeholder = `
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
 __                         __                  ____       ___
/\\ \\                       /\\ \\                /\\  _\`\\    /\\_ \\
\\ \\ \\         __     ___   \\ \\/      ____      \\ \\ \\L\\ \\  \\//\\ \\      ___      __
 \\ \\ \\  __  /'__\`\\  / __\`\\  \\/      /',__\\      \\ \\  _ <'   \\ \\ \\    / __\`\\  /'_ \`\\
  \\ \\ \\L\\ \\/\\  __/ /\\ \\L\\ \\        /\\__, \`\\      \\ \\ \\L\\ \\   \\_\\ \\_ /\\ \\L\\ \\/\\ \\L\\ \\
   \\ \\____/\\ \\____\\\\ \\____/        \\/\\____/       \\ \\____/   /\\____\\\\ \\____/\\ \\____ \\
    \\/___/  \\/____/ \\/___/          \\/___/         \\/___/    \\/____/ \\/___/  \\/___L\\ \\
                                                                               /\\____/
                                                                               \\_/__/
`;

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

    const editor = CodeMirror(ele => {
      textarea.parentNode.replaceChild(ele, textarea);
    }, {
      value: markdown,
      theme: "monokai",
      keyMap: "vim",
      mode: "markdown",
      lineNumbers: true,
      lineWrapping: true,
      placeholder: placeholder
    });

    editor.on("change", () => {
      this.setState({
        markdown: editor.getValue()
      });
    });
  }

  onEdit = (e) => {
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
          renderers={{code: CodeBlock}}
        />
      </div>
    );
  }
}

export default withRouter(Write);

interface StateType {
  markdown: string;
}