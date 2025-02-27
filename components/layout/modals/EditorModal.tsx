"use client";
import React from "react";
import { Modal } from "react-bootstrap";

interface editorModalProps {
  show: boolean;
  onHide: () => void;
}

// Untuk modal ini menggunakan react bootstrap. cek https://react-bootstrap.netlify.app/
const EditorModal = ({ show, onHide }: editorModalProps) => {
  return (
    <Modal
      id="guideModal"
      show={show}
      onHide={onHide}
      className="fade overflow-hidden show">
      <Modal.Header closeButton>Guide & Tips untuk editor</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default EditorModal;
