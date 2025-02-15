// components/FooterModal.jsx
import React from "react";
import HeaderImage from "@/public/assets/img/footer-header-2.webp";
import "./style.css";
import Image from "next/image";

const FooterModal = () => {
  return (
    <div
      className="modal fade overflow-hidden"
      id="footerSubModal"
      tabIndex={-1}
      aria-hidden="true"
      aria-labelledby="footerSubModal">
      <div className="modal-dialog modal-fullscreen-md-down popup-box-dialog modal-dialog-centered modal-content position-relative overflow-hidden">
        <div
          className="d-flex flex-shrink-0 align-items-center justify-content-between position-relative overflow-hidden"
          style={{ height: "200px" }}>
          <div>
            <Image
              src={HeaderImage}
              alt="Bergabung dengan Komunitas Kami"
              className="img-fluid object-fit-contain"
            />
          </div>
        </div>
        <div className="modal-body w-100 h-auto">
          <form>
            {/* Modal form fields */}
            <div className="mb-3 input-sub-footer-wrapper">
              <label
                className="form-label"
                htmlFor="inputSubFooterNama">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama"
                id="inputSubFooterNama"
                name="inputSubFooterNama"
              />
            </div>
            <div className="mb-3 input-sub-footer-wrapper">
              <label
                className="form-label"
                htmlFor="inputSubFooterWhatsapp">
                Whatsapp
              </label>
              <input
                type="tel"
                id="inputSubFooterWhatsapp"
                name="inputSubFooterWhatsapp"
              />
            </div>
            <div className="mb-3 input-sub-footer-wrapper">
              <label
                className="form-label"
                htmlFor="inputSubFooterEmail">
                Email
              </label>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                id="inputSubFooterEmail"
                name="inputSubFooterEmail"
              />
            </div>
            <div className="mb-3 input-sub-footer-wrapper">
              <label
                className="form-label"
                htmlFor="inputSubFooterDomisili">
                Kota/Kabupaten
              </label>
              <input
                type="text"
                placeholder="Jakarta"
                id="inputSubFooterDomisili"
                name="inputSubFooterDomisili"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer w-100 py-2">
          <button
            style={{ borderRadius: "10px" }}
            className="yellow-dialogika-btn"
            data-bs-toggle="modal"
            data-bs-target="#footerSubModal">
            Close
          </button>
          <button
            style={{ borderRadius: "10px" }}
            className="blue-dialogika-btn"
            id="subFooterBtn">
            Kirim & Gabung group
          </button>
        </div>
        <div
          className="success-overlay d-none"
          id="successOverlay">
          <div className="success-content text-center">
            <i
              className="bi bi-check-circle-fill"
              style={{ fontSize: "3rem", color: "#28a745" }}></i>
            <h2>Thank You!</h2>
            <p>Terimakasih telah bergabung dengan komunitas kami !</p>
            <button
              className="btn btn-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#footerSubModal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterModal;
