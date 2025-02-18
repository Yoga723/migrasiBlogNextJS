import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { basePath } from "@/next.config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cara menggunakan .... - Kursus Public Speaking",
  description:
    "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
  keywords: "Blog Dialogika, Blog, blog, dialogika",
  authors: [{ name: "Dialogika Team" }],

  icons: {
    icon: `${basePath}/assets/img/favicon.webp`,
    apple: `${basePath}/assets/img/apple-touch-icon.webp`,
  },
};

const page = () => {
  return (
    <div className="">
      <Breadcrumbs
        title="Admin Dashboard"
        breadcrumbs={[
          { title: "Home", link: "https://www.dialogika.co" },
          { title: "Blog", link: "../" },
          { title: "Admin", link: "../admin" },
        ]}
      />
      page admin
    </div>
  );
};

export default page;
