"use client";
import Image from "next/image";
import logoDialogika from "@/public/assets/img/logo.webp";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [showTopbar, setShowTopbar] = useState(true);
  const [hideHeader, setHideHeader] = useState(true);
  const path = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 100) setShowTopbar(false);
    else setShowTopbar(true);
  };

  useEffect(() => {
    // Hide header bila sedang buka halaman admin dan buat artikel blog baru
    if (path && path.includes("/admin/new-story")) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
    // Initialize with current scroll position
    setShowTopbar(window.scrollY <= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  return (
    <>
      <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${!showTopbar ? " topbar-scrolled" : ""} ${
          hideHeader && "d-none"
        }`}>
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i> <Link href="mailto:admin@dialogika.co">admin@dialogika.co</Link>
            <i className="bi bi-phone"></i> +62 851 6299 2597
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <Link
              href="https://link.dialogika.co/twitter"
              className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              href="https://link.dialogika.co/facebook"
              className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              href="https://link.dialogika.co/instagram"
              className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link
              href="https://link.dialogika.co/linkedin"
              className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      {/*   <!-- ======= Header ======= --> */}
      <header
        id="header"
        className={`fixed-top ${!showTopbar && "header-scrolled"}  ${hideHeader && "d-none"}`}>
        <div className="container d-flex align-items-center">
          <Link
            href="../index.html"
            className="logo me-auto">
            <Image
              src={logoDialogika}
              alt="Logo Dialogika"
              width={158}
              height={31}
              className="img-fluid"
            />
          </Link>

          <nav
            id="navbar"
            className="navbar order-last order-lg-0">
            <ul className="navbar-desktop-list">
              <li>
                <Link
                  className="nav-link scrollto"
                  href="index.html">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link href="../program">
                  <span>Program</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li className="dropdown">
                    <button
                      className="btn w-100 text-start"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <span>Online</span> <i className="bi bi-chevron-right"></i>
                    </button>
                    <ul>
                      <li>
                        <Link href="https://www.dialogika.co/program/basic-play.html">
                          Basic Play <span className="badge rounded-pill text-bg-success">Best Buy</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.dialogika.co/program/basic-plus.html">Basic Plus</Link>
                      </li>
                      <li>
                        <Link href="https://www.dialogika.co/program/basic-private.html">Basic Private</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <button
                      className="btn w-100 text-start"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <span>Offline</span> <i className="bi bi-chevron-right"></i>
                    </button>
                    <ul>
                      <li>
                        <Link href="https://www.dialogika.co/program/first-class.html">
                          First Class <span className="badge rounded-pill text-bg-success">Best Buy</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.dialogika.co/program/first-kids.html">First Kids</Link>
                      </li>
                      <li>
                        <Link href="https://www.dialogika.co/program/first-private.html">First Private</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="https://www.dialogika.co/intern/">
                  <span>Internship</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="https://www.dialogika.co/intern/client-manager.html">
                      <span>Client Manager</span>
                      <span className="badge bg-success">Best</span>
                    </Link>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/telemarketing.html">
                      <span>Telemarketing</span>
                      <span className="badge bg-success">Best</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/digital-marketing.html">Digital Marketing</Link>{" "}
                  </li>
                  <hr />
                  <li>
                    <Link href="https://www.dialogika.co/intern/model-talent.html">
                      <span>Model Talent</span>
                      <span className="badge bg-success">Best</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/social-media-analyst.html">
                      <span>Social Media Analyst</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/content-writing.html">Content Writing</Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/design-specialist.html">Design Specialist</Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/html-writing.html">HTML Writing</Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/video-editing.html">Video Editor</Link>
                  </li>

                  <li>
                    <hr />
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/people-development.html">People Development</Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/hr-generalist.html">HR Generalist</Link>
                  </li>
                  <li>
                    <Link href="https://www.dialogika.co/intern/recruiter-specialist.html">
                      <span>Recruiter Specialist</span>
                      <span className="badge bg-success">Best</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="https://www.dialogika.co/event/">
                  Event
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="https://www.dialogika.co/service/">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  href="https://www.dialogika.co/shop/">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto active"
                  href="https://www.dialogika.co/blog/">
                  Blog
                </Link>
              </li>
            </ul>
            <i
              className="bi bi-list d-block d-md-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              role="button"
              aria-controls="offcanvasNavbar"></i>
          </nav>

          {/* <!-- .navbar --> */}

          <Link
            href="../promo/"
            target="_blank"
            className="appointment-btn">
            Promo<span className="d-none d-md-inline"> Class</span>
          </Link>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Mobile Nav ======= --> */}
      <nav className={` ${hideHeader && "d-none"} navbar-canvas fixed-top`}>
        <div className="container-fluid">
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <Link href="../index.html">
                <Image
                  src={logoDialogika}
                  alt="Logo Dialogika"
                  width={158}
                  height={31}
                  className="img-fluid"
                />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <Link href="../index.html">
                <div className="card">
                  <div className="card-body">Home</div>
                </div>
              </Link>
              <div className="card">
                <Link
                  href="#program-collapse"
                  data-bs-toggle="collapse">
                  <div className="card-body d-flex justify-content-between">
                    <span>Program</span>
                    <i className="bx bxs-chevron-down bx-tada"></i>
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="program-collapse">
                  <button
                    className="w-100 text-start bg-white"
                    style={{ color: "#0b2b6a", textDecoration: "none" }}
                    data-bs-target="#program-online"
                    data-bs-toggle="collapse">
                    <div className="card">
                      <div className="card-body d-flex justify-content-between">
                        <span>Online</span>
                        <i className="bx bxs-chevron-down bx-tada"></i>
                      </div>
                      <div
                        className="collapse"
                        id="program-online">
                        <Link href="../program/basic-play.html">
                          <div className="card card-body">Basic Play</div>
                        </Link>
                        <Link href="../program/basic-class.html">
                          <div className="card card-body">
                            <div className="justify-content-between d-flex">
                              <span>Basic Class</span>
                              <span className="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                          </div>
                        </Link>
                        {/* <Link href="../program/basic-private.html"><div className="card card-body">Basic Private</div></Link> */}
                        <hr />
                        <Link href="../program/kids-play.html">
                          <div className="card card-body">Kids Play</div>
                        </Link>
                        <Link href="../program/kids-class.html">
                          <div className="card card-body">
                            <div className="justify-content-between d-flex">
                              <span>Kids Class </span>
                              <span className="badge bg-info rounded-pill">Best BUy</span>
                            </div>
                          </div>
                        </Link>
                        {/* <Link href="../program/kids-plus.html"><div className="card card-body">Kids Private</div></Link> */}
                      </div>
                    </div>
                  </button>
                  <button
                    data-bs-target="#program-offline"
                    style={{ color: "#0b2b6a", textDecoration: "none" }}
                    className="w-100 text-start bg-white"
                    data-bs-toggle="collapse">
                    <div className="card">
                      <div className="card-body d-flex justify-content-between">
                        <span>Offline</span>
                        <i className="bx bxs-chevron-down bx-tada"></i>
                      </div>
                      <div
                        className="collapse"
                        id="program-offline">
                        <Link href="../program/first-class.html">
                          <div className="card card-body">
                            <div className="justify-content-between d-flex">
                              <span>First Class</span>
                              <span className="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="../program/first-kids.html">
                          <div className="card card-body">
                            <div className="justify-content-between d-flex">
                              <span>First Kids </span>
                              <span className="badge bg-info rounded-pill">New</span>
                            </div>
                          </div>
                        </Link>
                        <hr />
                        <Link href="../program/first-private.html">
                          <div className="card card-body">First Private</div>
                        </Link>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="card">
                <Link
                  href="#position-collapse"
                  data-bs-toggle="collapse">
                  <div className="card-body d-flex justify-content-between">
                    <span>Position</span>
                    <i className="bx bxs-chevron-down bx-tada"></i>
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="position-collapse">
                  <Link href="https://www.dialogika.co/intern/client-manager.html">
                    <div className="card card-body">
                      <div className="d-flex justify-content-between">
                        <span>Client Manager</span>
                        <span className="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div>
                  </Link>
                  <hr />
                  <Link href="https://www.dialogika.co/intern/telemarketing.html">
                    <div className="card card-body">
                      <div className="d-flex justify-content-between">
                        <span>Telemarketing</span>
                        <span className="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/digital-marketing.html">
                    <div className="card card-body">Digital Marketing</div>
                  </Link>
                  <hr />
                  <Link href="https://www.dialogika.co/intern/model-talent.html">
                    <div className="card card-body">
                      <div className="d-flex justify-content-between">
                        <span>Model Talent</span>
                        <span className="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/content-writing.html">
                    <div className="card card-body">Content Writing</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/design-specialist.html">
                    <div className="card card-body">Design Specialist</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/social-media-analyst.html">
                    <div className="card card-body">Social Media Analyst</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/html-writing.html">
                    <div className="card card-body">HTML Writing</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/video-editing.html">
                    <div className="card card-body">Video Editor</div>
                  </Link>
                  <hr />
                  <Link href="https://www.dialogika.co/intern/people-development.html">
                    <div className="card card-body">People Development</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/hr-generalist.html">
                    <div className="card card-body">HR Generalist</div>
                  </Link>
                  <Link href="https://www.dialogika.co/intern/recruiter-specialist.html">
                    <div className="card card-body">
                      <div className="d-flex justify-content-between">
                        <span>Recruiter Specialist</span>
                        <span className="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link href="../event/">
                <div className="card card-body">
                  <div className="justify-content-between d-flex">
                    <span>Event </span>
                    {/* <span className="badge bg-info rounded-pill">New</span>  */}
                  </div>
                </div>
              </Link>
              <Link
                href="../service/"
                onClick={() => false}>
                <div className="card card-body">
                  <div className="justify-content-between d-flex">
                    <span>Service </span>
                    <span className="badge bg-warning rounded-pill">Coming Soon</span>
                  </div>
                </div>
              </Link>
              <Link
                href="../shop/"
                onClick={() => false}>
                <div className="card card-body">
                  <div className="justify-content-between d-flex">
                    <span>Shop </span>
                    <span className="badge bg-warning rounded-pill">Coming Soon</span>
                  </div>
                </div>
              </Link>
              <Link href="../blog/">
                <div className="card card-body">Blog</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
