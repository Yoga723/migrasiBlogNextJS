"use client";
import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-pro-react";
import { basePath } from "@/next.config";
const JoditRichEditor = () => {
  const editor = useRef<any>(null);
  const [editorValue, setEditorValue] = useState(""); // Isi dari text/Jodit editor disimpan disini
  // gunakan joditConfig untuk setting jorditEditor. Baca dokumentasi : https://xdsoft.net/jodit/pro/docs/getting-started/usage.md
  const joditConfig = useMemo(
    () => ({
      placeholder: "Mulai mengetik...",
      toolbarAdaptive: false,
      useSplitMode: true,
      language: 'en',
      basePath: `/blog/_next/static/`,
      // buttons: [
      //   "bold",
      //   "strikethrough",
      //   "underline",
      //   "italic",
      //   "|",
      //   "ul",
      //   "ol",
      //   "|",
      //   "fontsize",
      //   "brush",
      //   "paragraph",
      //   "print",
      // ],
    }),
    []
  );

  return (
    <>
      <JoditEditor
        editorRef={(ref) => (editor.current = ref)}
        value={editorValue}
        name="formEditor"
        config={joditConfig}
        tabIndex={1} // Manage focus
        onBlur={(newContent) => {
          setEditorValue(newContent);
          console.log("ini log dari jodit", newContent);
        }} // Update content onBlur
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(newContent) => {}} // Nanti coba buat countdown 3 detik dan bila sudah 3 detik akan save ke draft di redux
      />
    </>
  );
};

export default JoditRichEditor;
