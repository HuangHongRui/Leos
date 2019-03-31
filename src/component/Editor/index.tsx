/**
 *  Author: leo
 *  Intro: A Cute Editor
 *  Date：2019-03-24
 *  @params：
 */
import React from "react";
import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./index.scss";

class LeoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.editor = {};
  }

  componentDidMount() {}

  onChange = (editorState) => this.setState({editorState});

  render() {
    let {editorState} = this.state;
    return (
      <div className="leo-editor-wrap">
        <Editor
          placeholder=""
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onChange}
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