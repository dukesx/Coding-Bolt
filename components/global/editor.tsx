import React, { useEffect, useState } from "react";
import Frame from "../../lib/editor/plugins/embeds/index";
import Table from "@editorjs/table";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import ImageTool from "../../lib/editor/plugins/imageUpload/bundle";
import EditorJs from "react-editor-js";
import LinkAutoComplete from "@editorjs/link-autocomplete";
import NestedList from "@editorjs/nested-list";
import FootnotesTune from "@editorjs/footnotes";
import Checklist from "@editorjs/checklist";
import Paragraph from "@editorjs/paragraph";

const Editor = (props) => {
  const [val, setVal] = useState(null);

  const EDITOR_JS_TOOLS = {
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
  };

  return (
    <div
      className={
        (props.form && props.formError ? "border-red-500 border " : "") +
        (props.className ? props.className : "") +
        ""
      }
    >
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        holder={props.id}
        placeholder={props.placeholder}
        onChange={(api, data) => {
          props.form.setFieldValue("editor", data);
        }}
      >
        <div id={props.id} />
      </EditorJs>
    </div>
  );
};

export default Editor;
