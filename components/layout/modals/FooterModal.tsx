"use client";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";
import HeaderImage from "@/public/assets/img/footer-header-2.webp";
import "./style.css";

interface FooterModalProps {
  show: boolean;
  onHide: () => void;
}

// Untuk modal ini menggunakan react bootstrap. cek https://react-bootstrap.netlify.app/
const FooterModal: React.FC<FooterModalProps> = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      id="footerSubModal"
      aria-labelledby="footerSubModal"
      centered
      dialogClassName="modal-dialog modal-fullscreen-md-down popup-box-dialog modal-dialog-centered modal-content position-relative overflow-hidden"
      contentClassName="overflow-hidden">
      {/* Header with image */}
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

      {/* Modal Body with Form */}
      <Modal.Body className="w-100 h-auto">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group
            className="mb-3 input-sub-footer-wrapper"
            controlId="inputSubFooterNama">
            <Form.Label className="form-label">Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama"
              name="inputSubFooterNama"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 input-sub-footer-wrapper"
            controlId="inputSubFooterWhatsapp">
            <Form.Label className="form-label">Whatsapp</Form.Label>
            <Form.Control
              type="tel"
              name="inputSubFooterWhatsapp"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 input-sub-footer-wrapper"
            controlId="inputSubFooterEmail">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="johndoe@gmail.com"
              name="inputSubFooterEmail"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 input-sub-footer-wrapper"
            controlId="inputSubFooterDomisili">
            <Form.Label className="form-label">Kota/Kabupaten</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jakarta"
              name="inputSubFooterDomisili"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      {/* Modal Footer with Buttons */}
      <Modal.Footer className="w-100 py-2">
        <Button
          style={{ borderRadius: "10px" }}
          className="yellow-dialogika-btn"
          onClick={onHide}>
          Close
        </Button>
        <Button
          style={{ borderRadius: "10px" }}
          className="blue-dialogika-btn"
          type="submit"
          id="subFooterBtn">
          Kirim & Gabung group
        </Button>
      </Modal.Footer>

      {/* Success Overlay */}
      <div
        className="success-overlay d-none"
        id="successOverlay">
        <div className="success-content text-center">
          <i
            className="bi bi-check-circle-fill"
            style={{ fontSize: "3rem", color: "#28a745" }}></i>
          <h2>Thank You!</h2>
          <p>Terimakasih telah bergabung dengan komunitas kami !</p>
          <Button
            className="btn btn-primary mt-3"
            onClick={onHide}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FooterModal;
