"use client";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./style.css";
import hljs from "highlight.js";

const RichEditor = () => {
  const editorRef = useRef(null);
  const quillRef = useRef<null | Quill>(null);

  const toolbarOptions = [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // List Style
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    [{ header: 1 }, { header: 2 }], // custom button values
    ["clean"], // remove formatting button
  ];

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        placeholder: "Masukkan konten blog ke sini....",
        modules: { toolbar: toolbarOptions, syntax: { hljs } },
        theme: "snow",
      });
    }
  }, []);

  const handleGetContent = () => {
    if (quillRef.current) {
      console.log(quillRef.current.getContents());
    }
  };

  return (
    <>
      <button onClick={handleGetContent}>Get Quill Content</button>
      <div
        id="editor"
        ref={editorRef}></div>
    </>
  );
};

export default RichEditor;
