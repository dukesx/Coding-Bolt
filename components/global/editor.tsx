import React, { useEffect, useState } from "react";
import Frame from "lib/editor/plugins/embeds";
import Unsplash from "lib/editor/plugins/unsplash";

const Editor = (props: any) => {
  const [val, setVal] = useState(null);
  var editor = null;
  useEffect(() => {
    const EditorJS = require("@editorjs/editorjs");
    const ImageTool = require("lib/editor/plugins/imageUpload/bundle");
    const Warning = require("@editorjs/warning");
    const Table = require("@editorjs/table");
    const CodeTool = require("@editorjs/code");
    const InlineCode = require("@editorjs/inline-code");
    const Checklist = require("@editorjs/checklist");
    const Quote = require("@editorjs/quote");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const Marker = require("@editorjs/marker");
    const FootnotesTune = require("@editorjs/footnotes");
    const LinkAutoComplete = require("@editorjs/link-autocomplete");
    const NestedList = require("@editorjs/nested-list");

    var editor = new EditorJS({
      holder: props.id ? props.id : "content",
      placeholder: props.placeholder
        ? props.placeholder
        : "Hello There ! Care to Start Writing ? 😁😅",
      onChange: (val: any) => {
        editor
          .save()
          .then((outputData: any) => {
            onChange(outputData);
          })
          .catch((error: any) => {
            // console.log("Saving failed: ", error);
          });
      },
      data: props.data
        ? {
            time: 1552744582955,
            blocks: props.data,
            version: "2.11.10",
          }
        : null,

      tools: {
        table: Table,
        footnotes: {
          class: FootnotesTune,
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "/api/upload/image/form", // Your backend file uploader endpoint
              byUrl: "/api/upload/image/paste", // Your endpoint that provides uploading by Url
            },
          },
          tunes: ["footnotes"],
        },
        embeds: {
          class: Frame,
        },
        unsplash: {
          class: Unsplash,
        },

        warning: Warning,
        code: CodeTool,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
          tunes: ["footnotes"],
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          tunes: ["footnotes"],
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
          tunes: ["footnotes"],
        },
        quote: Quote,
        header: Header,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          tunes: ["footnotes"],
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
          tunes: ["footnotes"],
        },
        link: {
          class: LinkAutoComplete,
          config: {
            endpoint: "http://localhost:3000/",
            queryParam: "search",
          },
        },
      },
    });

    editor.isReady
      .then(() => {
        // console.log("Editor.js is ready to work!");
        /** Do anything you need after editor initialization */
      })
      .catch((reason: any) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (val: any) => {
    props.setData(val);
  };

  return <div className="font-display" id={props.id ? props.id : "content"} />;
};

export default Editor;
