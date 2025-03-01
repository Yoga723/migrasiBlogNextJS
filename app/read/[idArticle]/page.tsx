import React from "react";
import "./style.css";
import { BlogArticleProps } from "@/types";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Social, ProgramOffer, Widget } from "@/components/sidebars";
import ArticleDetails from "@/components/article/ArticleDetails";
import star from "@/public/assets/img/next.png";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/components/utils/date";
import { Metadata } from "next";
import Script from "next/script";

type pageParams = Promise<{ idArticle: string[] }>;
export default async function Page(props: { params: pageParams }) {
  const { idArticle } = await props.params;
  const categoriesList = ["Confidence", "Interview", "Productivity", "Introvert", "Communication", "Presentation"];

  try {
    const res = await fetch(
      `https://blog-admin-dialogikas-projects.vercel.app/blog/api/admin/article/?idArticle=${idArticle}`,
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
    // Respon dari server ke mongoDB adalah artikel blog/document yang tinggal digunakan
    const response = await res.json();
    const article: BlogArticleProps = response.data;

    // Set metadata untuk JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaData || "Read our latest article on Dialogika Blog.",
      author: {
        "@type": "Person",
        name: article.authors?.[0]?.authorName || "Dialogika Team",
      },
      datePublished: article.publishedAt,
      image: article.thumbnail || "https://www.dialogika.co/assets/img/logo.webp",
      publisher: {
        "@type": "Organization",
        name: "Dialogika",
        logo: {
          "@type": "ImageObject",
          url: "https://www.dialogika.co/assets/img/logo.webp",
        },
      },
    };

    // Tampilkan bagian dibawah ini jika blogArticle ada
    return (
      <>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
                      src={article.thumbnail}
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

          <a
            href="#tagging-up"
            className="back-to-top d-flex align-items-center justify-content-center active">
            <Image
              src={`${star}`}
              width={10}
              height={10}
              alt=""
            />
          </a>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
  }
}

// Automatically generate halaman html sesuai dengan jumlah artikel yang ada di database saat proses build di github pages
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://blog-admin-dialogikas-projects.vercel.app/blog/api/admin/article/build/generateStaticParams/"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch article IDs for static generation");
    }
    const articles = await res.json();
    if (!articles || articles.length === 0) {
      throw new Error("No article IDs found for static generation");
    }
    return articles.map((article: any) => ({
      idArticle: article.idArticle.toString(),
    }));
  } catch (error) {
    console.error("Error fetching article IDs:", error);

    return [
      { idArticle: "default-article-id" }, // Replace with a known fallback ID if appropriate
    ];
  }
}

// Generate dynamic metadata for each article page.
export async function generateMetadata(props: { params: pageParams }): Promise<Metadata> {
  const { idArticle } = await props.params;
  try {
    const response = await fetch(
      `https://blog-admin-dialogikas-projects.vercel.app/blog/api/admin/article/build/generateMetaData/?idArticle=${idArticle}`,
      { method: "GET" }
    );
    if (!response.ok) {
      return {
        title: "Article Not Found",
        description: `No article found with id: ${idArticle}`,
      };
    }
    const result = await response.json();
    const article: BlogArticleProps = result.data;
    if (!article) {
      return {
        title: "Article Not Found",
        description: `No article found with id: ${idArticle}`,
      };
    }
    return {
      title: article.title,
      description: article.metaData || "Read our latest article on Dialogika Blog.",
      keywords: article.keywords || "Public Speaking, Dialogika, Berbicara Didepan Umum",
      authors: [{ name: article.authors?.[0]?.authorName || "Dialogika Team" }],
      openGraph: {
        title: article.title,
        description: article.metaData || "Read our latest article on Dialogika Blog.",
        url: `https://www.dialogika.co/blog/read/${article.idArticle}`,
        siteName: "Dialogika | Kelas Public Speaking",
        images: [
          {
            url: article.thumbnail || "https://www.dialogika.co/assets/img/logo.webp",
            alt: article.title,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        site: "@dialogika_co",
        title: article.title,
        description: article.metaData || "Read our latest article on Dialogika Blog.",
        images: [article.thumbnail || "https://www.dialogika.co/assets/img/logo.webp"],
      },
      icons: {
        icon: `https://www.dialogika.co/assets/img/favicon.webp`,
        apple: `https://www.dialogika.co/assets/img/apple-touch-icon.webp`,
      },
    };
  } catch (error: any) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "Error fetching article metadata.",
    };
  }
}
