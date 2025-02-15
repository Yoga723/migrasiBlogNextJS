"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faImage, faUpload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// w-100 rounded my-3 position-relative d-flex flex-column justify-content-center align-items-center gap-4

interface UploadImageProps {
  inputPlaceholder: string;
}

const UploadImage = ({ inputPlaceholder }: UploadImageProps) => {
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  // const [isLoading, setIsLoading] = useState(false);

  const handleUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgUrl(event.target.value);
    console.log("ini imgUrl : ", imgUrl);
  };
  const handleRemoveImg = async (event: any) => {
    event.preventDefault();
    setImgUrl(null);
  };

  // useEffect(() => {}, [imgUrl]);

  return (
    <div
      id="upload-thumbnail-container"
      className="overflow-hidden mt-5 mt-md-0 rounded position-relative d-flex flex-column justify-content-center align-items-center gap-4"
      style={{ minHeight: 250, width: "100%", height: 300 }}>
      {imgUrl != null ? (
        <div className=" position-relative w-100 h-100">
          <Image
            src={imgUrl}
            alt="preview image"
            width={740}
            height={250}
            className="img-fluid object-cover z-10"
          />
          <button
            type="button"
            onClick={(event) => handleRemoveImg(event)}
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
            <label
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
            </label>
            <input
              name="thumbnail-image"
              type="text"
              className="my-auto"
              placeholder="Masukkan URL Gambar thumbnail..."
              onChange={() => handleUrlInput}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UploadImage;
