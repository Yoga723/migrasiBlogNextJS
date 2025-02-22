import React from "react";
import "./style.css";
import { generatePaths } from "@/lib/generatePaths";
import { BlogArticleProps } from "@/types";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Social, ProgramOffer, Widget } from "@/components/sidebars";
import ArticleDetails from "@/components/article/ArticleDetails";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/components/utils/date";
import { Metadata } from "next";
import { basePath } from "@/next.config";

// Global metadata
export const metadata: Metadata = {
  title: "Cara menggunakan .... - Kursus Public Speaking",
  description:
    "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
  keywords: "Blog Dialogika, Blog, blog, dialogika",
  authors: [{ name: "Dialogika Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Dialogika Blog - Kursus Public Speaking",
    description:
      "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
    url: "https://www.dialogika.co/blog/",
    siteName: "Dialogika | Kelas Public Speaking",
    images: [{ url: "https://www.dialogika.co/assets/img/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dialogika_co",
    title: "Dialogika Blog - Kursus Public Speaking",
    description:
      "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
    images: ["https://www.dialogika.co/assets/img/logo.webp"],
  },
  icons: {
    icon: `${basePath}/assets/img/favicon.webp`,
    apple: `${basePath}/assets/img/apple-touch-icon.webp`,
  },
};
type tParams = Promise<{ idArticle: string[] }>;
export default async function Page(props: { params: tParams }) {
  const { idArticle } = await props.params;

  try {
    console.log("Fetching Article ...");
    const res = await fetch(
      `https://blog-yoga723s-projects.vercel.app/blog/api/admin/article/?idArticle=${idArticle}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // Tampilkan error jika blogArticle tidak ada
    if (!res.ok) {
      return (
        <>
          <Breadcrumbs
            title="Article"
            breadcrumbs={[
              { title: "Home", link: "https://www.dialogika.co" },
              { title: "Blog", link: "../blog" },
            ]}
          />
          <section className="section min-vh-100 pt-5">
            <h1 className="text-black mt-5">Error: blogArticle Not Found!</h1>
          </section>
        </>
      );
    }
    const response = await res.json();
    const article: BlogArticleProps = response.data; // Respon dari server ke mongoDB adalah artikel blog/document yang tinggal digunakan
    const categoriesList = ["Confidence", "Interview", "Productivity", "Introvert", "Communication", "Presentation"];

    // Tampilkan bagian dibawah ini jika blogArticle ada
    return (
      <>
        <Breadcrumbs
          title={article.title}
          breadcrumbs={[
            { title: "Home", link: "https://www.dialogika.co" },
            { title: "Blog", link: "../" },
            { title: article.keywords, link: "../blog" },
          ]}
        />
        <section
          id="blog-details"
          className="blog-details my-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="row">
              {/* Section Sidebar Social Media */}
              <aside className="col-lg-1 mt-3">
                <Social />
              </aside>

              {/* Section Konten Blog */}
              <div className="col-lg-7 mt-3">
                <article className="article p-0">
                  <div
                    className="post-img position-relative m-0"
                    style={{ borderRadius: 10 }}>
                    <Image
                      src="https://res.cloudinary.com/daqshfnz3/image/upload/f_auto,q_auto/v1/blog-thumbnails/tnuix6ooprffu2v187ur"
                      alt="Kesalahan Komunikasi"
                      className="img-fluid"
                      width={800}
                      height={490}
                    />
                  </div>

                  <h1 className="title mt-0 px-4 mt-4">{article.title}</h1>
                  <div className="meta-top px-4 py-1">
                    <ul>
                      {/* List author yang menulis article */}
                      {article.authors.map((author, index) => (
                        <li
                          className="d-flex align-items-center"
                          key={index}>
                          <i className="bi bi-person"></i>
                          <Link
                            href={`${article.idArticle}`}
                            target="_blank">
                            {author.authorName.toString()}
                          </Link>
                        </li>
                      ))}
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>
                        <Link href={`${article.idArticle}`}>
                          <time dateTime={`${article.publishedAt.toString()}`}>
                            {formatDate(article.publishedAt.toString())}
                          </time>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Isi konten dari artikel blog */}
                  <div
                    className="content p-4"
                    dangerouslySetInnerHTML={{ __html: article.content }}></div>
                  <div className="meta-bottom d-flex gap-2 align-items-center px-4 py-3">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li>
                        <a
                          target="_blank"
                          href={`${article.outBoundLink?.link}`}>
                          {article.outBoundLink?.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <ArticleDetails {...article} />
              </div>

              {/* Section Blog Authors */}
              <aside className="col-lg-4 mt-3 gap-4 flex-column d-flex">
                {article.authors.map((item, index) => (
                  <Widget
                    key={index}
                    author={item.authorName}
                    pageType={"article"}
                    imgPath={item.imgPath}
                  />
                ))}

                {/* Section Categories dan Tags */}
                <section className="sidebar mt-2 order-2 order-md-2">
                  <div className="sidebar-item categories mt-4">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      {categoriesList.map((category, index) => (
                        <li key={index}>
                          <a>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sidebar-item tags mt-4">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="mt-3">
                      {article.tags?.map((item, index) => (
                        <li key={index}>
                          <a>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <ProgramOffer />
              </aside>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
  }
}

// Dynamic page generation during build
export async function generateStaticParams() {
  try {
    const res = await fetch("https://blog-yoga723s-projects.vercel.app/blog/api/admin/article/build/");
    if (!res.ok) {
      throw new Error("Failed to fetch article IDs for static generation");
    }
    const articles = await res.json();
    return articles.map((article: any) => ({
      idArticle: article.idArticle.toString(),
    }));
  } catch (error) {
    console.error("Error fetching article IDs:", error);
    // Fallback: if you have a known set of IDs or simply return an empty list:
    return [];
  }
}

