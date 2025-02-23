"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
interface imageUrlProps {
  inputPlaceholder: string;
}

const ImageUrl = ({ inputPlaceholder }: imageUrlProps) => {
  const [urlInput, setUrlInput] = useState<string>("");
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (urlInput.trim() !== "") {
      setIsLoading(true);
      setSubmittedUrl(urlInput);
    }
  };

  const handleRemoveImg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubmittedUrl(null);
    setUrlInput("");
  };
  return (
    <div
      id="upload-thumbnail-container"
      className="overflow-hidden mt-5 mt-md-0 rounded position-relative d-flex flex-column justify-content-center align-items-center gap-4"
      style={{ minHeight: 250, width: "100%", height: 300 }}>
      {submittedUrl ? (
        <div className="position-relative w-100 h-100">
          {isLoading && (
            <div className="loading-overlay position-absolute top-50 start-50 translate-middle">
              <p>Loading...</p>
            </div>
          )}
          <Image
            src={submittedUrl}
            alt="Preview image"
            width={740}
            height={250}
            className="img-fluid object-cover z-10"
            onLoadingComplete={() => setIsLoading(false)}
          />
          <button
            type="button"
            onClick={handleRemoveImg}
            className="btn position-absolute top-0 end-0 d-block z-20">
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#0F5CA2", width: 40, height: 40 }}
            />
          </button>
        </div>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faImage}
            style={{ color: "#0f5da3", width: 50, height: 50 }}
          />
          <h6 className="text-center">{inputPlaceholder}</h6>
          <div className="d-flex gap-4 w-100 justify-content-center align-items-center">
            {/* <label
              className="border rounded d-flex gap-4 justify-content-center align-items-center my-auto "
              style={{ cursor: "pointer" }}>
              <FontAwesomeIcon
                icon={faUpload}
                style={{ color: "#0f5da3", width: 15, height: 15 }}
              />
              <p className="my-auto w-fit">Upload Image From Computer</p>
              <input
                name="thumbnail-image"
                accept="image/*"
                type="file"
                value={imgUrl || ""}
                className="visually-hidden"
              />
            </label> */}
            <input
              name="thumbnail-image"
              type="text"
              className="my-auto form-control"
              placeholder="Masukkan URL Gambar thumbnail..."
              value={urlInput}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={handleSubmit}>
              Submit Image
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUrl;
