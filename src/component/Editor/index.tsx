/**
 *  Author: leo
 *  Intro: A Cute Editor
 *  Date：2019-03-24
 *  @params：
 */
import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./index.scss";

class LeoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.editor = {};
  }

  componentDidMount() {
    this.focusEditor();
  }

  setEditor = (editor) => {
    this.editor = editor;
  };

  focusEditor = () => {
    if (this.editor) {
      this.editor.focus();
    }
  };

  onChange = (editorState) => this.setState({editorState});

  render() {
    return (
      <div className="leo-editor-wrap">
        <Editor
          ref={this.setEditor}
          // style={styles.editor}
          placeholder="heyyyyy"
          editorKey="foobaz"
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default LeoEditor;

interface LeoEditor {
  editor: {
    focus?: Function
  };
  state: {
    editorState: {};
  }
}