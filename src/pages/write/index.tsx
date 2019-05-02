import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown/with-html";
import CodeMirror from "node_modules/codemirror/lib/codemirror";
import CodeBlock from "src/component/Markdown/code-block";
import "node_modules/codemirror/keymap/vim";
import "node_modules/codemirror/mode/markdown/markdown";
import "src/utils/placeholder.min";

import "./index.scss";
import "node_modules/codemirror/theme/monokai.css";
import "node_modules/codemirror/lib/codemirror.css";

const placeholder = `
\n\n\n\n\n\n\n\n\n\n
 __
/\\ \\
\\ \\ \\         __     ___
 \\ \\ \\  __  /'__\`\\  / __\`\\
  \\ \\ \\L\\ \\/\\  __/ /\\ \\L\\ \\
   \\ \\____/\\ \\____\\\\ \\____/
    \\/___/  \\/____/ \\/___/
`;

class Write extends React.Component <{}, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `

---
__Example :)__

- __[Leo](https://github.com/HuangHongRui/Leos)__ - My Github Store.
- __[Huang](https://github.com/HuangHongRui)__ - GitHub HomePage.

Good Luck.

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Horizontal Rules

___

---

***

## Emphasis


~~Strikethrough~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_


---

## Block Quotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

---

## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

---

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

---

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

---

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

---

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

---

## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


-  [Emojies](https://github.com/markdown-it/markdown-it-emoji)

- [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- [\`<ins>\`](https://github.com/markdown-it/markdown-it-ins)

- [\`<mark>\`](https://github.com/markdown-it/markdown-it-mark)

- [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

- [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

- [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

- [Custom containers](https://github.com/markdown-it/markdown-it-container)      
      `
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