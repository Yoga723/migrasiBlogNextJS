import React from "react";
import "./style.css";
import { generatePaths } from "@/lib/generateStaticPaths";
import { blogArticleDummy, BlogArticleProps } from "@/public/data/dummyData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SidebarSocial from "@/components/shared/SidebarSocial";
import SidebarWidget from "@/components/shared/SidebarWidgetUser";
import SidebarProgramOffer from "@/components/shared/SidebarProgramOffer";
import ArticleDetails from "@/components/article-page-component/ArticleDetails";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/date";

export default async function Page({ params }: any) {
  const { id } = await params;
  const blogArticle = blogArticleDummy.find((item: BlogArticleProps) => item.id.toString() === id);

  const categoriesList = ["Confidence", "Interview", "Productivity", "Introvert", "Communication", "Presentation"];

  // Tampilkan error jika blogArticle tidak ada
  if (!blogArticle) {
    return (
      <>
        <Breadcrumbs
          title="Artikel"
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

  // Tampilkan bagian dibawah ini jika blogArticle ada
  return (
    <>
      <Breadcrumbs
        title={blogArticle.title}
        breadcrumbs={[
          { title: "Home", link: "https://www.dialogika.co" },
          { title: "Blog", link: "../" },
          { title: blogArticle.keywords, link: "../blog" },
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
              <SidebarSocial />
            </aside>

            {/* Section Konten Blog */}
            <div className="col-lg-7 mt-3">
              <article className="article p-0">
                <div
                  className="post-img position-relative m-0"
                  style={{ borderRadius: 10 }}>
                  <Image
                    src="https://i.pinimg.com/736x/72/ed/d6/72edd6d3271bf67af20ad45d7a9e7cf8.jpg"
                    alt="Kesalahan Komunikasi"
                    className="img-fluid"
                    width={800}
                    height={490}
                  />
                </div>

                <h1 className="title mt-0 px-4 mt-4">{blogArticle.title}</h1>
                <div className="meta-top px-4 py-1">
                  <ul>
                    {/* List author yang menulis artikel */}
                    {blogArticle.authors.map((author, index) => (
                      <li
                        className="d-flex align-items-center"
                        key={index}>
                        <i className="bi bi-person"></i>
                        <Link
                          href={`${blogArticle.id}`}
                          target="_blank">
                          {author.authorName}
                        </Link>
                      </li>
                    ))}
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href={`${blogArticle.id}`}>
                        <time dateTime={`${blogArticle.publishedAt}`}>{formatDate(blogArticle.publishedAt)}</time>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="content p-4">{blogArticle.content}</div>
                <div className="meta-bottom d-flex gap-2 align-items-center px-4 py-3">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li>
                      <a
                        target="_blank"
                        href={`${blogArticle.outBoundLink?.link}`}>
                        {blogArticle.outBoundLink?.title}
                      </a>
                    </li>
                  </ul>
                </div>
              </article>

              <ArticleDetails {...blogArticle} />
            </div>

            {/* Section Blog Authors */}
            <aside className="col-lg-4 mt-3 gap-4 flex-column d-flex">
              {blogArticle.authors.map((item, index) => (
                <SidebarWidget
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
                    {blogArticle.tags?.map((item, index) => (
                      <li key={index}>
                        <a>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <SidebarProgramOffer />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

// Dynamic page generation during build
export async function generateStaticParams() {
  const paths = generatePaths(blogArticleDummy, "id");
  console.log("Generated paths: ", paths);
  return paths.filter((path) => !path.id.endsWith(".js.map"));
}
