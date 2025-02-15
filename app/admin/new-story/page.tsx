import FormArticle from "@/components/article/editor/FormArticle";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import React from "react";
import "./style.css";

const page = () => {
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
        <FormArticle />
      </section>
    </>
  );
};

export default page;
