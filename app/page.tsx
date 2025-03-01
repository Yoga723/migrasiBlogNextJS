/* eslint-disable @next/next/no-img-element */
import ArticleLists from "@/components/article/ArticleLists";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ProgramOffer, Social, Widget } from "@/components/sidebars";
import logoDialogika from "@/public/assets/img/logo-square.png";
import { BlogArticleProps } from "@/types";

export default async function Home() {
  try {
    console.log("Fetching Article ...");
    const getArticle = await fetch("https://blog-admin-dialogikas-projects.vercel.app/blog/api/admin/article/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!getArticle.ok) {
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
            <h1 className="text-black mt-5">Error: Cant connect to database !</h1>
            <h2 className="text-black mt-5">Please try again</h2>
          </section>
        </>
      );
    }
    const response = await getArticle.json();
    const articles: BlogArticleProps[] = response.data;
    return (
      <>
        <Breadcrumbs
          title="Article"
          breadcrumbs={[
            { title: "Home", link: "https://www.dialogika.co" },
            { title: "Blog", link: "../blog" },
          ]}
        />

        <section
          id="blog-details"
          className="blog-details section">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="row">
              <aside className="col-lg-1 mt-4">
                <Social />
              </aside>

              <div className="col-lg-7 my-4 d-flex flex-column gap-4">
                <ArticleLists articles={articles} />
              </div>

              <aside className="col-lg-4 mt-4">
                {/* pageType index atau article */}
                <Widget
                  imgPath={logoDialogika}
                  author="Dialogika"
                  pageType="index"
                />
                <ProgramOffer />
              </aside>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error: any) {
    console.error("Error generating metadata:", error);
  }
}
