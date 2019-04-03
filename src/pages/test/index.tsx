import React from "react";
const EditorJS = require ("@editorjs/editorjs");
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CodeTool from "@editorjs/code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import RawTool from "@editorjs/raw";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";
import Warning from "@editorjs/warning";

export default class Test extends React.Component {
  componentDidMount(): void {
    new EditorJS({
      holderId: "editorjs",
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header"
          },
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+H'
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
        code: CodeTool,
        delimiter: Delimiter,
        raw: RawTool,
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching
          }
        },
        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L'
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        inlineCode: {
          class: InlineCode,
          // shortcut: "CMD+SHIFT+M",
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          }
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },


        // ...
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
      }
    });
  }

  render() {
    return (
      <div>
        123
        <div id="editorjs"/>
      </div>
    );
  }
}