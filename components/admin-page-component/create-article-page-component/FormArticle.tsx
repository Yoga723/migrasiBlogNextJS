"use client";
import React from "react";
import UploadImage from "../../shared/utils/UploadImage";
import dynamic from "next/dynamic";
import { writerData } from "@/public/data/dummyAuthorData";
import TextInputComponent from "@/components/shared/utils/TextInputComponent";
import InputLabel from "@/components/shared/utils/InputLabel";
import DynamicInput from "@/components/shared/utils/DynamicInput";

const RichEditor = dynamic(() => import("./rich-editor/index"), { ssr: false });

const FormArticle = () => {
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Ambil semua value tags
    const tags: string[] = [];
    for (let i = 0; i < 10; i++) {
      const tagsIndex = formData.get(`tags-${i}`);
      if (tagsIndex) {
        tags.push(tagsIndex.toString());
      }
    }

    // Ambil semua value keyTakeaway
    const keyTakeaway: string[] = [];
  };
  return (
    <form
      id="FormArticle"
      onSubmit={handleFormSubmit}
      className="w-100 d-flex flex-column mt-5 mt-md-0 p-3"
      style={{ maxWidth: 750, height: "fit-content", minHeight: 1000 }}>
      <UploadImage inputPlaceholder={`Untuk thumbnail disarankan untuk menggunakan gambar landscape`} />
      <div className="mt-4 col ">
        <TextInputComponent
          type="text"
          name="authorName"
          placeholder="Masukkan nama judul disini"
          inputClassName="text-input fs-4 m-2 w-100"
        />
        <div className=" m-2">
          <InputLabel
            htmlFor={"metadata"}
            description={"maksimal metadata yaitu 150-160 karakter (spasi termasuk)"}
            required={true}
            title={"Metadata"}
          />
          <input
            type="text"
            id="metadata"
            name="metadata"
            placeholder="Masukkan metadata disini"
            className="text-input fs-5 w-100"
          />
        </div>
        <div className=" m-2">
          <InputLabel
            htmlFor={"keyword"}
            description={"kata kunci bisa lebih dari satu. Gunakan koma ( , )"}
            required={true}
            title={"keyword"}
          />
          <input
            type="text"
            id="keyword"
            name="keyword"
            placeholder="Masukkan keyword disini"
            className="text-input fs-5 w-100"
          />
        </div>

        {/* Input author. Belum Jadi */}
        <div>
          <select
            name="authorName"
            id="authorName">
            {writerData.map((writer, index) => (
              <option
                value={writer.authorName}
                key={index}>
                {writer.authorName}
              </option>
            ))}
          </select>
        </div>
        <div className="row ">
          {/* Input Untuk Tags */}
          {/* Untuk ambil valuenya tags-0, tags-1, tags-2, dst */}
          <div className="mx-auto col-5 d-flex flex-column gap-3">
            <DynamicInput
              name="tags"
              maxValue={10}
              placeholder="Masukkan tags"
              required={true}
            />
          </div>
          <div className="mx-auto col-5 d-flex flex-column gap-3">
            {/* Input Untuk keyTakeaway */}
            {/* Untuk ambil valuenya keyTakeaway-0, keyTakeaway-1, keyTakeaway-2, dst */}
            <DynamicInput
              name="keyTakeaway"
              maxValue={10}
              placeholder="Masukkan key takeaway"
              required={true}
            />
          </div>
        </div>
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
