"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "../../../app/styles/jodit-button-generator.css";
// Import RichEditor secara dinamis (hanya di-render di client)
const JoditPro = dynamic(() => import("jodit-pro-react"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});
const JoditRichEditor = () => {
  const editor = useRef<any>(null);
  const [editorValue, setEditorValue] = useState(
    `<div class="content">
    <div class="row">

        <!-- 2 first paragraph of the draft -->
        <div class="col-lg-7 mt-4">
            <p style="line-height: 32px;"> <span class="fw-lighter">Ganti dengan keyword -
                </span>Bagian awal HARUS ada dua (2) paragraph, ini bagian paragraph pertama
            </p>

            <p style="line-height: 32px;">Bagian awal HARUS ada dua (2) paragraph, ini bagian paragraph kedua</p>
        </div>

        <!-- Key Takeaways -->
        <div class="col-lg-5 mt-4">
            <div class="card card-body key-take">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong class="title-b3">Key Takeaways</strong></li>
                    <li class="list-group-item">Definisi Stand-up Comedy</li>
                    <li class="list-group-item">Jenis-Jenis Stand-Up Comedy</li>
                    <li class="list-group-item">7 Cara Dasar Membuat Materi Stand Up Comedy</li>
                    <li class="list-group-item">Beberapa Istilah yang Sering Digunakan dalam Stand-Up Comedy</li>
                    <li class="list-group-item">Belajar dari Para Komika Terbaik</li>
                </ul>
            </div>
        </div>
        <p>Sisa kontent dimasukkan kesini</p>
    </div>
</div>`
  ); // Isi dari text/Jodit editor disimpan disini
  useEffect(() => {
    const savedContent = localStorage.getItem("joditEditorContent");
    if (savedContent) {
      setEditorValue(savedContent);
    }
  }, []);
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
        // Manage focus
        onBlur={(newContent) => {
          setEditorValue(newContent);
          localStorage.setItem("joditEditorContent", newContent);
        }} // Update content onBlur
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(newContent) => {}} // Nanti coba buat countdown 3 detik dan bila sudah 3 detik akan save ke draft di redux
      />
    </>
  );
};

export default JoditRichEditor;
