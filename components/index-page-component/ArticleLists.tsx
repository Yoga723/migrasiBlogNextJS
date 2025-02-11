"use client";
import { BlogArticleProps } from "@/public/data/dummyData";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface articlesProps {
  articles: BlogArticleProps[];
}

const ArticleLists = ({ articles }: articlesProps) => {
  return (
    <>
      {articles.map((article, index) => (
        <article
          className="article"
          key={index}>
          <div className="post-img">
            <Image
              src={`${article.thumbnail}`}
              alt={`${article.keywords}`}
              width={745}
              height={400}
              className="img-fluid w-100 object-fit-cover"
            />
          </div>

          <h1 className="title">
            <Link
              href={`${article.id}`}
              target="_blank">
              {article.title}
            </Link>
          </h1>

          <div className="meta-top">
            <ul>
              {/* List author yang menulis artikel */}
              {article.authors.map((author, index) => (
                <li
                  className="d-flex align-items-center"
                  key={index}>
                  <i className="bi bi-person"></i>
                  <Link
                    href={`${article.id}`}
                    target="_blank">
                    {author.authorName}
                  </Link>
                </li>
              ))}

              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <Link href={`${article.id}`}>
                  <time dateTime={`${article.publishedAt}`}>{formatDate(article.publishedAt)}</time>
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <p>{article.cardsDescription}</p>

            <div className="d-flex justify-content-end">
              <Link
                href={`${article.id}`}
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
                <Link href={`${article.id}`}>Tips</Link>
              </li>
            </ul>
          </div>
        </article>
      ))}

      <div className="text-center mt-4">
        <button
          className="appointment-btn"
          id="show-more-btn"
          style={{ border: "none" }}>
          More Article
        </button>
      </div>
    </>
  );
};

export default ArticleLists;
