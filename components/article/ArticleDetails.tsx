"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { faCircleChevronRight, faFeather } from "@fortawesome/free-solid-svg-icons";
import { BlogArticleProps } from "@/types";

const ArticleDetails = ({ authors, publishedAt, writerNote }: BlogArticleProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", // "long" displays full month name; use "short" if desired
    day: "numeric",
  });

  return (
    <>
      <div className="blog-details-area clearfix">
        <div className="blog-details-bottom">
          <div className="row align-items-baseline">
            <div className="col-xl-6 col-md-7">
              <div className="blog-details-tags">
                <ul className="list-wrap mb-0">
                  <li>
                    <a onClick={() => false}>Help Us</a>
                  </li>
                  <li>
                    <a onClick={() => false}>To</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-5">
              <div className="blog-details-share">
                <h6 className="share-title">Rate This Article:</h6>
                <form
                  className="rate"
                  id="rate-us"
                  onClick={() => {}}>
                  <input
                    type="radio"
                    id="star5"
                    name="Rating"
                    readOnly
                    value="5"
                  />
                  <label
                    htmlFor="star5"
                    title="text">
                    5 stars
                  </label>
                  <input
                    readOnly
                    type="radio"
                    id="star4"
                    name="Rating"
                    value="4"
                  />
                  <label
                    htmlFor="star4"
                    title="text">
                    4 stars
                  </label>
                  <input
                    readOnly
                    type="radio"
                    id="star3"
                    name="Rating"
                    value="3"
                  />
                  <label
                    htmlFor="star3"
                    title="text">
                    3 stars
                  </label>
                  <input
                    readOnly
                    type="radio"
                    id="star2"
                    name="Rating"
                    value="2"
                  />
                  <label
                    htmlFor="star2"
                    title="text">
                    2 stars
                  </label>
                  <input
                    readOnly
                    type="radio"
                    id="star1"
                    name="Rating"
                    value="1"
                  />
                  <label
                    htmlFor="star1"
                    title="text">
                    1 star
                  </label>
                  <input
                    readOnly
                    name="Keyword"
                    className="d-none"
                    value="Pentingnya Mempelajari Dosen Penguji Sebelum Sidang Skripsi"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {authors.map((author, index) => (
        <div
          key={index}
          className="blog-author d-md-flex align-items-center ">
          <Image
            src={author.imgPath}
            height={120}
            width={120}
            className="rounded-circle flex-shrink-0 mt-4"
            alt={`Gambar kak ${author.authorName}`}
            loading="lazy"
          />
          <div className="mt-4">
            <h4>{author.authorName}</h4>
            <div className="social-links">
              <FontAwesomeIcon
                icon={faFeather}
                style={{ color: "#1E3050", marginRight: 5 }}
              />
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                style={{ color: "#1E3050", marginRight: 5 }}
              />
              About <b>Writer</b>
            </div>
            <p>{author.quotes}</p>
          </div>
        </div>
      ))}
      <div className="comments">
        <h4 className="comments-count">Writer Notes</h4>

        <div
          id="comment-2"
          className="comment">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row gap-4 comment-img mb-4">
              {authors.map((author, index) => (
                <div
                  key={index}
                  className="d-flex gap-3">
                  <Image
                    src={`${author.imgPath}`}
                    alt={author.authorName}
                    loading="lazy"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <a>{author.authorName}</a>
                </div>
              ))}
            </div>
            <div>
              <h5>
                <a className="p-0">
                  <i className="bi bi-card-heading me-2"></i>
                  Notes
                </a>
              </h5>
              <time dateTime={publishedAt}>{formattedDate}</time>
              <p>{writerNote}</p>
            </div>
          </div>
        </div>

        {/* <div className="reply-form">
  <h4>Asking About Us</h4>
  <p>Jika kamu penasaran mengenai program, kelas, in house, hingga internship dan career di Dialogika
    silahkan masukkan pertanyaan dibawah ini</p>
  <form id="myForm" role="form">
    <div className="row">

      <div className="col-md-12 form-group">
        <input type="text" name="Name" className="form-control" placeholder="Nama Lengkap*" id="names"
          required />
      </div>

      <div className="col-md-6 form-group">
        <input type="tel" className="form-control" name="Whatsapp" placeholder="Whatsapp*" required />
      </div>

      <div className="col-md-6 form-group">
        <input type="text" className="form-control" name="Location" placeholder="Domisili*" id="domisilis"
          required />
      </div>

      <select className="d-none" name="Timestamp">
        <option id="timestamp"></option>
      </select>
      <input className="d-none" name="Program" value="Pentingnya Mempelajari Dosen Penguji Sebelum Sidang Skripsi" />

      <div className="col-md-12">
        <textarea className="form-control" name="Ket" id="messages" rows={17}
          placeholder="Yang ingin ditanyakan?"></textarea>
      </div>

      <div className="col-md-12 text-center">
        <button type="submit" onClick='SubForm()' className="btn-primary send_contact">Send Whatsapp</button>
      </div>

    </div>
  </form>

</div>  */}

        <div className="reply-form">
          <h4>Komentar</h4>
          <div id="disqus_thread"></div>
        </div>
      </div>
      {/* disqus  */}
      {/* <Script src="./asset/js/disqus.js"></Script> */}
      <noscript>
        Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </>
  );
};

export default ArticleDetails;
