import FormArticle from "@/components/article/editor/FormArticle";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import React from "react";
import "./style.css";
import { getStaticAuthorsProps } from "@/lib/getStaticProps";
import { BlogAuthorProps } from "@/types";
import ErrorPage from "@/components/layout/ErrorPage";
import { authorData } from "@/public/data/authorData";

const page = async () => {
  let authors: BlogAuthorProps[] = [];
  try {
    // const { props } = await getStaticAuthorsProps();
    // authors = props.authors;
    authors = authorData;
  } catch (error) {
    console.error("Error fetching authors:", error);
    // Return a fallback UI for errors
    return <ErrorPage message="Gagal mengambil author dari database. Silakan coba lagi nanti." />;
  }

  return (
    <>
      <Breadcrumbs
        title="Create New Article"
        breadcrumbs={[
          { title: "Home", link: "https://www.dialogika.co" },
          { title: "Blog", link: "../../../blog" },
          { title: "Admin", link: "../../admin" },
          { title: "Create Article", link: "../new-story" },
        ]}
      />
      <section className="section container">
        <FormArticle authors={authors} />
      </section>
    </>
  );
};

export default page;
