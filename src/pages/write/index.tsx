import React from "react";
import { withRouter } from "react-router";
import { Editor, EditorState, RichUtils } from "draft-js";
import { connect } from "react-redux";

class Write extends React.Component <any, any> {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  componentDidMount() {
    this.focusEditor();
  }

  setEditor = (editor) => {
    // this.editor = editor;
  };

  focusEditor = () => {
    // if (this.editor) {
    // this.editor.focus();
    // }
  };

  onChange = (editorState) => this.setState({editorState});

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  render() {
    return (
      <div style={styles.editor} onClick={this.focusEditor}>
        <Editor
          // ref={this.setEditor}
          placeholder="heyyyyy"
          editorKey="foobaz"
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default withRouter(Write);

const styles = {
  editor: {
    border: "1px solid gray",
    minHeight: "6em"
  }
};