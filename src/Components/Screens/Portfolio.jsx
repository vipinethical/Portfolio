import React from "react";
import {
  // portfolio_1,
  portfolio_cms,
  portfolio_lms,
  portfolio_lms_full,
  portfolio_webapp,
  portfolio_admin_panel,
  // portfolio_website,
  portfolio_website_full,
  pricing_website,
} from "../../images/IconAssets";
import { useState } from "react";

const Portfolio = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const portfolioListData = [
    // {
    //   title: "Responsive Website",
    //   subtitle: "iAugmentor Pvt. Labs. Ltd. main website",
    //   src: portfolio_website,
    //   src_full: portfolio_website_full,
    //   href: "https://www.iaugmentor.com/",
    // },
    {
      title: "React Admin Panel",
      subtitle: "Platform consits of multiple systems like LMS, CMS etc",
      src: portfolio_admin_panel,
      src_full: portfolio_admin_panel,
      href: "",
    },
    {
      title: "Web-App",
      subtitle:
        "Platform where clients can practice applying new skills and knowledge",
      src: portfolio_webapp,
      src_full: portfolio_webapp,
      // href: "https://app.iaugmentor.com/login",
      href: "",
    },
    {
      title: "Learning Management System",
      subtitle: "LMS can deliver reports detailing how learners performed",
      src: portfolio_lms,
      src_full: portfolio_lms_full,
      // href: "https://learning.iaugmentor.com/login",
      href: "",
    },
    {
      title: "Content Management System",
      subtitle: "Admin panel which is used for content CRUD ",
      src: portfolio_cms,
      src_full: portfolio_cms,
      // href: "https://cms.iaugmentor.com/login",
      href: "",
    },
  ];

  return (
    <React.Fragment>
      <div className="mi-about mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Portfolio</h2>
            <span>Portfolio</span>
          </div>
          {/* ////////////////////////////////////////////////// */}

          <div className="row mt-30-reverse">
            {/* .................................................................. */}

            {portfolioListData.map((item, i) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={i}>
                  <div className="mi-portfolio mi-portfolio-visible">
                    <div className="mi-portfolio-image">
                      <img src={item.src} alt={item.title} />
                      <ul>
                        <li>
                          <button
                            onClick={() => {
                              setModalImgSrc(item.src_full);
                              setShowModal(!showModal);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                              <line x1="11" y1="8" x2="11" y2="14"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            target={
                              item.href === null || item.href === ""
                                ? ""
                                : "_blank"
                            }
                            href={
                              item.href === null || item.href === ""
                                ? ""
                                : item.href
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h5>
                      <a
                        rel="noopener noreferrer"
                        target={
                          item.href === null || item.href === "" ? "" : "_blank"
                        }
                        href={
                          item.href === null || item.href === ""
                            ? ""
                            : item.href
                        }
                      >
                        {item.title}
                      </a>
                    </h5>
                    <h6>{item.subtitle}</h6>
                  </div>
                </div>
              );
            })}

            {/* .................................................................. */}
          </div>

          {/* ////////////////////////////////////////////////// */}
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////// */}

      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Website</h2>
            <span>Website</span>
          </div>
          {/* ////////////////////////////////////////////////// */}

          <div className="row mt-30">
            {/* left box starts */}
            <div className="col-md-4">
              {/* ............................... */}
              <h5 className="mi-portfolio-websitecard-title">Pricing Page</h5>
              <div className="mi-portfolio-website-card">
                <a
                  href="https://react-webpages-12dfd.web.app/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  <img alt="pricing_website" src={pricing_website} />
                </a>
              </div>
              {/* ............................... */}
            </div>
            {/* left box ends */}

            {/* center box starts */}
            <div className="col-md-4">
              {/* ............................... */}
              <h5 className="mi-portfolio-websitecard-title">
                iAugmentor Labs. Website
              </h5>
              <div className="mi-portfolio-website-card">
                <a
                  // href="https://www.iaugmentor.com/"
                  href="/portfolio"
                  rel="noopener noreferrer"
                  // target={"_blank"}
                >
                  <img alt="pricing_website" src={portfolio_website_full} />
                </a>
              </div>
              {/* ............................... */}
            </div>
            {/* center box ends */}

            {/* right box starts */}
            <div className="col-md-4"></div>
            {/* right box ends */}
          </div>

          {/* ////////////////////////////////////////////////// */}
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////// */}

      {/* modal for image zoom */}
      <div
        className="mi-modal-container mi-modal-full-dimension mi-modal-fade-in-strong"
        style={{ display: showModal === false ? "none" : "block" }}
      >
        <div className="mi-modal-nav">
          <div className="mi-modal-toolbar">
            <div
              className="mi-modal-toolbar-button mi-modal-flex-centered"
              title="Close"
              onClick={() => setShowModal(!showModal)}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="mi-modal-svg-path"
                  d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mi-modal-absoluted mi-modal-full-dimension">
          <div
            className="mi-modal-source-outer mi-modal-absoluted mi-modal-full-dimension mi-modal-flex-centered"
            style={{ transform: "translateX(0px)" }}
          >
            <div
              className="mi-modal-fade-in-strong"
              style={{
                padding: "20px",
                background: "rgba(18,18,18,0.9)",
                // background: "rgba(25,29,43,0.9)",
              }}
            >
              <div className="mi-modal-image-box">
                <img
                  className="mi-modal-source mi-modal-opacity-1"
                  src={modalImgSrc}
                  alt="portfolio"
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  className="mi-close-button mt-30"
                  onClick={() => setShowModal(!showModal)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal for image zoom */}
    </React.Fragment>
  );
};

export default Portfolio;
