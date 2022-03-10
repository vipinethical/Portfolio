import React from "react";
import Bubbles from "../../Elements/Bubbles";

const Home = (props) => {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: "lni-facebook",
    },
    {
      href: "https://twitter.com",
      icon: "lni-twitter ",
    },
    {
      href: "https://github.com/",
      icon: "lni-github",
    },
  ];

  return (
    <React.Fragment>
      <div className="mHome-area">
        <div className="mHome-particle">
          <Bubbles />
        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mHome-content">
                {/* ////////////////////////////////////// */}
                <h1>
                  Hi, I am <span className="color-theme">Vipin</span>
                </h1>
                {/* ///////////////////////////////// */}
                <p>
                  Enthusiastic about web development and particularly excited
                  about React Javascript. I specialise in architecting and
                  building complex web applications. I enjoy functional
                  programming and technologies like React and Redux. I have
                  strong skills and interest in UI/UX and drive my decisions to
                  provide the best for final users.
                </p>
                {/* ////////////////////////////////// */}
                <ul className="mSocialicons mSocialicons-bordered">
                  {socialLinks.map((item, i) => {
                    return (
                      <li key={i}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={item.href}
                        >
                          <i className={`lni ${item.icon}`}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {/* //////////////////////////////// */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
