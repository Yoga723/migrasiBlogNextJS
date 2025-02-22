"use client";
import React, { useEffect } from "react";
import { TextInput, DynamicInput, DynamicAuthorInput, LabelInput } from "@/components/forms";
import { BlogArticleProps, BlogAuthorProps } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthorsState } from "@/app/store/authorsSlice";
import { RootState } from "@/app/store";
import JoditRichEditor from "./JoditRichEditor";

interface FormArticleProps {
  authors: BlogAuthorProps[];
}

const FormArticle: React.FC<FormArticleProps> = ({ authors }) => {
  const availableAuthors = useSelector((state: RootState) => state.authors.authorsDetail);
  const dispatch = useDispatch();

  // Gunakan useEffect untuk meng-update store dengan data author yang diterima
  useEffect(() => {
    dispatch(updateAuthorsState(authors));
  }, [authors, dispatch]);

  // Fungsi untuk menangani submit form
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // payload ini akan digunakan untuk menampung semua data dari FormArticle
    const payload: Partial<BlogArticleProps> = {};

    // Set tgl publish
    payload.publishedAt = new Date().toISOString();

    // Thumbnail belum di SET
    payload.thumbnail =
      "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    // Ambil judul blog dan buat id dari judul tersebut
    const title = formData.get("title")?.toString();
    if (!title) return;
    payload.title = title;

    const id = title
      .toLowerCase() // Ubah ke huruf kecil
      .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter seperti simbol (!,@,:,;) dari judul untuk dijadikan id atau urlnya
      .trim() // Hilangkan spasi di awal dan akhir
      .replace(/\s+/g, "-"); // Ganti spasi dengan tanda dash
    payload.idArticle = id; // Contoh hasil: /rahasia-membuat-pembukaan...
    payload.canonical = `https://www.dialogika.co/blog/${id}`; // COntoh hasil : dialogika.co/blog/rahasia-membuat-pembukaan...

    // Ambil metadata untuk blog
    const metadata = formData.get("metadata")?.toString();
    if (!metadata) return;
    payload.metaData = metadata;

    // Ambil deskripsi untuk digunakan di card di blog/index
    const blogDescription = formData.get("blogDescription")?.toString();
    if (!blogDescription) return;
    payload.cardsDescription = blogDescription;

    // Ambil keyword untuk blog
    const keywords = formData.get("keyword")?.toString();
    if (!keywords) return;
    payload.keywords = keywords;

    // Ambil writer notes untuk blog
    const writernote = formData.get("writernote")?.toString();
    if (!writernote) return;
    payload.writerNote = writernote;

    // Ambil outbound title untuk blog
    const outboundTitle = formData.get("outboundTitle")?.toString();
    const outboundLink = formData.get("outboundLink")?.toString();
    if (outboundTitle && outboundLink && payload.outBoundLink) {
      payload.outBoundLink.title = outboundTitle || "Medium";
      payload.outBoundLink.link = outboundLink || "https://medium.com/dialogika";
    }

    // Ambil nilai input untuk tags (tags-0, tags-1, ..., tags-9)
    const tags: string[] = [];
    for (let i = 0; i < 10; i++) {
      const tagValue = formData.get(`tags-${i}`);
      if (tagValue) tags.push(tagValue.toString());
    }
    payload.tags = tags;

    // Ambil nilai input untuk keyTakeaway (keyTakeaway-0, keyTakeaway-1, ...)
    const keyTakeaway: string[] = [];
    for (let i = 0; i < 10; i++) {
      const takeawayValue = formData.get(`keyTakeaway-${i}`);
      if (takeawayValue) keyTakeaway.push(takeawayValue.toString());
    }
    payload.keyTakeaway = keyTakeaway;

    // Ambil value dari authors
    const selectedAuthors: string[] = [];
    const authorsPayload: BlogAuthorProps[] = [];
    for (let i = 0; i < 3; i++) {
      const selectedAuthorNames = formData.get(`authors-${i}`); // Ambil nama-nama author yang ada dari input
      if (selectedAuthorNames) selectedAuthors.push(selectedAuthorNames.toString());
    }
    selectedAuthors.forEach((author) => {
      const findAuhor = availableAuthors.find((item) => item.authorName == author);
      if (findAuhor) authorsPayload.push(findAuhor);
    });
    payload.authors = authorsPayload;

    // Ambil value dari text editor (menggunakan jodit editor)
    const content = formData.get("formEditor") as string;
    payload.content = content;

    try {
      event.preventDefault();
      console.log("Submitting Article ...");
      const res = await fetch("https://blog-yoga723s-projects.vercel.app/blog/api/admin/article/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Failed to create article: ${res.statusText}`);
      const data = await res.json();
      console.log("Article created:", data);
      // Tampilkan payload di console untuk debugging
      console.log("🚀 ~ handleFormSubmit ~ payload:", payload);
    } catch (error) {
      console.error("Error submitting article:", error);
    }
  };

  return (
    <form
      id="FormArticle"
      onSubmit={handleFormSubmit}
      className="w-100 d-flex flex-column mt-5 mt-md-0 p-3 "
      style={{ height: "auto" }}>
      {/* <input type="file" accept="jpeg, webp, png"/> */}
      {/* Input untuk judul blog */}
      <TextInput
        type="text"
        name="title"
        labelTitle="Judul"
        required={true}
        placeholder="Masukkan judul blog disini"
        inputClassName="text-input fs-4 w-100"
      />

      {/* Input untuk metadata, deskripsi, keyword, writer's note */}
      <TextInput
        type="text"
        name="metadata"
        labelTitle="Metadata"
        required={true}
        description="Metadata antara 150-160 karakter. Spasi termasuk"
        placeholder="Masukkan metadata blog disini"
        divClassName="mt-4"
        inputClassName="text-input fs-6 w-100"
      />
      <TextInput
        type="text"
        name="blogDescription"
        labelTitle="Deskripsi Blog"
        required={true}
        description="Deskripsi blog akan digunakan di halaman utama blog"
        placeholder="Masukkan deskripsi blog disini"
        divClassName="mt-4"
        inputClassName="text-input fs-6 w-100"
      />
      <TextInput
        type="text"
        name="keyword"
        labelTitle="Keyword Blog"
        required={true}
        description="Keyword bisa lebih dari 1. Gunakan koma (,)"
        placeholder="Masukkan keyword disini"
        divClassName="mt-4"
        inputClassName="text-input fs-6 w-100"
      />
      <TextInput
        type="text"
        name="writernote"
        labelTitle="Writer's Note"
        required={true}
        description="Menjelaskan blog ini ditujukan untuk siapa. Mahasiswa?, Orang tua?, Guru?, dll "
        placeholder="Masukkan writer's note disini"
        divClassName="mt-4"
        inputClassName="text-input fs-6 w-100"
      />
      <div className="d-inline-flex flex-row gap-4 my-4 overflow-hidden">
        <TextInput
          type="text"
          name="outboundTitle"
          labelTitle="Outbound Title"
          description="Link yang mengarah ke blog se-topik yang diluar dari dialogika. Misal blog dari medium"
          placeholder="Stoicism: Kunci Kebijaksanaan dan Hidup Tenang"
          divClassName="col-5 col-md-6"
          inputClassName="text-input fs-6 w-100"
        />
        <TextInput
          type="text"
          name="outboundLink"
          labelTitle="Outbound Link"
          placeholder="https://medium.com/dialogika"
          divClassName="col-5 col-md-6"
          inputClassName="text-input fs-6 w-100"
        />
      </div>

      {/* Input untuk Tags dan Key Takeaway */}
      <div className="d-inline-flex flex-column flex-md-row justify-content-md-around gap-4 my-4">
        <div className="d-inline-flex justify-content-start align-items-start flex-column gap-3">
          <LabelInput
            htmlFor={"tags"}
            // description={description}
            required={true}
            title={"Tags"}
          />
          <DynamicInput
            name="tags"
            maxInputs={10}
            placeholder="tags"
          />
        </div>

        <div className="d-inline-flex justify-content-start align-items-start flex-column gap-3">
          <LabelInput
            htmlFor={"keyTakeaway"}
            description={"Maksimal 6 key takaway"}
            required={true}
            title={"Key Takeaway"}
          />
          <DynamicInput
            name="keyTakeaway"
            maxInputs={6}
            placeholder="Key Takeaway"
          />
        </div>
      </div>

      {/* Input untuk Author */}
      <div className="row mb-5">
        <DynamicAuthorInput
          maxInputs={3}
          name="authors"
          description="Penulis Article Blog"
          required={true}
        />
      </div>
      <JoditRichEditor />

      <button
        type="submit"
        className="blue-dialogika-btn mt-4 align-self-end">
        Publish Article
      </button>
    </form>
  );
};

export default FormArticle;
