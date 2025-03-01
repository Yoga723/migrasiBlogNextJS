"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";

const LoadJoditRegular = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});
const JoditRegularEditor = () => {
  const editor = useRef<any>(null);
  // Set isi default dari jodit editor bila tidak ada draft
  const [editorValue, setEditorValue] = useState(
    `<div class="row">

    <!-- 2 first paragraph of the draft -->
    <div class="col-lg-7 mt-4">
        <p style="line-height: 32px;"> <span class="fw-lighter"><span style="color: rgb(153, 153, 153);">Ganti
                    dengan keyword </span>- </span>Bagian awal HARUS ada dua (2) paragraph, ini bagian paragraph
            pertama
        </p>
        <p style="line-height: 32px;">Bagian awal HARUS ada dua (2) paragraph, ini bagian paragraph kedua</p>
    </div>

    <div class="col-lg-5 mt-4">
        <div class="card card-body key-take">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong class="title-b3">Key Takeaways</strong></li>
                <li class="list-group-item">key takeaway 1</li>
                <li class="list-group-item">key takeaway 2</li>
                <li class="list-group-item">key takeaway 3</li>
                <li class="list-group-item">key takeaway 4</li>
                <li class="list-group-item">key takeaway 5</li>
            </ul>
        </div>
    </div>
    <p>Sisa kontent dimasukkan kesini, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

    <div id="call-to-action" class="call-to-action">
        <img src="https://img.freepik.com/free-photo/woman-asking-questions-podcast_23-2149029335.jpg?w=2000&amp;t=st=1702424624~exp=1702425224~hmac=8ef22a8fb4c913b576a1fefecfe57e6e9f84a118e0f24b78674d7e4105d2d7b1"
            alt="Menawar, negosiasi, murah">
        <div class="container-fluid">
            <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div class="col-xl-12">
                    <div class="text-center">
                        <h3 style="color: #f1f7fd;">Tanya Aja Dulu</h3>
                        <p>Susah dan Gugup Ngomong di Depan Umum? Konsul Aja Dulu</p>
                        <a class="cta-btn title-change-consultation" href="https://wa.link/q8jnnv" target="_blank">Tanya
                            Admin</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h2>Penutup/Kesimpulan (Pilih satu)</h2>
    <p>Isi penutup/kesimpulan</p>

</div>`
  ); // Isi dari text/Jodit editor disimpan disini
  useEffect(() => {
    const savedContent = localStorage.getItem("joditEditorContent");
    if (savedContent) {
      // setEditorValue(savedContent);
    }
  }, []);
  // gunakan joditConfig untuk setting jorditEditor. Baca dokumentasi : https://xdsoft.net/jodit/docs/
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
    <div>
      {/* <button
        type="button"
        onClick={() => console.log("ini value jodit :", editorValue)}>
        Get Jodit Value (tim HTML)
      </button> */}
      <LoadJoditRegular
        editorRef={(ref) => (editor.current = ref)}
        value={editorValue}
        name="formEditor"
        config={joditConfig}
        onBlur={(newContent) => {
          setEditorValue(newContent);
          localStorage.setItem("joditEditorContent", newContent);
        }} // Update content onBlur
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default JoditRegularEditor;
