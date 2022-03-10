import React from "react";
import { AboutImage, resumePdf } from "../../images/IconAssets";

const About = (props) => {
  const downloadPdf = () => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href = resumePdf;
    a.download = "";
    a.click();
  };

  const servicesData = [
    {
      icon: "lni lni-code",
      title: "Front End Development",
      detail:
        "I build the visual components of a website, using the best of the cutting edge technologies available out there.",
    },
    {
      icon: "lni lni-vector",
      title: "Project Management",
      detail:
        "Some people know how to manage project, some don't and projects become just hopeless. I am part of the good ones.",
    },
    {
      icon: "lni lni-invention",
      title: "Problem Solver",
      detail:
        "There is always a solution to all the problems, and I make sure to find the most appropriate solutions.",
    },
    {
      icon: "lni lni-library",
      title: "Mentor",
      detail:
        "I genuinely care about people, and love helping fellow developers work on their code.",
    },
    {
      icon: "lni lni-mobile",
      title: "Mobile-Friendly Websites",
      detail:
        "I build responsive design that makes website accessible to all users, regardless of their device.",
    },
  ];

  return (
    <React.Fragment>
      {/* /////////////////////////////////// MI ABOUT AREA ENDS /////////////////////////////////////////// */}

      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          {/* ///////////////////////////////// */}
          <div className="mi-sectiontitle">
            <h2>About Me</h2>
            <span>About Me</span>
          </div>
          {/* ///////////////////////////////// */}

          <div className="row">
            {/* ////////////////////////////////////////////////// */}
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img src={AboutImage} alt="about" />
              </div>
            </div>
            {/* ////////////////////////////////////////////////// */}
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">Vipin</span>
                </h3>

                <p>
                  I don’t like to define myself by the work I’ve done. I define
                  myself by the work I want to do. Skills can be taught,
                  personality is inherent. I prefer to keep learning, continue
                  challenging myself, and do interesting things that matter.
                </p>
                <p>
                  Fueled by high energy levels and boundless enthusiasm, I’m
                  easily inspired and more then willing to follow my
                  fascinations wherever they take me.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Vipin Chaudhary
                  </li>
                  {/* <li>
                    <b>Age</b> 23 Years
                  </li> */}
                  <li>
                    <b>Nationality</b> Indian
                  </li>
                  <li>
                    <b>Languages</b> English, Hindi
                  </li>
                  <li>
                    <b>Address</b>
                    {/* H.no. 2173-A/3, Rajiv Nagar,  */}
                    Gurugram, Haryana. 122001
                  </li>
                  {/* <li>
                    <b>Freelance</b> Available
                  </li> */}
                </ul>

                <button className="mi-button" onClick={downloadPdf}>
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* ///////////////////////////////// */}
        </div>
      </div>

      {/* /////////////////////////////////// MI ABOUT AREA ENDS /////////////////////////////////////////// */}

      {/* /////////////////////////////////// MI SERVICE AREA STARTS /////////////////////////////////////////// */}

      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          {/* ///////////////////////////////// */}
          <div className="mi-sectiontitle">
            <h2>Services</h2>
            <span>Services</span>
          </div>
          {/* ///////////////////////////////// */}
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {/* <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <i className="lni lni-code"></i>
                  </span>
                  <h5>Front End Development</h5>
                  <p>
                    I build the visual components of a website, using the best
                    of the cutting edge technologies available out there.
                  </p>
                </div>
              </div> */}

              {servicesData.map((item, i) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12 mt-30" key={i}>
                    <div className="mi-service">
                      <span className="mi-service-icon">
                        <i className={item.icon}></i>
                      </span>
                      <h5>{item.title}</h5>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ///////////////////////////////// */}
        </div>
      </div>

      {/* /////////////////////////////////// MI SERVICE AREA ENDS /////////////////////////////////////////// */}
    </React.Fragment>
  );
};

export default About;
