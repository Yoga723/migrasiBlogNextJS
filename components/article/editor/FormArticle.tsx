"use client";
import React from "react";
import { TextInput, DynamicInput, DynamicAuthorInput } from "@/components/forms";
import dynamic from "next/dynamic";
import { BlogArticleProps } from "@/types";
import { store, tambahA } from "@/app/store";

const RichEditor = dynamic(() => import("./RichEditor"), { ssr: false });

const FormArticle = () => {
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload: Partial<BlogArticleProps> = {}; // Semua value dari input akan dimasukkan ke sini

    // Ambil judul blog dan buat id stringnya
    const title = formData.get(`title`)?.toString();
    if (!title) return;
    payload.title = title;

    const id = title
      .toString()
      .toLowerCase()
      // Remove any character that is not a letter, number, whitespace, or dash
      .replace(/[^a-z0-9\s-]/g, "")
      // Replace one or more whitespace characters with a single dash
      .trim()
      .replace(/\s+/g, "-");
    payload.id = id; // Contoh hasil : rahasia-membuat-pembukaan...

    // Ambil semua value input tags
    const tags: string[] = [];
    for (let i = 0; i < 10; i++) {
      const tagsIndex = formData.get(`tags-${i}`);
      if (tagsIndex) {
        tags.push(tagsIndex.toString());
      }
    }
    payload.tags = tags;

    // Ambil semua value input keyTakeaway
    const keyTakeaway: string[] = [];
    for (let i = 0; i < 10; i++) {
      const keyTakeawayIndex = formData.get(`keyTakeaway-${i}`);
      if (keyTakeawayIndex) {
        keyTakeaway.push(keyTakeawayIndex.toString());
      }
    }
    payload.keyTakeaway = keyTakeaway;

    console.log("🚀 ~ handleFormSubmit ~ keyTakeaway:", keyTakeaway);
    console.log("🚀 ~ handleFormSubmit ~ payload:", payload);
  };
  return (
    <form
      id="FormArticle"
      onSubmit={handleFormSubmit}
      className="w-100 d-flex flex-column mt-5 mt-md-0 p-3"
      style={{ maxWidth: 750, height: "fit-content", minHeight: 1000 }}>
      <button
        type="button"
        onClick={() => store.dispatch(tambahA("testString"))}>
        Test Redux Counter
      </button>
      {/* <UploadImage inputPlaceholder={`Untuk thumbnail disarankan untuk menggunakan gambar landscape`} /> */}
      <div className="mt-4 d-flex flex-column gap-5">
        <TextInput
          type="text"
          name="title"
          labelTitle="Judul"
          required={true}
          placeholder="Masukkan judul blog disini"
          inputClassName="text-input fs-5 w-100"
        />
        <TextInput
          type="text"
          name="metadata"
          labelTitle="Metadata"
          required={true}
          description="Metadata antara 150-160 karakter. Spasi termasuk"
          placeholder="Masukkan metadata blog disini"
          inputClassName="text-input fs-6 mt-2 w-100"
        />
        <TextInput
          type="text"
          name="blogDescription"
          labelTitle="Deskripsi Blog"
          required={true}
          description="Deskripsi blog akan digunakan di halaman utama blog"
          placeholder="Masukkan deskripsi blog disini"
          inputClassName="text-input fs-6 mt-2 w-100"
        />
        <TextInput
          type="text"
          name="keyword"
          labelTitle="Keyword Blog"
          required={true}
          description="Keyword bisa lebih dari 1. Gunakan koma (,)"
          placeholder="Masukkan keyword disini"
          inputClassName="text-input fs-6 mt-2 w-100"
        />
        <TextInput
          type="text"
          name="writernote"
          labelTitle="Writer's Note"
          required={true}
          description="Menjelaskan blog ini ditujukan untuk siapa. Mahasiswa?, Orang tua?, Guru?, dll "
          placeholder="Masukkan writer's note disini"
          inputClassName="text-input fs-6 mt-2 w-100"
        />

        <div className="row mb-4">
          {/* Input Untuk Tags */}
          {/* Untuk ambil valuenya tags-0, tags-1, tags-2, dst */}
          <div className="mx-auto col-6 d-flex flex-column gap-3">
            <DynamicInput
              name="tags"
              maxInputs={10}
              placeholder="Masukkan tags"
              required={true}
            />
          </div>
          <div className="mx-auto col-6 d-flex flex-column gap-3">
            {/* Input Untuk keyTakeaway */}
            {/* Untuk ambil valuenya keyTakeaway-0, keyTakeaway-1, keyTakeaway-2, dst */}
            <DynamicInput
              name="keyTakeaway"
              maxInputs={6}
              description="Maksimal 6"
              placeholder="Masukkan key takeaway"
              required={true}
            />
          </div>
        </div>

        {/* Input Author */}
        <div className="row mb-5">
          <DynamicAuthorInput
            maxInputs={3}
            name="authors"
            description="Penulis Artikel Blog"
            required={true}
          />
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
