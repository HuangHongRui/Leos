import React, { ReactNode } from "react";
const hljs = require( "src/utils/highlight.min");

class CodeBlock extends React.PureComponent {

  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <pre>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    );
  }
}

export default CodeBlock;

interface CodeBlock {
  codeEl: ReactNode
  props: {
    value: any
    language: string
  }
};