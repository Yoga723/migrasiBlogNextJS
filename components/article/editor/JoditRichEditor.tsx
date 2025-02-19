"use client";
import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-pro-react";
const JoditRichEditor = () => {
  const editor = useRef<any>(null);
  const [editorValue, setEditorValue] = useState(""); // Isi dari text/Jodit editor disimpan disini
  // gunakan config untuk setting jorditEditor. Baca dokumentasi : https://xdsoft.net/jodit/pro/docs/getting-started/usage.md
  const config = useMemo(
    () => ({
      placeholder: "Mulai mengetik...",
    }),
    []
  );

  return (
    <>
      <JoditEditor
        editorRef={(ref) => (editor.current = ref)}
        value={editorValue}
        name="formEditor"
        config={config}
        tabIndex={1} // Manage focus
        onBlur={(newContent) => {
          setEditorValue(newContent);
          console.log("ini log dari jodit", newContent);
        }} // Update content onBlur
        onChange={(newContent) => {}} // Nanti coba buat countdown 3 detik dan bila sudah 3 detik akan save ke draft di redux
      />
    </>
  );
};

export default JoditRichEditor;
