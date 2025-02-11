/* eslint-disable @next/next/no-img-element */
import ArticleLists from "@/components/index-page-component/ArticleLists";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SidebarProgramOffer from "@/components/shared/SidebarProgramOffer";
import SidebarSocial from "@/components/shared/SidebarSocial";
import SidebarWidget from "@/components/shared/SidebarWidgetUser";
import { blogArticleDummy } from "@/public/data/dummyData";
import logoDialogika from "@/public/assets/img/logo-square.png";

export default async function Home() {
  const articles = await blogArticleDummy;

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
              <SidebarSocial />
            </aside>

            <div className="col-lg-7 my-4 d-flex flex-column gap-4">
              <ArticleLists articles={articles} />
            </div>

            <aside className="col-lg-4 mt-4">
              {/* pageType index atau article */}
              <SidebarWidget
                imgPath={logoDialogika}
                author="Dialogika"
                pageType="index"
              />
              <SidebarProgramOffer />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
