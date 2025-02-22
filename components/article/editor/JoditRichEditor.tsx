"use client";
import React, { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "../../../app/styles/jodit-button-generator.css";
// Import RichEditor secara dinamis (hanya di-render di client)
const JoditPro = dynamic(() => import("jodit-pro-react"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});
const JoditRichEditor = () => {
  const getLocalContent = localStorage.getItem("joditEditorContent");
  const editor = useRef<any>(null);
  const [editorValue, setEditorValue] = useState(
    getLocalContent
      ? getLocalContent
      : `<p><span style="color: rgb(153, 153, 153);">ganti dengan keyword </span>- Mulai mengetik, ganti dengan isi artikel</p>`
  ); // Isi dari text/Jodit editor disimpan disini
  // gunakan joditConfig untuk setting jorditEditor. Baca dokumentasi : https://xdsoft.net/jodit/pro/docs/getting-started/usage.md
  const joditConfig = useMemo(
    () => ({
      placeholder: "Mulai mengetik...",
      // toolbarAdaptive: false,
      useSplitMode: true,
      language: "en",
      theme: "",
      ai: {
        // Perlu licence dulu
        apiUrl: "YOUR_AI_SERVICE_ENDPOINT",
        authToken: "YOUR_AI_API_KEY",
      },
    }),
    []
  );

  return (
    <>
      <JoditPro
        editorRef={(ref) => (editor.current = ref)}
        value={editorValue}
        name="formEditor"
        config={joditConfig}
        tabIndex={1} // Manage focus
        onBlur={(newContent) => {
          setEditorValue(newContent);
          if (getLocalContent) localStorage.setItem("joditEditorContent", newContent);
        }} // Update content onBlur
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(newContent) => {}} // Nanti coba buat countdown 3 detik dan bila sudah 3 detik akan save ke draft di redux
      />
    </>
  );
};

export default JoditRichEditor;
