import FormArticle from "@/components/admin-page-component/create-article-page-component/FormArticle";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
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
