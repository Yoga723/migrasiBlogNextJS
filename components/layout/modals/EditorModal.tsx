"use client";
import Image from "next/image";
import React from "react";
import { Accordion, Modal } from "react-bootstrap";
import { guideGambar1, guideGambar2, guideGambar3, guideGambar4 } from ".";

interface editorModalProps {
  show: boolean;
  onHide: () => void;
}

// Modal untuk guide halaman membuat artikel blog baru
// Untuk modal ini menggunakan react bootstrap. cek https://react-bootstrap.netlify.app/
const EditorModal = ({ show, onHide }: editorModalProps) => {
  return (
    <Modal
      id="guideModal"
      show={show}
      onHide={onHide}
      className="fade show modal-xl"
      dialogClassName="modal-90w" // custom class
      aria-labelledby="guide-modal">
      <Modal.Header closeButton>Guide & Tips untuk editor</Modal.Header>
      <Modal.Body>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen>
          {/* Start of Guide memasukkan Gambar */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Cara Memasukkan Gambar</Accordion.Header>
            <Accordion.Body className="">
              <h5>
                1. Cari gambar di internet. Contoh :{" "}
                <a
                  href="https://www.pexels.com/"
                  target="_blank"
                  className="text-decoration-underline ">
                  Pexels
                </a>
                ,{" "}
                <a
                  href="https://yandex.com/images/"
                  target="_blank"
                  className="text-decoration-underline ">
                  Yandex
                </a>
                ,{" "}
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  className="text-decoration-underline ">
                  Unsplash
                </a>
              </h5>
              <h5 className="mt-5">
                2. Click kanan pada gambar dan pilih <b>`Open Image in New Tab`</b>
              </h5>
              <Image
                src={guideGambar1}
                className="img-fluid w-auto mx-auto rounded-3"
                style={{ height: "auto" }}
                alt="guide gambar 1 "
              />
              <h5 className="mt-5">
                3. Copy link gambar tersebut. Pindah ke halaman text editor dan click icon gambar {`->`} masukkan
                linknya ke URL dan submit
              </h5>
              <Image
                src={guideGambar2}
                className="img-fluid w-auto mx-auto rounded-3"
                style={{ height: "auto" }}
                alt="guide gambar 1 "
              />

              <h5 className="mt-5">
                4. Click gambarnya untuk kustomisasi, gambar bisa diperbesar atau diperkecil. Pilih Edit {`->`} Advanced
                dan masukkan `dialogika-img` di Classes dan Id kemudian <i>Apply</i>.
              </h5>
              <Image
                src={guideGambar3}
                className="img-fluid w-auto mx-auto rounded-3"
                style={{ height: "auto" }}
                alt="guide gambar 1 "
              />

              <h5 className="mt-5">
                5. Bila ingin ada text disamping gambar, pilih vertical align dan kemudian click disamping gambar
              </h5>
              <Image
                src={guideGambar4}
                className="img-fluid w-auto mx-auto rounded-3"
                style={{ height: "auto" }}
                alt="guide gambar 1 "
              />
            </Accordion.Body>
          </Accordion.Item>
          {/* End of Guide memasukkan Gambar */}

          {/* Start of Guide 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Guide 2</Accordion.Header>
            <Accordion.Body>Isi Guide 2</Accordion.Body>
          </Accordion.Item>
          {/* End of Guide 2 */}

          {/* Start of Guide 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Guide 3</Accordion.Header>
            <Accordion.Body>Isi Guide 3</Accordion.Body>
          </Accordion.Item>
          {/* End of Guide 3 */}

          <Accordion.Item eventKey="3">
            <Accordion.Header>Guide 4</Accordion.Header>
            <Accordion.Body>Isi Guide 4</Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default EditorModal;
