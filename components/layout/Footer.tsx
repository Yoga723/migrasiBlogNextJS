"use client";
import React, { useState } from "react";
import whiteLogo from "@/public/assets/img/white-logo.webp";
import igImg1 from "@/public/assets/img/ig/1.jpg";
import igImg2 from "@/public/assets/img/ig/2.jpg";
import igImg3 from "@/public/assets/img/ig/3.jpg";
import igImg4 from "@/public/assets/img/ig/4.jpg";
import bankSupport from "@/public/assets/img/bank.webp";
import eWalletSupport from "@/public/assets/img/wallet.webp";
import FooterModal from "./modals/FooterModal";
import HAM from "@/public/assets/img/ham.webp";
import Image from "next/image";

const Footer = () => {
  const [showFooterForm, setShowFooterForm] = useState(false);
  return (
    <footer id="footer">
      <FooterModal
        show={showFooterForm}
        onHide={() => setShowFooterForm(false)}
      />
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <Image
                  src={whiteLogo}
                  width={151}
                  height={30}
                  className="footer-logo"
                  alt="Kelas Public Speaking Jogja"
                />
              </h3>
              <p>
                Wadah pengembangan diri membangun aura positif sekaligus meningkatkan kualitas skill, karir hingga level
                kehidupan Anda.
              </p>
              <br />
              <p>
                Kami memberikan pelatihan Kelas Public Speaking karena dengan menguasai Public Speaking, mental,
                perilaku, penampilan hingga sikap Anda terbentuk.
              </p>
              <br />
              <h4 className="d-flex justify-content-between">
                Contact Us<i className="bx bx-chevron-down d-md-none"></i>
              </h4>
              <div className="social-link d-flex mt-3">
                <a
                  href="https://wa.link/ms2gko"
                  className="text-light d-flex align-items-center justify-content-center">
                  <i className="bx bxl-whatsapp"></i>
                </a>
                <a
                  href="mailto:hello@dialogika.co"
                  className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-envelope-at-fill"></i>
                </a>
              </div>
              <hr />
              <p>Punya pertanyaan mengenai Dialogika?</p>
              <br />
              <p>
                <strong>Phone:</strong> +62 857-8000-7799
                <br />
                <strong>Phone:</strong> +62 851-6299-2597
                <br />
                <strong>Email:</strong> hello@dialogika.co
                <br />
              </p>
              <br />
              <br />
              <h4 className="d-flex justify-content-between">
                Follow Us<i className="bx bx-chevron-down d-md-none"></i>
              </h4>
              <div className="social-link d-flex mt-3">
                <a
                  href="https://link.dialogika.co/twitter"
                  className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://link.dialogika.co/facebook"
                  className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://link.dialogika.co/instagram"
                  className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://link.dialogika.co/linkedin"
                  className="d-flex align-items-center justify-content-center">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links accordion">
              <div className="">
                <a
                  href="#footer-best-program"
                  className="d-flex justify-content-between "
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>Online Program</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-best-program"
                  data-bs-parent=".footer-links">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/basic-plus.html">
                      Basic Plus
                      <span className="badge rounded-pill text-bg-info">Best Selling</span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/kids-plus.html">Kids Plus</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/basic-private.html">Basic Private</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/kids-private.html">Kids Private</a>
                  </li>
                </ul>
              </div>
              <br />

              <div className="">
                <a
                  href="#footer-corporate-program"
                  className="d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>Offline Program</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-corporate-program">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/index-jogja.html">
                      Yogyakarta
                      <span className="badge rounded-pill text-bg-info">Best Selling</span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../corporate/index.html">Corporate</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/index-tangsel.html">
                      Bintaro
                      <span className="badge rounded-pill text-bg-warning">Private Only</span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="https://www.dialogika.co/page/kelas-public-speaking-surabaya-new" />
                    Surabaya
                  </li>
                </ul>
              </div>
              <br />

              <div className="">
                <a
                  href="#footer-private-program"
                  className="d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>Kids Program</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-private-program"
                  data-bs-parent=".footer-links">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/kids-plus.html">Online class</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../program/first-kids.html">Offline class</a>
                  </li>
                </ul>
              </div>
              <br />

              <div className="">
                <a
                  href="#footer-career-info"
                  className="d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>Recruitment</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-career-info"
                  data-bs-parent=".footer-links">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../mentor/registration.html">Mentor</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../intern/index.html">Internship</a>
                  </li>
                </ul>
                <br />
              </div>

              <div className="">
                <a
                  href="#footer-useful-link"
                  className="d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>Useful Link</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-useful-link"
                  data-bs-parent=".footer-links">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../blog/index.html">Blog Dialogika</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../mentor/index.html">Mentor Dialogika</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <div className="">
                <a
                  href="#footer-about-dialogika"
                  className="d-flex justify-content-between"
                  data-bs-toggle="collapse"
                  id="footer-accordion">
                  <h4>About Dialogika</h4>
                  <i className="bx bx-chevron-down d-md-none"></i>
                </a>
                <ul
                  className="accordion-collapse collapse show"
                  id="footer-about-dialogika"
                  data-bs-parent=".footer-links">
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../about/">About Us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="https://www.dialogika.co/help/program-belajar.html">Frequent Asked Question</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="https://www.dialogika.co/help/">Help Center</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="https://www.dialogika.co/policy/">Privacy Policy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="../about/terms.html">Terms & Agreements</a>
                  </li>
                </ul>
                <br />
              </div>
              <div className="">
                <div className="footer-recent-post align-items-center">
                  <h4>
                    Instagram Post <i className="bx bx-chevron-down d-md-none"></i>
                  </h4>
                  <ul>
                    <li className="clearfix">
                      <Image
                        loading="lazy"
                        src={igImg1}
                        alt=""
                        className="rounded ig-post float-left"
                        style={{ marginRight: 10, width: 70, height: 70, borderRadius: 10 }}
                      />
                      <div className="post float-left">
                        <a
                          target="__blank"
                          href="https://www.instagram.com/p/Claa6CPISTB/">
                          Gambaran kelas praktek public speaking secara offline
                        </a>
                        <div className="date">
                          <i
                            className="bx bx-calendar"
                            aria-hidden="true"></i>{" "}
                          Nov 26, 2022
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="clearfix">
                      <Image
                        loading="lazy"
                        src={igImg2}
                        alt=""
                        className="rounded ig-post float-left"
                        style={{ marginRight: 10, width: 70, height: 70, borderRadius: 10 }}
                      />
                      <div className="post float-left">
                        <a
                          target="__blank"
                          href="https://www.instagram.com/p/CyXfjtkrJe7/">
                          Tips-tips agar di notice dosen didalam kelas dan latihan membangun persona.
                        </a>
                        <div className="date">
                          <i
                            className="bx bx-calendar"
                            aria-hidden="true"></i>{" "}
                          Oct 14, 2023
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="clearfix">
                      <Image
                        loading="lazy"
                        src={igImg3}
                        alt=""
                        className="rounded ig-post float-left"
                        style={{ marginRight: 10, width: 70, height: 70, borderRadius: 10 }}
                      />
                      <div className="post float-left">
                        <a
                          target="__blank"
                          href="https://www.instagram.com/p/CzAf73qr2mj/">
                          5 tips jitu atasi otak yang ngeblank saat berbicara di depan umum
                        </a>
                        <div className="date">
                          <i
                            className="bx bx-calendar"
                            aria-hidden="true"></i>{" "}
                          Oct 30, 2023
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="clearfix">
                      <Image
                        loading="lazy"
                        src={igImg4}
                        alt=""
                        className="rounded ig-post float-left"
                        style={{ marginRight: 10, width: 70, height: 70, borderRadius: 10 }}
                      />
                      <div className="post float-left">
                        <a
                          target="__blank"
                          href="blog-details.html">
                          5 trik untuk para newbie agar viral di depan umum. (Cocok untuk konten creator)
                        </a>
                        <div className="date">
                          <i
                            className="bx bx-calendar"
                            aria-hidden="true"></i>{" "}
                          Nov 2, 2023
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.footer-recent-post --> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4 className="d-flex justify-content-between">
                Join Whatsapp Group Community<i className="bx bx-chevron-down d-md-none"></i>
              </h4>
              <p>Secara Berkala Kami Akan Bagi-Bagi Tips & Trik Gratis, Dan Info Promo Lainnya</p>
              <form
                action="javascript:void"
                role="form"
                id="subcriptions"
                method="post">
                <input
                  type="tel"
                  name="Surel"
                  className="custom-input-footer"
                  placeholder="Join Our Class Group"
                  disabled
                />
                <button
                  type="button"
                  onClick={() => setShowFooterForm(true)}
                  data-bs-toggle="modal"
                  data-bs-target="#footerSubModal"
                  className="appointment-btn footerSubBtn">
                  Gabung
                </button>
              </form>
              <br />
              <br />
              <h4 className="d-flex justify-content-between">
                Payment Method<i className="bx bx-chevron-down d-md-none"></i>
              </h4>
              <p>
                <i className="bx bx-chevron-down"></i> Bank Transfer
              </p>
              <Image
                alt="BCA Syariah, BSI (Bank Syariah Indonesia), ATM Bersama"
                loading="lazy"
                width={416}
                height={78}
                src={bankSupport}
                className="w-100"
              />
              <br />
              <br />
              <p>
                <i className="bx bx-chevron-down"></i> E-Wallet
              </p>
              <Image
                alt="OVO, GOPAY, JENIUS, DANA"
                loading="lazy"
                width={416}
                height={78}
                src={eWalletSupport}
                className="w-100"
              />

              <ul className="list-group border-warning bg-transparent">
                <li className="list-group-item">
                  <b>Telah Terdaftar Oleh</b>
                  <br />
                  <Image
                    alt="HAM"
                    loading="lazy"
                    width={75}
                    height={75}
                    src={HAM}
                    className=""
                  />
                  <br />
                  <strong>Nomor:</strong> AHU-0118640.AH.01.11.TAHUN 2022
                  <br />
                  <strong>Registrasi: </strong>4022062334106037
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Dialogika</span>
            </strong>{" "}
            | PT. Dialogika Persona Indonesia
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a
            href="https://link.dialogika.co/twitter"
            className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://link.dialogika.co/facebook"
            className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://link.dialogika.co/instagram"
            className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://wa.link/ms2gko"
            className="google-plus">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://link.dialogika.co/linkedin"
            className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
