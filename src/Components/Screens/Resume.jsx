import React, { useState, useEffect } from "react";

const Resume = (props) => {
  const [htmlWidth, setHtmlWidth] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [javaScriptWidth, setJavaScriptWidth] = useState(0);
  const [jQueryWidth, setJQueryWidth] = useState(0);
  const [reactWidth, setReactWidth] = useState(0);
  const [angularWidth, setAngularWidth] = useState(0);

  useEffect(() => {
    setHtmlWidth(90);
    setCssWidth(85);
    setJavaScriptWidth(85);
    setJQueryWidth(75);
    setReactWidth(95);
    setAngularWidth(75);

    return () => {
      setHtmlWidth(0);
      setCssWidth(0);
      setJavaScriptWidth(0);
      setJQueryWidth(0);
      setReactWidth(0);
      setAngularWidth(0);
    };
  }, []);

  return (
    <React.Fragment>
      {/* //////////////////////////////  MY SKILLS STARTS ////////////////////////////////////// */}
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>My Skills</h2>
            <span>My Skills</span>
          </div>
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {/* .................................................. */}
              <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">ReactJS</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">{reactWidth}%</div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${reactWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Angular</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">
                      {angularWidth}%
                    </div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${angularWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">HTML5</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">{htmlWidth}%</div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${htmlWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">CSS3</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">{cssWidth}%</div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${cssWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Javascript</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">
                      {javaScriptWidth}%
                    </div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${javaScriptWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Redux</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">{jQueryWidth}%</div>
                    <div className="mi-progress-container">
                      <span
                        className="mi-progress-active"
                        style={{ width: `${jQueryWidth}%` }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* .................................................. */}
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////  MY SKILLS END  /////////////////////////////////////////// */}

      {/* ////////////////////////////////////////// RESUME STARTS  /////////////////////////////////////////////*/}
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          {/* .................................................. */}
          <div className="mi-sectiontitle">
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          {/* .................................................. */}

          {/* .................................................. */}
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <i className="lni lni-briefcase"></i>
            </span>
            <h4>Working Experience</h4>
          </div>
          {/* .................................................. */}

          <div className="mi-resume-wrapper">
            {/* .................................................. */}
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">September 2023 - present</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Software Developer(Frontend)</h5>
                <h6 className="mi-resume-company">Freelacing</h6>
                <p>
                  • Developed scalable and dynamic web applications and websites{" "}
                  <br />• Worked collaboratively with clients to understand
                  their requirements and deliver high-quality results.
                  <br /> • Developed landing pages, dashboards, admin panels and
                  online applications using React JS and Javascript.
                  <br />• Revamped Webapps according to client requirement
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">September 2022 - August 2023</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Software Developer</h5>
                <h6 className="mi-resume-company">
                  Antino Labs, Gurugram(Haryana)
                </h6>
                <p>
                  • Worked as a front-end developer at Antino Labs, developing
                  software solutions that contributed to the continuous
                  improvement of the development process
                  <br />• Worked collaboratively with clients to understand
                  their requirements and deliver high-quality results.
                  <br /> • Developed scalable and dynamic web applications ,
                  dashboards, admin panels and online applications using React
                  JS and Javascript .
                  <br />• Fixed Bugs in Existing Project
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">May 2022 - August 2022</h6>
              </div>
              <div className="mi-resume-details">
                <h5>React Developer</h5>
                <h6 className="mi-resume-company">Begig, Gurugram(Haryana)</h6>
                <p>
                  • Deepened understanding of HTML, CSS, and Javascript for
                  clean and organized code
                  <br /> • Created responsive UI using Ant Design.
                  <br /> • Integrated APIs for data fetching and display
                  <br />• Fixed Bugs in Existing Project
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">June 2021 - August 2021</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Frontend Web Developer</h5>
                <h6 className="mi-resume-company">
                  Digital Flow, Karnataka(Remote)
                </h6>
                <p>
                  • Developed designs to meet specific requirements such as
                  quick-loading sites with particular layouts. <br />• Developed
                  website compatible with multiple browsers.
                  <br /> • Developed landing pages, dashboards, admin panels and
                  online applications using React JS and Javascript scripting.
                  <br />• Fixed Bugs in Existing Project
                </p>
              </div>
            </div>
            {/* .................................................. */}
          </div>
          {/* .................................................. */}

          <div className="mt-30"></div>
          {/* .................................................. */}
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <i className="lni lni-book"></i>
            </span>
            <h4>Educational Qualifications</h4>
          </div>
          {/* .................................................. */}

          <div className="mi-resume-wrapper">
            {/* .................................................. */}
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2018 - 2022</h6>
              </div>
              <div className="mi-resume-details">
                <h5>B.Tech in Computer Science and Engineering (CSE) </h5>
                <h6 className="mi-resume-company">
                  Manav Rachna University, Haryana
                </h6>
                <p>Passed with 75% aggregate</p>
              </div>
            </div>
            {/* .................................................. */}

            {/* .................................................. */}
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2016 - 2017</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Higher Secondary School Certificate(HSC)</h5>
                <h6 className="mi-resume-company">
                  Shah Satnam Ji Boys School, Sirsa (C.B.S.E)
                </h6>
                <p>
                  Passed with 76% aggregate in science (non-medical stream) with
                  major subjects as physics, chemistry and mathematics.
                </p>
              </div>
            </div>
            {/* .................................................. */}

            {/* .................................................. */}
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2014 - 2015</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Secondary School Certificate (SSC)</h5>
                <h6 className="mi-resume-company">
                  Lt. Atul Katarya Memorial School, Gurugram (I.C.S.E)
                </h6>
                <p>
                  Passed the Indian Certificate of Secondary Education
                  (I.C.S.E.) Board examinations with a score of 76%.
                </p>
              </div>
            </div>
            {/* .................................................. */}
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////// RESUME ENDS  /////////////////////////////////////////////*/}
    </React.Fragment>
  );
};

export default Resume;
