"use client";
import React from "react";
import UploadThumbnail from "./UploadThumbnail";
import dynamic from "next/dynamic";
import InputComponent from "@/components/shared/utils/InputComponent";

const RichEditor = dynamic(() => import("./rich-editor/index"), { ssr: false });

const FormArticle = () => {
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("test-nama"));
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-100 d-flex flex-column mt-5 mt-md-0"
      style={{ maxWidth: 750, height:"fit-content", minHeight:1000 }}>
      <UploadThumbnail />
      <div>
        <InputComponent
          name="nama"
          label="nama"
          placeholder="Masukkan Nama Author"
          type="text"
          className="w-50"
          description="Input ini akan memerlukan nama"
          required
        />
      </div>
      <RichEditor />
      <button
        type="submit"
        className="blue-dialogika-btn mt-4 align-self-end">
        Publish Artikel
      </button>
    </form>
  );
};

export default FormArticle;
