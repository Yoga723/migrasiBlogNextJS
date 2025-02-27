"use client";
import { BlogArticleProps } from "@/types";
import { formatDate } from "@/components/utils/date";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface articlesProps {
  articles: BlogArticleProps[];
}

const ArticleLists = ({ articles }: articlesProps) => {
  const [visibleArticles, setVisibleArticles] = useState<number>(3);

  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <>
      {articles.slice(0, visibleArticles).map((article, index) => (
        <article
          className="article"
          key={index}>
          <div className="post-img">
            <Image
              src={article.thumbnail}
              alt={article.keywords}
              width={745}
              height={400}
              className="img-fluid w-100 object-fit-cover"
            />
          </div>

          <h1 className="title">
            <Link
              href={`read/${article.idArticle}`}
              target="_blank">
              {article.title}
            </Link>
          </h1>

          <div className="meta-top my-4">
            <ul>
              {article.authors.map((author, index) => (
                <li
                  className="d-flex align-items-center"
                  key={index}>
                  <i className="bi bi-person"></i>
                  <Link
                    href={`read/${article.idArticle}`}
                    target="_blank">
                    {author.authorName}
                  </Link>
                </li>
              ))}
              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <Link href={`read/${article.idArticle}`}>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </Link>
              </li>
            </ul>
          </div>

          <div className="content">
            <p>{article.cardsDescription}</p>
            <div className="d-flex justify-content-end">
              <Link
                href={`read/${article.idArticle}`}
                target="_blank"
                className="btn appointment-btn">
                Read More
              </Link>
            </div>
          </div>

          <br />

          <div className="meta-bottom">
            <i className="bi bi-folder"></i>
            <ul className="cats">
              <li>
                <Link href={`read/${article.idArticle}`}>Tips</Link>
              </li>
            </ul>
          </div>
        </article>
      ))}

      {visibleArticles < articles.length && (
        <div className="text-center mt-4">
          <button
            className="appointment-btn"
            id="show-more-btn"
            style={{ border: "none" }}
            onClick={handleShowMore}>
            More Article
          </button>
        </div>
      )}
    </>
  );
};

export default ArticleLists;
